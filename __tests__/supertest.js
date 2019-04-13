const request = require('supertest');
const server = 'http://localhost:3500';

describe('/graphql', () => {
  describe('GET', () => {
    it('checks if graphql is running', () => {
      return request(server)
      .get('/graphql')
      .expect('Content-Type', /application\/json/)
      .expect(400);
    })
  })
})

describe('/resolvers', () => {
  describe('GET', () => {
    it('returns an object containing the resolver count', () => {
      return request(server)
      .get('/resolvers')
      .expect(res => {
        if (typeof res.body !== 'object'){
          throw new Error('items in the array are not object')
        }
      })
      .expect(200);
    })
  })
})

describe('/requests', () => {
  describe('GET', () => {
    it('returns an object containing 3 key-value pairs', () => {
      return request(server)
      .get('/requests')
      .expect(res => {
        if (typeof res.body !== 'object'){
          throw new Error('response is not an object')
        }
        if (typeof res.body.counts !== 'object'){
          throw new Error('items in the array are not object')
        }
        if (!Array.isArray(res.body.history)){
          throw new Error('items in the object are not array')
        }
      })
      .expect(200);
    })
  })  
})

describe('/reset', () => {
  describe('GET', () => {
    it('resets the entire counts object', () => {
      return request(server)
      .get('/reset')
      .expect(res => {
        if (Object.keys(res.body.counts).length !== 0) {
          throw new Error('counts not reset')
        }
        if (res.body.history.length !== 0) {
          throw new Error('history not reset')
        }
        if (res.body.requests.length !== 0) {
          throw new Error('requests not reset')
        }
      })
      .expect(200);
    })
  })
})

describe('/netstats', () => {
  describe('GET', () => {
    it('returns an object with history of how long it takes to ping the MongoDB and average time', () => {
      return request(server)
      .get('/netstats')
      .expect(res => {
        if (typeof res.body !== 'object'){
          throw new Error('items in the array are not object')
        }
        if (!Array.isArray(res.body.history)){
          throw new Error('items in the array are not object')
        }
        if (typeof res.body.average !== 'number'){
          throw new Error('item in the array is not number')
        }
      })
      .expect(200);
    })
  })  
})
