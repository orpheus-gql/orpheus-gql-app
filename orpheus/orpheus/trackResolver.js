function ResolverTrackerConstructor() {
  this.counts = {};
  this.history = [];
  this.requests = [];
};

ResolverTrackerConstructor.prototype.addEntry = function(resolverName) {
  if (!this.counts[resolverName]) {
    this.counts[resolverName] = 0;
  }
  this.counts[resolverName]++;
  this.history.push(resolverName);
};

ResolverTrackerConstructor.prototype.preRequest = function(context) {
  context._startTime = Date.now();
};

ResolverTrackerConstructor.prototype.postRequest = function(context, name) {
  const data = {name: name, time: null};
  if (context._startTime) {
    data.time = Date.now() - context._startTime
    this.requests.push(data);
  }
};

ResolverTrackerConstructor.prototype.reset = function() {
  this.counts = {};
  this.history = [];
  this.requests = [];
};

ResolverTrackerConstructor.prototype.pgPre = function(parent, args) {
  if (typeof parent === 'object') parent._startTime = Date.now();
  else args._startTime = Date.now();
};

ResolverTrackerConstructor.prototype.pgPost = function(parent, args, name) {
  const data = {name: name, time: null};
  if (parent) {
    data.time = Date.now() - parent._startTime
    this.requests.push(data);
  } else if (args) {
    data.time = Date.now() - args._startTime
    this.requests.push(data);
  }
};

module.exports = new ResolverTrackerConstructor();