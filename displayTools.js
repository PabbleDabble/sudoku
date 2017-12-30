function showMessage(msg){
    if (Array.isArray(msg)){
        msg = msg.join(breakString);
    }
    $('#userMessage p').first().html(msg);
}
function makePuzzle(){
    
    // Clear the previous html
    $('#puzzleContainer').html('');
    $('#possibleContainer').html('');
    
    showMessage('Making Puzzle (Rand:' +  parseInt(Math.random() * 100) + ')');
    
    var puzzleHTML = '';
    puzzleHTML += '<table class="bigTable">';

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

            puzzleHTML += '<td id="';
            puzzleHTML += 'r' + (i).toString();
            puzzleHTML += 'c' + (j).toString();
            puzzleHTML += '" ';
            puzzleHTML += ' data-rowIndex='+ parseInt(i);
            puzzleHTML += ' data-colIndex='+ parseInt(j);
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
    $('#possibleContainer').html(puzzleHTML);
    
}





function displaySolution(solution){
    clearSolution();
    zzSln = solution;
    zzCells = solution.cellData;
    zzPoss = solution.cellPoss;
    showMessage('Displaying Solution (Rand:' +  parseInt(Math.random() * 100) + ')');

    for (var i = 0; i < MAXSIZE; i++){
        for (var j = 0; j < MAXSIZE; j++){
            var cellID = '#r' + i + 'c' + j;
            var bigIndex = i * 9 + j;
            if (zzCells[bigIndex]) {
                $('#puzzleContainer ' + cellID).html(zzCells[bigIndex]);
                $('#puzzleContainer ' + cellID).addClass('originalHint');
            }
            else {
                var blankCount = occurrence(zzPoss[bigIndex],'');
                if (blankCount == 9){
                    // This should never happen within this lower else
                    debugger;
                }
                else {
                    $('#possibleContainer ' + cellID).html(makePossibleTable(zzPoss[bigIndex]));
                }
            }

        }
    }
}
function clearSolution(){
    $('#puzzleContainer').removeClass('originalHint');
}
function makePossibleTable(arr){
    var htmlString = "";
    if (arr.length != 9)
        debugger;

    htmlString += '<div class="possDivTable">';
    htmlString += '<table class="smallTable">';
    for (var i = 0; i < 3; i++){
        htmlString += '<tr>';
        for (var j = 0; j < 3; j++){
            htmlString += '<td>';
            htmlString += arr[i * 3 + j];
            htmlString += '</td>';
        }
        htmlString += '</tr>';
    }
    htmlString += '</table>';
    htmlString += '</div>';
    return htmlString;
}