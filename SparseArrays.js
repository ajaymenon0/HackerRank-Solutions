function processData(input) {
    let lines = input.split('\n'),
        N = parseInt(lines[0])
    let words = []
    for(var i=1;i<=N;i++){
        words.push(lines[i])
    }
    // Put frequency of the words along with the word in a array
    var freq = words.reduce(function(prev,curr){
       prev[curr]=prev[curr]?prev[curr]+1:1
       return prev
    },{})
    
    //Print the frequencies of the required words
    for(var i=N+2;i<lines.length;i++){
        freq[lines[i]]?console.log(freq[lines[i]]):console.log('0')
    }
} 
