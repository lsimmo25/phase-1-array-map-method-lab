const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let result = tutorials.map(sentence => {
    console.log(sentence)
    let splitSentence = sentence.split(" ");
    let word = splitSentence.map(word => {
        let firstChar = word.charAt(0);
        let firstCharUpper = firstChar.toUpperCase() + word.slice(1);
        return firstCharUpper;
      })
    let temp = word.join(" ");
    return temp;
  });
  return result;
};

const titleCasedTutorials = titleCased(tutorials);
console.log(titleCasedTutorials);

