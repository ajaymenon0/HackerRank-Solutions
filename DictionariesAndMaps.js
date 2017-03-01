function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var phonebook = {};
    for(var i=1;i<=n;i++){
        var entry = lines[i].split(' ');
        phonebook[entry[0]] = entry[1];
    }
    for(var i=(n+1);i<lines.length;i++){
        phonebook[lines[i]]?console.log(lines[i]+"="+phonebook[lines[i]]):console.log("Not found");
    }
} 
