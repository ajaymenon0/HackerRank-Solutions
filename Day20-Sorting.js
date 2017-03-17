function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var numSwaps = 0;
    
    for(var j = n-1; j >0; j--){ 
        for(var i=0;i<j;i++){
            if(a[i]>a[i+1]){
                var swapper = a[i];
                a[i] = a[i+1];
                a[i+1] = swapper;
                numSwaps++;
            }
        }
    }
    console.log('Array is sorted in '+numSwaps+' swaps.');
    console.log('First Element: '+a[0]);
    console.log('Last Element: '+a[n-1]);

}
