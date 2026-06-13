// js/main.js
function rollDice() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const result = document.getElementById('result');
    
    // Animace
    let rolls = 0;
    const interval = setInterval(() => {
        dice1.textContent = Math.floor(Math.random() * 20) + 1;
        dice2.textContent = Math.floor(Math.random() * 20) + 1;
        rolls++;
        
        if (rolls > 10) {
            clearInterval(interval);
            
            // Finální hod
            const final1 = Math.floor(Math.random() * 20) + 1;
            const final2 = Math.floor(Math.random() * 20) + 1;
            const total = final1 + final2;
            
            dice1.textContent = final1;
            dice2.textContent = final2;
            
            let message = `${final1} + ${final2} = ${total}`;
            
            if (final1 === 20 && final2 === 20) {
                message += " 🔥 KRITICKÝ ZÁSAH!";
                result.style.color = '#ffd700';
            } else if (final1 === 1 && final2 === 1) {
                message += " 💀 FUMBLE!";
                result.style.color = '#e74c3c';
            } else {
                result.style.color = '#ffd700';
            }
            
            result.textContent = message;
        }
    }, 100);
}


