// BAT_BALL_STUMP
let Win= 0;
let Lose= 0;
let Draw= 0;

function Bat() {
    let a = Math.random() * 3; 
    let b = Math.floor(a); 
    console.log("Generated value:", b); 
    if (b == 0) {
        Draw++;
        alert(`Draw! Computer also Choose Bat
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    } else if (b == 1) {
        Win++;
        alert(`User won!Computer Choose Ball
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    } else if (b == 2) {
        Lose++;
        alert(`User Lose! Computer Choose Stump
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    }
}
function Ball() {
    let a = Math.random() * 3;
    let b = Math.floor(a); 
    console.log("Generated value:", b);

    if (b == 1) {
        Draw++;
        alert(`Draw! Computer also Choose Ball
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    } else if (b == 2) {
        Win++;
        alert(`User won! Computer Choose Stump
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    } else if (b == 0) {
        Lose++;
        alert(`User Lose! Computer Choose Bat
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    }
}
function Wic() {
    let a = Math.random() * 3;
    let b = Math.floor(a); 
    console.log("Generated value:", b); 

    if (b == 2) {
        Draw++;
        alert(`Draw!Computer also Choose Stump
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    } else if (b == 0) {
        Win++;
        alert(`User won! Computer Choose Bat
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    } else if (b == 1) {
        Lose++;
        alert(`User Lose! Computer Choose Ball
Win:${Win} Lose:${Lose} Draw:${Draw}`);
    }
}
