function occurrence(arr, compare, key) {
    if (arr.length == 0)
        return 0;
    var counter = 0;
    if (key){
        arr.forEach(function(item){
            if (item[key] == compare)
            counter++;        
        });
    }
    else {
        arr.forEach(function(element){
            if (element == compare)
                counter++;
        })
    }
    return counter;
}