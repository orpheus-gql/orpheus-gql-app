function ResolverTrackerConstructor() {
  this.counts = {};
  this.history = [];
  this.requests = [];
}

ResolverTrackerConstructor.prototype.addEntry = function(resolverName) {
  if (!this.counts[resolverName]) {
    this.counts[resolverName] = 0;
  }
  this.counts[resolverName]++;
  this.history.push(resolverName)
}

ResolverTrackerConstructor.prototype.preRequest = function(context) {
  context._startTime = Date.now();
}

ResolverTrackerConstructor.prototype.postRequest = function(context, name) {
  const data = {name: name, time: null};
  if (context._startTime) {
    data.time = Date.now() - context._startTime
    this.requests.push(data);
  }
}

ResolverTrackerConstructor.prototype.reset = function() {
  this.counts = {};
  this.history = [];
  this.requests = [];
}

module.exports = new ResolverTrackerConstructor();