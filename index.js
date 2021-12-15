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
//i need to write a function with a param of an array(tutorials) the returns the same array but with the first letter of each word capatilized
// which means i have to map it and the once the function has an element it needs to delete the old one change the one it has to capatilized and then push the new one into the same position
const titleCased = () => {
  return tutorials.map(words => words.split(' ').map(func => 
    func.charAt(0).toUpperCase() + func.slice(1)).join(' '))
  }