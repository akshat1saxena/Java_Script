// 1. Use a
// switch statement to log the following string
// for the given 'language':

//     chinese or mandarin: 'MOST number of native speakers!'

// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too

const language = 'Chinese'
switch (language) {
    case 'Chinese':
        console.log(`MOST number of native speakers!`);
        break;
    case 'Spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'English':
        console.log(`3rd place`);
        break;
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arab':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Not a valid language`);
}