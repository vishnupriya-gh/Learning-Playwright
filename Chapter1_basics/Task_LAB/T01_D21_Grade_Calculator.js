// Grade Calculator
//Write a program that calculates and displays the letter grade for a given numerical score
//(e.g., A, B, C, D, or F) based on the following grading scale:
//A: 90-100
//B: 80-89
//C: 70-79
//D: 60-69
//F: 0-59

const mark = 85;

if (mark >= 90 && mark <= 100){
    console.log("Grade:A");
} else if (mark >= 80 && mark < 90){
    console.log("Grade:B");         
} else if (mark >= 70 && mark < 80){
    console.log("Grade:C");                     
} else if (mark >= 60 && mark < 70){
    console.log("Grade:D");
} else if (mark >= 0 && mark < 60){
    console.log("Grade:F");     
}