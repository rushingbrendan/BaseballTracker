
//includes
//import Inning from '../objects/Inning.js';
let Inning = require('../objects/Inning');

var inning = new Inning();


class BaseballEvent{

    constructor(){
        
        this.awayTeamLine = '';
        this.homeTeamLine = '';
        this.gameTotal = 0;

        this.innings = new Array(9).fill().map((e, i) => {

            return {
                ...inning,                
            }
        });
    }
};

module.exports.BaseballEvent = BaseballEvent;  
