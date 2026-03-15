let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passcount =0;
let failcount =0;
let skipcount =0;
for(i=0; i < testResults.length; i++){
    if (testResults[i] === "pass") {
        passcount++;}
    else if (testResults[i] === "fail") {
        failcount++; }
    else if (testResults[i] === "skip") {
        skipcount++; }
}
let passrate = (passcount/testResults.length)*100;


console.log (`Total test runs: ${testResults.length} Passed: ${passcount} Failed: ${failcount}  Skipped: ${skipcount} `);

if(failcount === 0){
    console.log( `Pass Rate: ${passrate} VERDICT : Ready for Release.`)
}
else if(failcount <= 2){
    console.log(`Pass Rate: ${passrate} VERDICT :Review before release.`)
}
else if(failcount < 2){
    console.log(`Pass Rate: ${passrate} VERDICT :Block release`);
}

