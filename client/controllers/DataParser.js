function DataParser() {
  this.data = {};
  this.tree = {};
  this.dataPoints = 0;
  this.nestingDepth = 0;
}

DataParser.prototype.getInfo = function(data, h = 0) {
  this.data = data;
  console.log(data);
  if(h > this.nestingDepth) this.nestingDepth = h
  let keys = Object.keys(data)
  keys.forEach((element) => {
    if(typeof data[element] === 'object') {
      this.getInfo(data[element], h+1)
    } else {
      this.dataPoints++
    }
  })
}


/*
const testInput = {
  'a': 'a',
  'b': 'b',
  'c': 'c',
  'd': {
    'd1': 'd1',
    'd2': {
        'd22':'d22'
      },
    'd3': 'd3'
    }
}

const testOutput = buildVis(testInput);
console.log(JSON.stringify(testOutput, null, 2));
*/
DataParser.prototype.buildVis = function buildVis(inputNode, outputNode = {'title':'root', 'color':'black', 'children':[]}){
  const keys = Object.keys(inputNode)
  keys.forEach((key)=>{
    const point = {
      'title' : key,
      'color' : 'black',
      'size' : 25,
      'children': []
    }
    if (typeof inputNode[key] === 'object'){
      buildVis(inputNode[key], point)
    }
    outputNode.children.push(point);
  })
  return outputNode
}

module.exports = DataParser;
