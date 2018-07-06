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
  var newList = kittens.push(name);
  return newList
}

function appendKitten(kittens, name){
  var newList = 
}