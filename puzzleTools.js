function initializeSolution(divID){
    // this should either be the hidden div or the string input box, fix this later
    if (!divID)
        divID = $(".clueDiv").first().attr('id');

    var puzzleString = $('#' + divID).html();
    puzzleString = puzzleString.trim();
    puzzleString = puzzleString.replace(/\s/g,'');
    puzzleString = puzzleString.replace(/\n/g,'');
    puzzleString = puzzleString.replace(/\r/g,'');

    if (puzzleString.length != 81)
        debugger;

    var solution = {cellData: [], cellPoss: []};
    // var fullPoss = [1,2,3,4,5,6,7,8,9];

    for (var i = 0; i < puzzleString.length; i++){
        var xVal = parseInt(puzzleString.substring(i,i+1));
        if (xVal != solutionDunno){
            solution.cellData.push(xVal);
            solution.cellPoss.push('');
        }
        else {
            solution.cellData.push('');
            solution.cellPoss.push([1,2,3,4,5,6,7,8,9]);
        }
    }
    solution.isUpdated = false;
    return solution;
}














function puzzleComplete(solution){
    var cols = solutionSplit('c', solution);
    var rows = solutionSplit('r', solution);
    var size = cols.length;
    var rowDone = [];
    var colDone = [];

    for (var i = 0; i < size; i++){
        if (occurrence(cols[i], solutionYes, 'val') == solution.clueData['c'][i].sum){
            colDone.push(i);
        }
        else if (occurrence(cols[i], solutionYes, 'val') > solution.clueData['c'][i].sum){
            console.log('Col ' + i + ' has been solved incorrectly!!');
        }


        if (occurrence(rows[i], solutionYes, 'val') == solution.clueData['r'][i].sum){
            rowDone.push(i);
        }
        else if (occurrence(rows[i], solutionYes, 'val') > solution.clueData['r'][i].sum){
            console.log('Row ' + i + ' has been solved incorrectly!!');
        }
    }
    if (colDone.length == size && rowDone.length == size){
        return true;
    }
    else {
        console.log('Cols Done: ' + colDone.length + '/' + size);
        console.log('Cols Done: ' + colDone.join(','));

        console.log('Rows Done: ' + rowDone.length + '/' + size);
        console.log('Rows Done: ' + rowDone.join(','));
    }
    return false;
}


