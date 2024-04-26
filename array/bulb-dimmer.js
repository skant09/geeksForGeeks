// --------------------------- SPEC ---------------------------


/*
MIN_LEVEL = 5
MAX_LEVEL = 15

| Dimmer level | 5 watt | 10 watt | 20 watt |
| 5            | 0      | 0       | 0       |
| 10           | 2.5    | 5       | 10      |
| 15           | 5      | 10      | 20      |
*/


// ------------------------- SOLUTION -------------------------


function Dimmer(){
  const MIN_LEVEL = 5;
  const MAX_LEVEL = 15; 
  const RANGE =  MAX_LEVEL-MIN_LEVEL;
  const numberOfBulbsPossible = 1000;
  
  let currentDimmerLevel = MIN_LEVEL;
  // collection of bulbs
  let bulbs = [];
  
  this.addBulb = function (bulb){
    // validate input, should be a bulb
    
    bulbs.push(bulb);
    this.setDimmerLevel(currentDimmerLevel);
  }
  
  this.removeBulb = function(bulbToBeRemoved){
    bulbs = bulbs.filter(bulb => {
      if(bulb.id === bulbToBeRemoved.id){
        bulb.setCurrentWattage(0)
        return false;
      }
      return true;
    });
  }

  
  this.setDimmerLevel = function(level){
    currentDimmerLevel = level;
    try {  
      if(bulbs.length<= 0) throw new Error('No Bulbs installed');
      // validate that the level entered is in between MIN_LEVEL, MAX_LEVEL
      if(MAX_LEVEL < level) throw new Error('Level beyond MAX_LEVEL')
      if(MIN_LEVEL > level) throw new Error('Level less than MIN_LEVEL')
      // iterate over each bulb to set their current brightness
      const diff = level - MIN_LEVEL;
      let percentage = diff/RANGE*100;
      bulbs.forEach(bulb => bulb.setCurrentWattage(percentage))
    } catch(error){
      console.error(error.toString());
      throw error;
    }
  }
}


/**
 *  Bulb
 *  maxWattage: maximum brightness/ power usage for the given bulb
 * 
 */
function Bulb({maxWattage}) {
  // validate the input i.e. maxWattage
  this.maxWattage = maxWattage
  // puts a limit to number of bulb that can be added
  this.id = Math.floor(Math.random() * 1000);
  
  // stores current wattage
  let currentWattage = 0; 
  
  this.getCurrentWattage = function(){
    return currentWattage
  }
  
  this.setCurrentWattage = function(percentage){
    currentWattage =   this.maxWattage/100 * percentage;
  }
}


// ------------------------ DEMO AREA -------------------------

const dimmer = new Dimmer();

const bulb1 = new Bulb({maxWattage: 5});
const bulb2 = new Bulb({maxWattage: 10});
const bulb3 = new Bulb({maxWattage: 20});

dimmer.addBulb(bulb1);
dimmer.addBulb(bulb2);
// dimmer.addBulb(bulb3);

dimmer.setDimmerLevel(25);

dimmer.addBulb(bulb3);

// dimmer.removeBulb(bulb2);

console.log(bulb1.getCurrentWattage());
console.log(bulb2.getCurrentWattage());
console.log(bulb3.getCurrentWattage());


// - Three bulbs (5W, 10W and 20W) and a dimmer.
// - Set the dimmer to the lowest setting.
// - Inspect the bulbs.
