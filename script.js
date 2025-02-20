// Random Suffix Messages to generate
const msgOne = [
  ['teaches us anything, it is the importance of learning from past mistakes'],
  ['is any guide, we must be vigilant in protecting our freedoms'],
  ['has shown us, great civilizations rise and fall based on their values'],
  ['repeats itself, we should be prepared for the consequences of our actions'],
  ['is to be believed, innovation often stems from adversity'],
  ['reveals patterns, we can anticipate future challenges'],
  ['provides insight, we can better understand current events'],
  ['is a teacher, it emphasizes the significance of resilience'],
  ['holds lessons, we must heed the warnings of the past'],
  ['is a narrative, it is one filled with triumphs and tragedies alike']
]

const msgTwo = [
  ['teaches us anything, it is the importance of learning from past mistakes'],
  ['can be achieved through perseverance and resilience'],
  ['is a journey that involves continuous learning'],
  ['brings a sense of fulfillment and accomplishment'],
  ['is often the result of effective planning and execution'],
  ['inspires others to pursue their own goals'],
  ['can lead to new opportunities and experiences'],
  ['is not solely defined by financial gain'],
  ['fosters personal growth and development'],
  ['is best celebrated with those who supported you along the way']
]

const msgThree = [
  ['is essential for making informed decisions about money'],
  ['empowers individuals to manage their personal finances effectively'],
  ['helps people understand the importance of budgeting'],
  ['enables individuals to invest wisely for their future'],
  ['fosters a better understanding of credit and debt management'],
  ['encourages saving for emergencies and long-term goals'],
  ['provides the knowledge needed to navigate financial products'],
  ['promotes responsible spending habits among consumers'],
  ['is crucial for achieving financial independence'],
  ['enhances one\'s ability to plan for retirement successfully']
]

const msgFour = [
  ['serves as the foundation for personal and professional growth'],
  ['empowers individuals to make informed decisions'],
  ['fosters critical thinking and problem-solving skills'],
  ['opens doors to various career opportunities'],
  ['promotes social and cultural awareness'],
  ['encourages lifelong learning and curiosity'],
  ['enhances communication and interpersonal skills'],
  ['contributes to the development of a knowledgeable society'],
  ['instills values of discipline and responsibility'],
  ['plays a crucial role in shaping future leaders']
];

// Prefixes for the random messages

let txtOne = 'If history';
let txtTwo = 'Success';
let txtThree = 'Financial literacy';
let txtFour = 'Education';
const startTxt = [txtOne, txtTwo, txtThree, txtFour];

// Generating random number to pick from the prefix & suffix arrays
const randPrefix = startTxt[Math.floor(Math.random() * 4)];
const randSuffix = Math.floor(Math.random() * 9);

// Function to call to generate random message
const randMsg = () => {
  if (randPrefix === 'If history') {
    console.log(randPrefix + ' ' + msgOne[randSuffix] + '.');
  } else if (randPrefix === 'Success') {
    console.log(randPrefix + ' ' + msgTwo[randSuffix] + '.');
  } else if (randPrefix === 'Financial literacy') {
    console.log(randPrefix + ' ' + msgThree[randSuffix] + '.');
  } else {
    console.log(randPrefix + ' ' + msgFour[randSuffix] + '.');
  }
};




//console.log(randPrefix + ' ' + msgFour[randSuffix] + '.');
//console.log(randSuffix);
randMsg();
