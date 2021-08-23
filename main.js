let users = [];
while (true) {
    let user = prompt(`Element qo'shing! (Masalan: add element, Ali)`);
    let string = user.split(' ');
    if (string[0] == 'add') {
        users.push(string[2]);
    } else if (string[0] == 'del') {
        if (users.findIndex((el) => el == string[2]) != -1) {
            users.splice(users.findIndex((el) => el == string[2]), 1);
        }
    } else if (string[0] == 'stop' || string[0] == 'STOP' || string[0] == 'Stop') {
        break;
    }
    console.log(users);
}
console.log(users);

console.log(' ');

function vowels(str) {
    const vowel = ['a', 'y', 'i', 'e', 'o', 'u'];
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (str[i].toLowerCase() == vowel[j]) {
                res++;
            }

        }
    }
    return res;
}


// Omonjon Sobirov