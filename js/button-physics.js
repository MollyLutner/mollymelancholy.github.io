
var id = null;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const onFunkyBtnHover = (btn) => {
    clearInterval(id);
    
    const rect = btn.getBoundingClientRect();
    var x = rect.left;
    var y = rect.top;

    const w = 1000;
    const h = 600;

    const finalX = getRndInteger(0, w);
    const finalY = getRndInteger(0, h);

    const dx = finalX - x;
    const dy = finalY - y;
    const dist = Math.hypot(dx, dy);

    const xDir = dx / dist;
    const yDir = dy / dist;

    const acc = 0.4;
    var vel = 0.0;

    const startTimer = 5;
    var time = 0;

    id = setInterval(frame, 10);
    function frame() {
        time++;
        if ((Math.abs(finalY - y) < vel) && (Math.abs(finalX - x) < vel)) {
            clearInterval(id);
        } else if (time >= startTimer) {
            vel += acc;
            x += vel * xDir;
            y += vel * yDir;

            btn.style.top = y + 'px';
            btn.style.left = x + 'px';
        }
        
    }
    

}
