function consecutiveSubstrings(string) {
  // have results arr
  // iterate over the string
  // for each character
    // iterate from that character to the end of the string
    // create substring of that character to each subsequent character
    // push that substring to results arr
  // return results arr

  let resultsArr = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let sub = string.substring(i, j+1)
      resultsArr.push(sub)
    }
  }

  return resultsArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");

  console.log("Expecting: ['a', 'aa', 'aab', 'a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('aab'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
