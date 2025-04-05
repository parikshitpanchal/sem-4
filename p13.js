// create time class having 3 values hours,minites,seconds.create a function sum that adds 2 time obj and gives result in hours,minites,seconds.
class Time{
    constructor(hours,minites,seconds){
        this.hours = hours;
        this.minites = minites;
        this.seconds = seconds;
    }
    sum(otherTime){
        let totalSeconds = this.hours * 3600 + this.minites * 60+ this.seconds + otherTime.hours * 3600 + otherTime.minites *
        60 + otherTime.seconds ;
        let totalSeconds2 = otherTime.hours * 3600 + otherTime.minites* 60 + otherTime.seconds;
        let hours = Math.floor(totalSeconds / 3600);
        let minites = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        return new Time(hours,minites,seconds);
    }
}
let time1 = new Time(1,2,3);
let time2 = new Time(4,5,6);
let result = time1.sum(time2);
console.log(result.hours + ":" + result.minites + ":" + result.seconds);