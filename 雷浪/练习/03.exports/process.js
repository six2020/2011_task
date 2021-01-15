// 进程
// console.log(process.argv);

var playerAction = process.argv[2];
var computerAction = ['shitou', 'jiandao', 'bu'];
var random = Math.floor(Math.random() * 3);
var computer = computerAction[random];

if (playerAction === computerAction[0] || playerAction === computerAction[1] || playerAction === computerAction[2]) {
    console.log('玩家出 ---> ', playerAction);
    console.log('电脑出 ---> ', computer);
    if (playerAction === computer) {
        console.log('平局');
    } else if ( playerAction === 'shitou' && computer === computerAction[1] || 
                playerAction === 'jiandao' && computer === computerAction[2] ||
                playerAction === 'bu' && computer === computerAction[0]
    ) {
        console.log('玩家赢！');
    } else {
        console.log('电脑赢！');
    }
} else {
    console.log('玩家出拳犯规');
}

