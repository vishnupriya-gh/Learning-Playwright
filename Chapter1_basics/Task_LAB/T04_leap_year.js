//leap year
for(year =0; year <= 3000; year++){
if ( year % 4 ==0 && year % 100 !=0 ){
    console.log("leap year :", year);}
else if ( year % 400 ==0 && year % 100 !=0 )
    console.log("leap year :", year);
}
