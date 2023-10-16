// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
console.log(cohort.split(" "))

// a) Your answer: 'Golf', '2023'
// b) Verify and explain: Answer was wrong, . split() was used on the string "cohort" along with a 
//                        a space. THE RESULT IS AN ARRAY.

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
// the function body contains a template string and not returned explicity
console.log(greeter("LEARN Student"))

// a) Your answer: error
// b) Verify and explain: greeter function = takes 1 parameter (name)

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: onlyOdds = variable, onlyOdds has the array [numbers], .filter call on the array.
//                                   and the method that is called on the array is number % 2 !== 0

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: 
//                        object = myCodingSkills, contain variables (languages, framemwork, database, versionControl). 
//                        On variable language the first element
//                                 [0 is JavaScript]

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Golf",
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: student: "Learn", cohort: "Golf", year: 2023
// b) Verify and explain: Variable is Learn, constructer method is use that has 1 parameter (name)
//                        inside the constructor there are properties: student, cohort and the year.
//                        and a "new" instance is add that has a name "George". This called back in to the " Learn" constructor.