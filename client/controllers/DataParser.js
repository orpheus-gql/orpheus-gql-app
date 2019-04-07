function dataParser() {
  this.data = {};
  this.tree = {};
  this.dataPoints = 0;
  this.nestingDepth = 0;
}

dataPointsConstructor.prototype.getInfo = function(data, h = 0) {
  this.data = data;
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

function buildVis(inputNode, outputNode = {'title':'root', 'color':'black', 'children':[]}){
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

module.exports = dataPointsConstructor;
module.exports.buildVis = buildVis;
