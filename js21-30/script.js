/*By Zephyr Zoidis
* Albinson Period 4
* Started: 4/27/20
* Finished: 4/30/20
* Javascript problems 21-30*/


//Problem 1: countEvens
function countEvens (num) {
    var count = 0;
    for (var i = 0; i < num.length;i++ ) {
        //Sees if it's even by finding remainder
        if (num[i] % 2 == 0) {
            //Add if an even is found
            count++;
        }
    }
    return count;
}

//Problem 2: countHi
function countHi(str){
    if(str.substring(0, 2) == ("hi")) {
        //References the countHi function
        return countHi(str.substring(2)) + 1;
    }if(str < 2) {
        return 0;
    }else {
        return countHi(str.substring(1));
    }
}

//Problem 3: no14
//Learned includes method on w3: ( https://www.w3schools.com/jsref/jsref_includes_array.asp )
function no14(array) {
    //True is returned if there are no 1's or 4's in the array
    return ((!array.includes(1) || !array.includes(4)));
}


// Problem 4: Either24
function either24(array) {
    var four = 0;
    var two = 0;

    //Determines final inputs (from the array) for booleans below
    for (var i = 0; i < array.length; i++) {
        if(array[i] === 2 && array[i + 1] === 2){
            //Increases count if true
            i++
            two++
        } else if(array[i] === 4 && array[i + 1] === 4) {
            //Increases count if true
            i++
            four++;
        }
    }

    //Determining Boolean
    if((two === 0 && four === 0) || (two > 0 && four > 0)) {
        return false;
    } else {
        return true;
    }
}



// problem 5: makeChocolate
function makeChocolate(small, big, goal) {
    //Can't be done (-1)
    if(goal - (big * 5) > small || goal % 5 > small ){
        return -1;
    }
    if(goal<= big*5) {
        return goal % 5;
    }else{
        return goal - big * 5;
    }
}


//Problem 6: LuckySum
function luckySum(a,b,c){
    if(a!=13 && b!=13 && c!=13){
        return a + b + c;
    }
    if(a!=13 && b!=13 && c==13){
        return a + b;
    }
    if(a!=13 && b==13){
        return a;
    }
    if(a==13){
        return 0;
    }
}

//Problem 7: Max Block (DONE)
function maxBlock(str) {
    var count = 0;
    var max = 1;
    if (str.length == 0) {
        return 0;
    }
    for (var i = 0; i < str.length; i++) {
        //Searches for characters in this index
        if (i < str.length - 1 && str.charAt(i) == str.charAt(i + 1)) {
            max++;
        } else {
            max = 1;
        }
        if (max > count) {
            count = max;
        }
    }
    return count;
}


//Problem 8: Linear In
function linearIn(outer, inner){
    o = 0;
    i = 0;
    //Will always be true if inner is nothing
    if(inner.length == 0) {
        return true;
    }
    //Ensures there aren't negatives
    while(outer.length > o) {
        if(outer[o] == inner[i]) {
            i++;
            if(inner.length == i) {
                return true;
            }
        }
        o++;
    }
    return false;
}


//Problem 9: CountTriple (DONE--Last is undefined?)
function countTriple(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++){
        //If statement that makes sure there's a triple
        if((str[i] == str[i+1]) && (str[i+1] == str[i+2])){
            //Adds if true
            count++;
        }
    }
    return count;
}

//Problem 10: Same Ends
function sameEnds(str) {
    var char = "";
    //Separates string in 2 halves
    for(var i = 0; i <= str.length / 2; i++){
        for(var x = str.length / 2; x < str.length; x++){
            if(str.substring(0,i) == str.substring(x)){
                //Sets characters for variable
                char = str.substring(0,i);
            }
        }
    }
    return char;
}