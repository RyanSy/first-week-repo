var PartyBus = require("./PartyBus.js");

var davonJaimeJasmine = new PartyBus();

//dude enters bus
davonJaimeJasmine.addDud('female');

console.log('dudes?', davonJaimeJasmine.duds);

console.log(davonJaimeJasmine.duds.length);