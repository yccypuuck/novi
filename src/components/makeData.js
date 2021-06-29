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

const newPerson = (d) => {
    const personName = Capitalize(namor.generate({ words: 1, saltLength: 0}))
        + ' '
        + Capitalize(namor.generate({ words: 1, saltLength: 0}));
    const issuesOntime = Math.floor(Math.random() * 50);
    const issuesOverDue = Math.floor(Math.random() * 10);
    return {
        id: d,
        avatar: <Avatar name={personName} size="40" />,
        username: namor.generate({ words: 1, saltLength: 2 }),
        fullName: personName,
        issuesOntime: issuesOntime,
        storyPoints: (issuesOntime + issuesOverDue) * Math.floor((Math.random() + 0.1) * 7),
        issuesOverdue: issuesOverDue,
        battingAverage: Math.floor(issuesOntime / (issuesOntime + issuesOverDue) * 1000),
        email: namor.generate({ words: 1, saltLength: 0 }) + '@gmail.com',
        status: getRandomStatus(),
    }
}

export default function makeData(...lens) {
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
