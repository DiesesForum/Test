const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const FILE_PATH = './data.json';

const makeCommit = n => {
if(n === 0) return simpleGit().push();
const x = random.int(0, 10);
const y = random.int(0,6);
    const DATE = moment().subtract(120,'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
    const data = {
        date: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, () =>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}, makeCommit.bind(this, --n));
    });
}

let i = 100;
while(i > 0){
    i--;
    makeCommit(100);
    makeCommit(100);
    makeCommit(100);
}