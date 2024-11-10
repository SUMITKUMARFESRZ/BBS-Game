// BAT_BALL_STUMP
let store={
    Win: 0,
    Lose:0,
    Draw:0
    
};
function Bat() {
    let a = Math.random() * 3; 
    let b = Math.floor(a); 
    console.log("Generated value:", b); 
    if (b == 0) {
        store.Draw++;
        alert(`store.Draw! Computer also Choose Bat
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    } else if (b == 1) {
        store.Win++;
        alert(`User won!Computer Choose Ball
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    } else if (b == 2) {
        store.Lose++;
        alert(`User store.Lose! Computer Choose Stump
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    }
    localStorage.setItem("StoredValue",JSON.stringify(store));
}
function Ball() {
    let a = Math.random() * 3;
    let b = Math.floor(a); 
    console.log("Generated value:", b);

    if (b == 1) {
        store.Draw++;
        alert(`store.Draw! Computer also Choose Ball
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    } else if (b == 2) {
        store.Win++;
        alert(`User won! Computer Choose Stump
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    } else if (b == 0) {
        store.Lose++;
        alert(`User store.Lose! Computer Choose Bat
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    }
    localStorage.setItem("StoredValue",JSON.stringify(store));
}
function Wic() {
    let a = Math.random() * 3;
    let b = Math.floor(a); 
    console.log("Generated value:", b); 

    if (b == 2) {
        store.Draw++;
        alert(`store.Draw!Computer also Choose Stump
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    } else if (b == 0) {
        store.Win++;
        alert(`User won! Computer Choose Bat
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    } else if (b == 1) {
        store.Lose++;
        alert(`User store.Lose! Computer Choose Ball
Win${store.Win} Lose${store.Lose} Draw${store.Draw}`);
    }
    localStorage.setItem("StoredValue",JSON.stringify(store));
}
function Reset(){
    store.Win=0;
    store.Lose=0;
    store.Draw=0;
    localStorage.setItem("StoredValue",JSON.stringify(store));

}
