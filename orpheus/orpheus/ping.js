const { Pool } = require('pg');
var ping = require('ping');

const pool = new Pool({
  connectionString: process.env.DB_HOST,
})

function NetworkConstructor() {
  this.history = [];
  this.average = 0;
};

// NetworkConstructor.prototype.ping = function() {
//   const now = Date.now();
//   let elapsedTime;
//   const that = this;
//   // trying to use pg
//   pool.connect.db.admin().ping(function (err, result) {
//    if (err || !result)
//     console.log('no ping result');
//    else
//     elapsedTime = Date.now() - now;
//     if (that.history.length > 20) {
//       that.history = that.history.slice(1)
//     }
//     that.history.push(elapsedTime); 
//   });
// }

module.exports = NetworkConstructor;