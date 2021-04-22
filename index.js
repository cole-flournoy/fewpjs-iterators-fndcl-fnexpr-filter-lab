// Code your solution here
function findMatching(drivers, name) {  
  return drivers.filter(d => d.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters) {
  const len = letters.length
  return drivers.filter(d => d.slice(0, len) === letters)
}

function matchName(drivers, name) {
  return drivers.filter(d => d.name.toLowerCase() === name.toLowerCase()) 
}