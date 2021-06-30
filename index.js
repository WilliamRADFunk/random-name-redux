
var last = require('./last-names.json')
var firstFemale = require('./first-names-female.json')
var firstMale = require('./first-names-male.json')
var place = require('./places.json')

function r(names) {
  return function () {
    return names[~~(Math.random()*names.length)]
  }
}

var random = module.exports = function (isMale) {
  if (!!isMale) {
    return random.firstMale() + ' ' + random.last();
  }
  
  return random.firstFemale() + ' ' + random.last();
}

random.firstFemale  = r(firstFemale)
random.firstMale    = r(firstMale)
random.last         = r(last)
random.place        = r(place)

if(require.main === module) {
  var l = process.argv[2] || 1
  while (l--)
    console.log(random.firstMale(), '.', random.firstFemale(), '.', random.last(), ',', random.place());
}
  
