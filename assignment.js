
// feet to mile -------------------------------
var feetToMile = function(n){
    if(n==0)
        return 0;
    else{
        return n/5280;
    }
}
// input output
var input = 5280; //input

if(input<0)
    console.log("The distance can not be negative");
else
    console.log(input + " feet = "+ feetToMile(input) +" mile");

// -------end-------------------------------------------------------

// wood Calculator ---------------------------------
var woodCalculator = function(chair, table, bed){
    var for_chair = 1;
    var for_table = 3;
    var for_bed = 5;
    
    var total = (chair*for_chair)+(table*for_table)+(bed*for_bed);

    return total;
}

// input output
var no_of_chair = 10; //input
var no_of_table = 3; //input
var no_of_bed = 2; //input

if(no_of_chair<0 || no_of_table<0 || no_of_bed<0){
    console.log("Number of chair/table/bed can not be negative.");
}
else{
    var output = woodCalculator(no_of_chair, no_of_table, no_of_bed);
    console.log(no_of_chair+" chair, "+no_of_table+" table, "+no_of_bed+" bed, " + "Total wood needs " + output + " cft");
}

// --------end----------------------------------------------------------------------


// Brick calculator ----------------------------------------------

var brickCalculator = function(n){
    if(n<=10){
        return 15*1000*n;
    }
    else if(n>=11 && n<=20){
        return (15*1000*10)+(12*1000*(n-10));
    }
    else{
        return (15*1000*10)+(12*1000*10)+(10*1000*(n-20));
    }
}
// input output
var tola = 30; //input

if(tola<0)
    console.log("Enter a positive integer value");
else
    console.log("For "+tola+" tola , Total bricks needed = "+brickCalculator(tola));

// ---------end----------------------------------------------------------------------------------------

// tiny friend -------------------------------------------------------------------------------

var tinyFriends = function(names){
    var min = 100000;
    var tiny = [];

    for(var i=0; i<names.length; i++){
        if(names[i].length<=min){
            min = names[i].length;
        }
    }
    for(var i=0; i<names.length; i++){
        if(names[i].length == min){
            tiny.push(names[i]);
        }
    }
    return tiny;
}
// input output
var friends = ["Jokky", "Gurder", "Pikusa", "Labbry", "Stomany", "Gurgiluabrisa", "Nutty", "Fandarsico"]; //input
console.log(tinyFriends(friends));
// ---------end----------------------------------------------------