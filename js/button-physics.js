
var id = null;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const onFunkyBtnClick = (btn) => {
    var rect = btn.getBoundingClientRect();
    var x = rect.left;
    var y = rect.top;
    var vel = 0;

    const w = 1000;
    const h = 600;

    var finalX = getRndInteger(0, w);
    var finalY = getRndInteger(0, h);

    var dx = finalX - x;
    var dy = finalY - y;
    var dist = Math.hypot(dx, dy);

    var xDir = dx / dist;
    var yDir = dy / dist;

    id = setInterval(frame, 10);
    function frame() {
        if ((Math.abs(finalY - y) < vel) && (Math.abs(finalX - x) < vel)) {
            clearInterval(id);
        } else {
            vel += 0.2;
            x += vel * xDir;
            y += vel * yDir;

            x = x > w ? w : x;
            y = y > h ? h : y;
            x = x < 0 ? 0 : x;
            y = y < 0 ? 0 : y;

            btn.style.top = y + 'px';
            btn.style.left = x + 'px';
        }
        
    }
    

}
