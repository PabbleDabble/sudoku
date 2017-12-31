// REPO
// https://github.com/PabbleDabble/puzzleCross/blob/master/index.html
// RUN HTML - Local - work computer
// file:///C:/Users/pv0005/Documents/puzzleCross/index.html
// RUN HTML - Local - maggie laptop
// file:///C:/Users/Owner/Desktop/ptvScripting/puzzleCross/index.html
// RUN HTML - Live
// https://rawgit.com/PabbleDabble/puzzleCross/master/index.html

 
var puzzleID = 'PUZZ_0002';
var breakString = '<br/>';
var MAXSIZE = 9;
var solutionDunno = 0;

// Console globals - Read only to console / debugging
var zzSln = {};
var zzCells = [];
var zzPoss = []

const reducer = (accumulator, currentValue) => accumulator + currentValue;

$(document).ready(function(){

    $('#createPuzzle').on('click',function(){
        makePuzzle();
    });

    $('#solvePuzzle').on('click',function(){
        solvePuzzle();
    });

    makePuzzle();

    // This is the first thing you do to make the puzzle
    var solutionObject = initializeSolution(puzzleID);
    console.log(solutionObject);
    
    displaySolution(solutionObject);
    solvePuzzle(solutionObject);

});







function solvePuzzle(solutionObject){
    showMessage('Solving Puzzle (Rand:' +  parseInt(Math.random() * 100) + ')');

    var doCounter = 1;
    // [1,2].concat([3,4]); = [1,2,3,4]
    // [1,2,3,4].slice(2) = [3,4]   // 2 ending values
    // [1,2,3,4].slice(2,3) = [3,4]   // 2=begin, 3=end (not included)
    // [1,2,3,4,5].splice(1,3) = [2,3,4] // 2=begin,3=how many
    // var test =[1,2,3,4,5]; test.unshift(9,8); // test then is [9.8.1.2.3.4.5] // pre-pend

    // XX - Start solve loop
    do {
        solutionObject = removePossibilities(solutionObject);
        
        if (doCounter < 10){
            doCounter++;
        }
        else {
            debugger;
        }
        displaySolution(solutionObject);
    } while (solutionObject.isUpdated);
}



