// Zen Koans example dictionaries

const zenFirst = ['not engaging in ignorance is wisdom', "don't waste your time chasing butterflies", 'muddy water is best cleared by leaving it alone', 'the less you need', 'you must let what happens happen', 'dwell not in the inner void', 'there is only one reality', 'un-know nothingness is in fact', 'become comfortable with not knowing'];
const zenMiddle = ['that is our practice', 'the whole world belongs to you', 'listen', 'you become the universe', 'keep climbing', 'grasp nothing', 'every moment is the guru', 'the reservoir of infinite possiblities', 'is the most important thing'];
const zenLast = ['Qigang Nakayama', 'Hirokumi Kojima', 'Iwao Murata', 'Masashi Sumisu', 'Jotaro Zhan', 'Kamatari Sakata', 'Bunrakuken Kanbayashi', 'Shinichi Okimoto', 'Sekien Miyashita'];

// returns random zenFirst phrase
const returnZenFirst = () => {
    return zenFirst[Math.floor(Math.random() *9)];
    console.log(returnZenFirst);
};

const returnZenMiddle = () => {
    return zenMiddle[Math.floor(Math.random() *9)];
    console.log(returnZenMiddle);
};

const returnZenLast = () => {
    return zenLast[Math.floor(Math.random() *9)];
    console.log(returnZenLast);
};



