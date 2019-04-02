const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../model/book')
const Author = require('../model/author')
const reqTracker = require ('../orpheus/trackResolver');

const resolverCounter = {};

// 3 current responsibilities - define types, define relationship between types, and define route queries

// describe the object types in the schema; schema here defines the graph and the object types on the graph

// desctructure Graph QL Object Type - grab this function from the graphql package, so we can store and use it inside this file
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema, 
  GraphQLID, 
  GraphQLInt, 
  GraphQLList,
  GraphQLNonNull 
} = graphql;

// dummy data
// var books = [
//   {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1'},
//   {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
//   {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'},
//   {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2'},
//   {name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3'},
//   {name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3'}
// ];

// var authors = [
//   {name: 'Patrick Rothfuss', age: 44, id: '1'},
//   {name: 'Brandon Sanderson', age: 42, id: '2'},
//   {name: 'Terry Pratchett', age: 66, id: '3'}
// ];

const BookType = new GraphQLObjectType( {
  name: 'Book',
  fields: () => ({
    // fields property will actually be a function; needs to be a function because later on when we have multiple types and they have references to one another, then one type might not know what another type is unless we wrap those fields in a function
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args) {
        reqTracker.addEntry('author');
        // console.log(parent) // books array
        // return _.find(authors, {id: parent.authorId});
        return Author.findOne({_id: parent.authorId}); // this will look in author collection and look for Id we pass in / genre, author, all books
      }
    }
  })
});

const AuthorType = new GraphQLObjectType( {
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        reqTracker.addEntry('book');
        // return _.filter(books, {authorId: parent.id});
        return Book.find({authorId: parent.id}); // look all records in book collection based on criteria in object
    }}
  })
});

// how we describe how a user can initially jump into the graph and grab data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // don't need to wrap in a function because we don't need to worry about the order
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // write code to get data from db / other source; resolve functions gets fired when query comes in
        console.log('resolving book inside of root');
        // return _.find(books, {id: args.id});
        reqTracker.addEntry('rootBook');
        // timeThisShit(Book.findById, args.id);
        return Book.findById(args.id);
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        console.log('resolving author inside of root');
        reqTracker.addEntry('rootAuthor');
        // return _.find(authors, {id: args.id});
        return Author.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        console.log('resolving multiple books inside of root');
        reqTracker.addEntry('rootBooks');
        // return books // will return entire list of books depending on what we ask for
        return Book.find({}); // pass in empty object b/c an empty object with no criteria will return all records in the collection
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        console.log('resolving multiple authors inside of root');
        reqTracker.addEntry('rootAuthors');
        // return authors
        return Author.find({});
      }
    }
  }
});

// Mutations are what allows us to make mutate/change/update the data. In graphql we need to explicitly define our mutations; to say what data can be changed, added, deleted, etc.

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve(parent, args){
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        authorId: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args){
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  }
})

// async function explainThisShit(args) {
//   const stats = await Book.findById(args.id).explain("executionStats");
//   console.log(stats);
// }

// function timeThisShit(callback, args) {
//   let startingTime = Date.now();
//   callback(args).then(() => console.log(Date.now() - startingTime));
// }

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports.resolverCounter = resolverCounter;