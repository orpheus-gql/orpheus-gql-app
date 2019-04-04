function dataPointsConstructor() {
  this.dataPoints = 0;
  this.nestingDepth = 0;
}

dataPointsConstructor.prototype.getInfo = function(data, h = 0) {
    if (h > this.nestingDepth) this.nestingDepth = h
    let keys = Object.keys(data)
    keys.forEach((element) => {
      if (typeof data[element] === 'object') {
        this.getInfo(data[element], h + 1)
      } else {
        this.dataPoints++;
      }
    })
}

module.exports = dataPointsConstructor;