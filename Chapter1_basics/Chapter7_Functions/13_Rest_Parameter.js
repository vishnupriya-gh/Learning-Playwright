function logResults(suitename,...results) {
    console.log(`suite: ${suitename}`);
    console.log(`Results: ${results.join(",")}`);
}
logResults("Auth Suit", "Pass", "Fail","Skip");
