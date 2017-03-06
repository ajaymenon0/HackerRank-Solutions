class Student extends Person{
	private int[] testScores;
    
    public Student(String firstName,String lastName,int id,int[] scores){
        super(firstName,lastName,id);
        this.testScores = scores;
    }
    
    public String calculate(){
        int sum = 0;
        int av = 0;
        String grade = "A";
        for(int i=0;i<testScores.length;i++){
            sum += testScores[i];
        }
        av = sum/testScores.length;
        if(av<=100 && av>=90){
            grade = "O";
        }
        else if(av<90 && av>=80){
            grade = "E";
        }
        else if(av<80 && av>=70){
            grade = "A";
        }
        else if(av<70 && av>=55){
            grade = "P";
        }
        else if(av<55 && av>=40){
            grade = "D";
        }
        else if(av<40){
            grade = "T";
        }
        return grade;
    }   
}
