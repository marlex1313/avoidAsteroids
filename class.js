class SpaceCraft {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.life = 20;
    }

    move() {
        if(keys.includes(37)) {if(this.x - this.size > canvas.width*0.5-300) {this.x -= 8}}//left
        if(keys.includes(39)) {if(this.x + this.size < canvas.width*0.5+300) {this.x += 8}}//right
    }

    render() {
        sceene.shadowBlur = 50;
        sceene.shadowColor = "violet";
        sceene.fillStyle = "blue";
        sceene.beginPath();
        sceene.arc(this.x,this.y,this.size,0,Math.PI*2);
        sceene.fill();
    }
}

class Asteroid {
    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    static updatePosition(array) {
        for(var a=0;a<array.length;a++) {
            array[a].y += 3;
            if(array[a].y > canvas.height + array[a].size) {
                array.splice(a,1);
            }
        }
    }

    static renderList(array) {
        for(var a=0;a<array.length;a++) {
            sceene.shadowColor = "red";
            sceene.fillStyle = "#b5683c";
            sceene.beginPath();
            sceene.arc(array[a].x,array[a].y,array[a].size,0,Math.PI*2);
            sceene.fill();
            sceene.stroke();
        }
    }

    static checkColisions(array) {
        for(var a=0;a<array.length;a++) {
            if(getDist(new Vector2(player.x,player.y),new Vector2(array[a].x,array[a].y)) <= player.size + array[a].size) {
                //console.log("lost");
                playing = false;
            }
        }
    }
}
