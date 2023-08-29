
//***handling arguments variables with process.argv***//

// function grab(flag){
//     let indexAfterFlag = process.argv.indexOf(flag) +1
//     return process.argv[indexAfterFlag]

// }

// let greeting = grab("--greeting")
// let user = grab("--user")

// console.log(user);
// console.log(greeting);


//**working with standard input**//

// process.stdout.write("Hello \n \n")

// const questions = [
//     "What is your name?",
//     "Which language are you learning?",
//     "Rate your programming skills?"
// ]

// const answers =[]

// function ask(i){
//     process.stdout.write(`\n\n\n ${questions[i]}`)
//     process.stdout.write(` > `)
// }

// process.stdin.on("data", function (data){
//     process.stdout.write(data.toString().trim())
// })

// ask(answers.length)




//*****using standard output****//

// process.stdout.write("Hello \n \n")

// const questions = [
//     "What is your name?",
//     "Which language are you learning?",
//     "Rate your programming skills?"
// ]

// const answers =[]

// function ask(i = 0){
//     process.stdout.write(`\n\n\n ${questions[i]}`)
//     process.stdout.write(` > `)
// }

// ask()

// process.stdin.on("data", function (data){
//     answers.push(data.toString().trim())
//     if(answers.length < questions.length){
//         ask(answers.length)
//     } else{
//         process.exit()
//     }
// })

// process.on("exit", function(){
//     process.stdout.write("\n\n\n\n")
//     process.stdout.write(`Go learn ${answers[1]}  ${answers[0]} you can achieve rating of  ${answers[2]}`)

// })


//*creating a delay with setTimeout */

// const waitTime = 3000

// console.log(`setting a ${waitTime/1000} second delay`);
// const timerFinished = () => console.log("done");

// setTimeout(timerFinished, waitTime)

//**incorporating setInterval */

// const waitTime = 3000

// console.log(`setting a ${waitTime/1000} second delay`);
// const timerFinished = () => {
//     clearInterval(interval)
//     console.log("done");
// }

// setTimeout(timerFinished, waitTime)

// const waitInterval = 500
// let currentTime = 0
// const incTime = () =>{
//     currentTime =+ waitInterval
//     console.log(`waiting ${currentTime/1000} seconds`);
// }

// const interval = setInterval(incTime, waitInterval)


//**reporting progress with setInterval */

// const waitTime = 3000

// console.log(`setting a ${waitTime/1000} second delay`);
// const timerFinished = () => {
//     clearInterval(interval)
//     console.log("done");
// }

// setTimeout(timerFinished, waitTime)

// const waitInterval = 500
// let currentTime = 0
// const incTime = () =>{
//     currentTime =+ waitInterval
//     const p = Math.floor((currentTime/waitTime) *100)
//     process.stdout.clearLine()
//     process.stdout.cursorTo(0)
//     process.stdout.write(`waiting...${p}`)


    
// }

// const interval = setInterval(incTime, waitInterval)


//** core modules */

// const path = require("path")
// const util = require("util")
// const v8 = require("v8")
// console.log(path.basename(__filename));

// const dirUploads = path.join(__dirname, "www", "files", "uploads")
// console.log(dirUploads);

// util.log(path.basename(__filename))
// util.log(v8.getHeapStatistics())

//** collecting information with readline */

// const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("How do you like Node?", (answer) => {
//     console.log(`Your answer: ${answer}`);
// })


//** using readline */

// const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const questions = [
//     "What is your name?",
//     "Which language are you learning?",
//     "Rate your programming skills?"
// ]

// function collectAnswer(questions, done){
//     const answers=[]

//     const questionAnswered = (answer) =>{
//         answers.push(answer.trim())
//         if(answers.length < questions.length){
//             rl.question(
//                 questions[answers.length],
//                 questionAnswered
//             )
//         } else {
//             return done(answers)

//         }
//     }

//     rl.question(questions[0], questionAnswered)
// }

// collectAnswer(questions, (answers)=>{
//     console.log("Thank you for your answer");
//     console.log(answers);
//     process.exit()
// })


//**Exporting custom modules */

const {inc, dec, getCount} = require("./app")

inc()
inc()
inc()
dec()

console.log(`The count is ${getCount()}`);




