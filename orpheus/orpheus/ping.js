const mongoose = require('mongoose');

function NetworkConstructor() {
  this.history = [];
  this.average = 0;
};
// reaches out to the database and measures the  time it takes to reach it; network latency
NetworkConstructor.prototype.ping = function() {
  const now = Date.now();
  let elapsedTime;
  const that = this;
  mongoose.connection.db.admin().ping(function (err, result) {
   if (err || !result)
    console.log('no ping result');
   else
    elapsedTime = Date.now() - now;
    if (that.history.length > 20) {
      that.history = that.history.slice(1)
    }
    that.history.push(elapsedTime); 
    that.average = Math.floor((that.average * (that.history.length-1) + elapsedTime)/that.history.length)
  });
}


module.exports = NetworkConstructor;
