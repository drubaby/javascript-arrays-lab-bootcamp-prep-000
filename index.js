// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);  
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}

function appendKitten(name){
  var newList = kittens.concat(name);
  return newList
}

/*
function prependKitten(name){
  var newList = kittens.splice(0, 0, name);
  return newList
}
*/

function prependKitten(name){
  var newList = k
}