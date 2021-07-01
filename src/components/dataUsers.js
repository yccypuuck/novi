import namor from 'namor'
import React from 'react';
import Avatar from 'react-avatar';
// import AvatarGenerator from 'react-avatar-generator';

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
}
function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function getRandomStatus() {
    const statusChance = Math.random();
    if (statusChance > 0.86) {
        return 'In Progress';
    }
    if (statusChance > 0.33) {
        return 'Done';
    }
    return 'ToDo';
}

function prev_week(user_date, week) {
    user_date.setDate(user_date.getDate() + 7);

    return user_date.toISOString().split('T')[0];
}
const history_size = 30;
const newPerson = (d) => {
    var user_date = new Date()
    user_date.setDate(user_date.getDate() - 7 * (history_size - 1));
    const personName = Capitalize(namor.generate({ words: 1, saltLength: 0 }))
        + ' '
        + Capitalize(namor.generate({ words: 1, saltLength: 0 }));
    const issuesOntime = Math.floor(Math.random() * 50);
    const issuesOverDue = Math.floor(Math.random() * 10);
    const user_min = Math.floor(Math.random() * 800);
    const cumulativeSum = (sum => value => sum += value)(0);
    var history_avg = Array.from({ length: history_size }, () => Math.floor(Math.random() * (1000 - user_min) + user_min)).map(cumulativeSum);
    history_avg = history_avg.map((x, i) => (x / (i + 1) ))
    var users = {
        avatar: <Avatar name={personName} size="30" />,
        id: namor.generate({ words: 1, saltLength: 2 }),
        fullName: personName,
        issuesOntime: issuesOntime,
        storyPoints: (issuesOntime + issuesOverDue) * Math.floor((Math.random() + 0.1) * 7),
        issuesOverdue: issuesOverDue,
        battingAverage: Math.floor(history_avg[history_size-1]),
        email: namor.generate({ words: 1, saltLength: 0 }) + '@gmail.com',
        status: getRandomStatus(),
        data: history_avg.map((x, i) => ({ 'x': prev_week(user_date, i), 'y': x}))
    }
    console.log(users.battingAverage);

    return users;
}

export default function dataUsers(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(d),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}
