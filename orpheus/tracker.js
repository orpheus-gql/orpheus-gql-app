module.exports = {}

function track(root){
  const newRoot = {_logs:{}};
  const keys = Object.keys(root);
  function trackFn(cb){
    return function(...args){
      if (!newRoot._logs[cb.name]){
        newRoot._logs[cb.name] = 0;
      }
      newRoot._logs[cb.name]++;
      return cb(...args);
    }
  }
  keys.forEach((item)=>{
      newRoot[item] = trackFn(root[item])
  })
  return newRoot;
}

const sampleRoot = {
  a: ()=>{console.log('this is a')},
  b: ()=>{console.log('this is b')}
}

const trackedRoot = tracker(sampleRoot)

trackedRoot.a()
trackedRoot.b()
trackedRoot.b()

console.log(trackedRoot._logs);

module.exports.track = track;
