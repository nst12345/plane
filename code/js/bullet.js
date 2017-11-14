


//子弹Bullet
class Bull {
    //属性ele
    constructor(){
        this.ele = document.createElement("div");
        this.id = parseInt(Math.random() * 100000000);
    }
}

class Bullet extends Bull{
	//方法init
	init(){
		
		//添加
		gameEngine.allBullet[this.id] = this;
		//console.log( gameEngine.allBullet );
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
        [this.ele.style.left,this.ele.style.top]=[myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px",myPlane.ele.offsetTop - this.ele.offsetHeight + "px"]
		return this;
	}
	
	//方法move
	move(){
		let that = this;
		this.timer = setInterval(fn=>{
			var y = that.ele.offsetTop - 10;
			if (y < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				
				//删除
				delete gameEngine.allBullet[that.id];
			}
			else {
				that.ele.style.top = y + "px"; //移动
			}
		}, 50);
	}
	
	//爆炸
	boom(){
		clearInterval(this.timer); //停止移动
		
		this.ele.className = "bullet-die";
		
		var that = this;
		const dieImgs = ["images2/die1.png", "images2/die2.png"];
		var i = 0;
		var dieTimer = setInterval(fn=>{
			if (i >= 1){
				clearInterval(dieTimer); //停止爆炸
				gameEngine.ele.removeChild(that.ele); //移除子弹
			}else {
				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			}
		}, 100);
	}
	
}

