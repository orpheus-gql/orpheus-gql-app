function DataParser() {
  this.data = {};
  this.tree = {};
  this.dataPoints = 0;
  this.nestingDepth = 0;
}

DataParser.prototype.getInfo = function (data, h = 0) {
  this.data = data;
  if (h > this.nestingDepth) this.nestingDepth = h
  let keys = Object.keys(data)
  keys.forEach((element) => {
    if (typeof data[element] === 'object') {
      this.getInfo(data[element], h + 1)
    } else {
      this.dataPoints++
    }
  })
}

DataParser.prototype.buildVis = function buildVis(inputNode, outputNode = { 'title': 'root', 'color': 'white', 'children': [] }, depth = 0) {
  const keys = Object.keys(inputNode)
  keys.forEach((key) => {
    const point = {
<<<<<<< HEAD
      'title': key,
=======
      'name' : key,
>>>>>>> 73d82a55345faa2e873d17c27fd5e4b44430635e
      'color': 'blue',
      'value': depth,
      'children': []
    }
    if (typeof inputNode[key] === 'object') {
      buildVis(inputNode[key], point, depth + 1)
    }
    outputNode.children.push(point);
  })
  return outputNode
}

module.exports = DataParser;
