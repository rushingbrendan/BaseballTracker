

//includes
var Inning = require('../objects/Inning');

//instantiate Inning object
var inning = new Inning();


class BaseballEvent{

    constructor(){
        
        this.awayTeamLine = '';
        this.homeTeamLine = '';
        this.gameTotal = 0;

        //add an array of 9 innings
        this.innings = new Array(9).fill().map((e, i) => {

            return {
                ...inning,                
            }
        });
    }
};

//export BaseballEvent class
module.exports = BaseballEvent;
