Difference(int[] elements){
        this.elements = elements;
    }

    public void computeDifference(){
        maximumDifference = 0;
        int diff = 0;
        for(int i=0;i<elements.length;i++){
            for(int j=0;j<elements.length;j++){
                if(j!=i){
                    diff = Math.abs(elements[i]-elements[j]);
                    if(diff > maximumDifference){
                        maximumDifference = diff;
                    }
                }
            }
        }
    }
