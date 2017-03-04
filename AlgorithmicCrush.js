function processData(input) {
    var lines = input.split('\n'),
        word = lines[0].split(' '),
        N = parseInt(word[0]),
        M = parseInt(word[1]),
        arr = new Array(N+1).fill(0),
        x = 0,
        max = 0
    for(var i=1;i<=M;i++){
       var q = lines[i].split(' '),
            a = parseInt(q[0])-1,
            b = parseInt(q[1])-1,
            k = parseInt(q[2])
        arr[a] += k
        if((b+1)<=N) arr[b+1] -= k
    }
    for(var i=0;i<=N;i++){
        x = x + arr[i]
        if(x>max) max=x
    }
    console.log(max)
} 
//Couldn't crack this one myself. 
//I thank: http://codereview.stackexchange.com/questions/95755/algorithmic-crush-problem-hitting-timeout-errors
