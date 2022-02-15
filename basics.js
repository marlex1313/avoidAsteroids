class Sceene  {
    constructor() {
        var canvas = document.createElement("canvas");
        canvas.style.backgroundColor = "black";
        document.body.appendChild(canvas);
        window.onload = function() {
            window.addEventListener('resize',init,false);
            init();
            setup();
        }
        
        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        init();
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
}

class Vector2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static sum(a,b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }
}

function getDist(a,b) {
    return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
}
