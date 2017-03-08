this.insert=function(head,data){
        var n = new Node(data)
        
        if(head==null){
            head = n
            return head
        }
        
        var temp = head
        while(temp.next != null){
            temp = temp.next
        }
        
        temp.next = n
        
        return head
    };
