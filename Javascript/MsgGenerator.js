// I defined the multiple arrays that my message generator will use as pool for components
const times = [
    "Today",
    "Tomorrow",
    "This week",
    "This month",
    "This year",
    "In the near future",
    "In the coming days",
    "In the upcoming weeks",
    "In the upcoming months",
    "In the foreseeable future"
];

const subjects = [
    "your journey",
    "your life",
    "your path",
    "your destiny",
    "the world around you",
    "every moment",
    "every step you take",
    "your dreams",
    "your aspirations",
    "your endeavors"
];

const verbs = [
    "is",
    "will be",
    "turns into",
    "becomes",
    "evolves into",
    "transforms into",
    "unveils itself as",
    "manifests as"
];

const attributes = [
    "filled with opportunity",
    "an adventure waiting to happen",
    "a canvas for your dreams",
    "an unfolding masterpiece",
    "overflowing with potential",
    "a journey worth taking",
    "waiting to be explored",
    "limitless in possibilities"
];


// I randomized the array element selection in order to generate a different phrase each time 
function generateMessage() {
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    
    return `${randomTime}, ${randomSubject} ${randomVerb} ${randomAttribute}!`;
}

// testing the program 
console.log(generateMessage());

