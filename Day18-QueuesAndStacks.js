function Solution(){
    var stack=[],queue=[]
    
    this.pushCharacter = function(ch){
        stack.push(ch)
    }
    
    this.enqueueCharacter = function(ch){
        queue.push(ch)
    }
    
    this.popCharacter = function (){
        return stack.pop()
    }
    
    this.dequeueCharacter = function(){
        return queue.shift()
    }
}
