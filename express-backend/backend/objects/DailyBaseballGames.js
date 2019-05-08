

//includes
var Inning = require('../objects/Inning');
var BaseballEvent = require('../objects/BaseballEvent');

//instantiate Inning object
var inning = new Inning();

//date time constants
const months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


class DailyBaseballGames{

    constructor(month, day, year){
        
        this.month = months[month - 1];
        this.year = year;
        this.day = day;

        var currentDate = new Date(year, month - 1, day);
        this.dayOfWeek = days[currentDate.getDay()];
        

        //add an array of 9 innings
        this.innings = new Array(9).fill().map((e, i) => {

            return {
                ...inning,                
            }
        });
    }
};

//export BaseballEvent class
module.exports = DailyBaseballGames;
