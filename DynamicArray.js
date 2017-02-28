function processData(input) {
    var str2Arr = input.split('\n');
    var init = str2Arr[0].split(' ');
    var N = init[0],
        Q = init[1],
        lastAns = 0,
        seq = 0,
        seqList = [];
    for(var i=0;i<N;i++){
        seqList.push([]);
    }
    
    for(var i=1;i<=Q;i++){
        var initial = str2Arr[i].split(' ');
        seq = (parseInt(initial[1])^lastAns)%N;
        if(initial[0] == '1')
            q1(initial[1],initial[2]);
        else
            q2(initial[1],initial[2]);
    }
    
    function q1(x,y){
        seqList[seq].push(y)
    }
    
    function q2(x,y){
        var fullArr = seqList[seq];
        var val = parseInt(y)%(fullArr.length);
        lastAns = parseInt(fullArr[val]);
        console.log(lastAns);
    }
}
