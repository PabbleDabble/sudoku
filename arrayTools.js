function occurrence(arr, compare, key) {
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