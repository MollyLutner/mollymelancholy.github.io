
var id = null;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const onFunkyBtnClick = (btn) => {
    var rect = btn.getBoundingClientRect();
    var x = rect.left;
    var y = rect.top;
    var vel = 0;

    const displacement = 200
    const finalX = x + displacement
    const finalY = y + displacement

    const yDir = getRndInteger(0, 2) - 1;
    const xDir = getRndInteger(0, 2) - 1;

    const w = 1000;
    const h = 600;

    id = setInterval(frame, 10);
    function frame() {
        if (y > finalY || x > finalX || x > w || x < 0 || y > h || y < 0) {
            clearInterval(id);
        } else {
            vel++;
            x += vel * xDir;
            y += vel * yDir;

            // x = x > w ? w : x;
            // y = y > h ? h : y;
            // x = x < 0 ? 1 : x;
            // y = y < 0 ? 1 : y;

            btn.style.top = y + 'px';
            btn.style.left = x + 'px';
        }
        console.log(btn.style.left);
    }
    

}
