function showMessage(msg){
    if (Array.isArray(msg)){
        msg = msg.join(breakString);
    }
    $('#userMessage p').first().html(msg);
}
function makePuzzle(){
    
    // Clear the previous html
    $('#puzzleContainer').html('');
    
    showMessage('Making Puzzle');
    
    var puzzleHTML = '';
    puzzleHTML += '<table>';

    for (var i = 0; i < MAXSIZE; i++){
        
        if (i == 0){
            // Blank starter top row just for the visual index
            puzzleHTML += '<tr>';
            puzzleHTML += '<td>';
            puzzleHTML += '';  // This is the invisible top left box
            puzzleHTML += '</td>';

            for (var k = 0; k < MAXSIZE; k++){
                puzzleHTML += '<td class="visualIndex visualColIndex">';
                puzzleHTML += parseInt(k);
                puzzleHTML += '</td>';
            }
            puzzleHTML += '</tr>';
        }
        // This starts the row for the whole puzzle        
        puzzleHTML += '<tr>';

        for (var j = 0; j < MAXSIZE; j++){

            // This puts the visual index in its place
            if (j == 0){
                puzzleHTML += '<td class="visualIndex visualRowIndex" ';
                puzzleHTML += 'data-visual-index=' + parseInt(i);
                puzzleHTML += '>';
                puzzleHTML += parseInt(i);
                puzzleHTML += '</td>';
            }

            puzzleHTML += '<td id="r' + (i-1).toString() + 'c' + (j-1).toString() + '" ';
            puzzleHTML += ' data-rowIndex='+ parseInt(i-1);
            puzzleHTML += ' data-colIndex='+ parseInt(j-1);
            puzzleHTML += ' class="pixel"';
            puzzleHTML += '>';                    
            // This is what is inside the empty cells
            puzzleHTML += '';
            puzzleHTML += '</td>';
        }

        puzzleHTML += '</tr>';
    }
    puzzleHTML += '</table>';
    $('#puzzleContainer').html(puzzleHTML);
    
}





function displaySolution(solution){
    zzSln = solution;
    zzCells = solution.cellData;
    zzClues = solution.clueData;

    var pixels = solution.cellData.length;
    var size = Math.sqrt(pixels);

    if (parseInt(size) !== size){
        showMessage('Incorrect solution size');
    }
    clearSolution();
    for (var i = 0; i < size; i++){
        if (solution.clueData['c'][i].isComplete){
            $('td#col' + i).addClass('COMPLETE');
        }
        if (solution.clueData['r'][i].isComplete){
            $('td#row' + i).addClass('COMPLETE');
        }

        for (var j = 0; j < size; j++){
            var xTemp = solution.cellData[i*size + j].val;
            if (xTemp == solutionYes){
                $('#r' + i + 'c' + j + '.pixel').addClass('YES');
            } else if (xTemp == solutionNo){
                $('#r' + i + 'c' + j + '.pixel').addClass('NO');
            }
        }
    }
}
function clearSolution(){
    $('.clueCell').removeClass('COMPLETE');
    $('.pixel').removeClass('YES');
    $('.pixel').removeClass('NO');
}