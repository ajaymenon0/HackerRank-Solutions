function processData(input) {
    var lines = input.split('\n'),
        word = lines[0].split(' '),
        N = parseInt(word[0]),
        M = parseInt(word[1]),
        arr = new Array(N).fill(0)
    for(var i=1;i<=M;i++){
        var q = lines[i].split(' '),
            a = parseInt(q[0])-1,
            b = parseInt(q[1])-1,
            k = parseInt(q[2])
        for(var j=a;j<=b;j++){
            arr[j] += k
        }
    }
    console.log(Math.max(...arr))
}
