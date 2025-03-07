let pikachuHP = 100;
let charmanderHP = 100;

function attack(attacker, defender, damage) {
    if (defender === "charmander") {
        charmanderHP -= damage;
        document.getElementById("charmander-hp").textContent = Math.max(0, charmanderHP);
        log(`${attacker} の攻撃！ ヒトカゲに ${damage} ダメージ！`);
    } else {
        pikachuHP -= damage;
        document.getElementById("pikachu-hp").textContent = Math.max(0, pikachuHP);
        log(`${attacker} の攻撃！ ピカチュウに ${damage} ダメージ！`);
    }

    checkGameOver();
    
    if (defender === "charmander") {
        setTimeout(() => enemyAttack(), 1000);
    }
}

function enemyAttack() {
    let damage = Math.random() < 0.5 ? 15 : 25;
    attack("charmander", "pikachu", damage);
}

function log(message) {
    let logElement = document.getElementById("log");
    logElement.innerHTML = message + "<br>" + logElement.innerHTML;
}

function checkGameOver() {
    if (pikachuHP <= 0) {
        log("ピカチュウはたおれた！ ヒトカゲの勝ち！");
        disableButtons();
    } else if (charmanderHP <= 0) {
        log("ヒトカゲはたおれた！ ピカチュウの勝ち！");
        disableButtons();
    }
}

function disableButtons() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
}
