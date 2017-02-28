function processData(input) {
    var str2arr = input.split('\n');
    var line1 = str2arr[0].split(' ');
    var n = line1[0],
        d = line1[1],
        Arr = str2arr[1].split(' ');
    console.log(Arr.concat(Arr.splice(0,d)).join(' ').toString());
} 
