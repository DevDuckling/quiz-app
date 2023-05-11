const chalk = require('chalk');
const readlineSync = require('readline-sync');

var queries = [
    { 
    ask: chalk.cyan(`Which character wields a sword called Nichirin Blade?
    a) Tanjiro Kamado
    b) Inosuke Hashibira
    c) Zenitsu Agatsuma
    d) Nezuko Kamado \n Answer: `),
    answer: 'a',
    comment: 'Tanjiro Kamado  wields a sword called Nichirin Blade'
    },
    {
    ask: chalk.cyan(`What is the name of the main antagonist in Demon Slayer?
    a) Muzan Kibutsuji
    b) Akaza
    c) Enmu
    d) Rui \n Answer: `),
    answer: 'a',
    comment: 'Muzan Kibutsuji is the name of the main antagonist in Demon Slayer'},
    {
    ask: chalk.cyan(`Which breathing technique does Tanjiro Kamado primarily use?
    a) Water Breathing
    b) Thunder Breathing
    c) Flame Breathing
    d) Beast Breathing \n Answer: `),
    answer: 'a',
    comment: 'Water Breathing is the breathing technique Tanjiro Kamado primarily use'},
    {
    ask: chalk.cyan(`Who is the Hashira (Pillar) of the Water Hashira?
    a) Giyu Tomioka
    b) Shinobu Kocho
    c) Mitsuri Kanroji
    d) Muichiro Tokito \n Answer: `),
    answer: 'a',
    comment: 'Giyu Tomioka is the the Water Hashira'},
    {
    ask: chalk.cyan(`What is the name of Tanjiro's younger sister who turns into a demon?
    a) Nezuko
    b) Kanao
    c) Shinobu
    d) Mitsuri \n Answer: `),
    answer: 'a',
    comment: 'Nezuko is the younger sister of Tanjiro'},
    {
    ask: chalk.cyan(`Which demon slayer is known for his boar's head mask?
    a) Tanjiro Kamado
    b) Zenitsu Agatsuma
    c) Inosuke Hashibira
    d) Kyojuro Rengoku \n Answer: `),
    answer: 'c',
    comment: 'Inosuke Hashibira is known for his boars head mask'},
    {
    ask: chalk.cyan(`What is the name of the Demon Slayer Corps leader?
    a) Urokodaki Sakonji
    b) Tengen Uzui
    c) Kyojuro Rengoku
    d) Kagaya Ubuyashiki \n Answer: `),
    answer: 'd',
    comment: 'Kagaya Ubuyashiki is the name of the Demon Slayer Corps leader'},
    {
    ask: chalk.cyan(`Which Hashira wields a sword with a snake motif?
    a) Gyomei Himejima
    b) Sanemi Shinazugawa
    c) Obanai Iguro
    d) Mitsuri Kanroji \n Answer: `),
    answer: 'c',
    comment: 'Obanai Iguro wields a sword with a snake motif'},
    {
    ask: chalk.cyan(`What is the name of the final arc in the Demon Slayer anime?
    a) Mugen Train Arc
    b) Hashira Training Arc
    c) Demon Slayer Corps Arc
    d) Infinity Castle Arc \n Answer: `),
    answer: 'd',
    comment: 'Infinity Castle Arc is the name of the final arc in the Demon Slayer anime'},
    {
    ask: chalk.cyan(`What is the color of Tanjiro's Nichirin Blade?
    a) Black
    b) Blue
    c) Red
    d) Green \n Answer: `),
    answer: 'c',
    comment: 'Red is the color of Tanjiros Nichirin Blade'},

];

const check = (x) => (x < 0) ? x = 0 : x; 

const username = readlineSync.question("Name is required to begin quiz \n");
var age = readlineSync.question("Age is also required to begin quiz \n");
let score = 0;

console.log(chalk.blueBright(`${age} years old ${username}, Let us begin the quiz \n`));
console.log(chalk.redBright(`Rules: Every question gives you one point \n`));
console.log(chalk.greenBright(`Your current score is ${score} \n`));

const beginQuiz = () => {
   for(let i = 0; i < queries.length; i++){
    const {ask, answer, comment} = queries[i];
    let userInput = readlineSync.question(ask);

if(userInput === answer){
    score++;
    console.log(chalk.greenBright(`Correct indeed and here is reason: ${comment}`))
    console.log(chalk.green(`Your current score is ${score} \n`))
}else{
    score--;
    (score < 0) ? console.log(chalk.redBright('Your score is still zero')) : console.log(chalk.redBright(`Your current score is ${score} \n`));
    console.log(chalk.blueBright(`You choose ${userInput}`))
    console.log(chalk.redBright(`Hmm.. incorrect answer and here is reason: ${comment} \n`))
}

   }
    console.log(chalk.magentaBright(`Hey! ${username}, you made it to the end with score of ${check(score)}`))
    return 0;
}

beginQuiz();
