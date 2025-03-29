const url=require('url');
var s="hhtp://www.google.com:80/myfile.html?year=2025&month=march#abc";
var p=url.parse(s,true);
var q=p.query;//{year:2025,month:march}
var yr=q.year;
if((yr%4==0 && yr%100!=0)||(yr%400==0)){
    console.log(yr+" is a leap year");
}
else{
    console.log(yr+" is not a  leap year");
}