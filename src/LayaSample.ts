// 程序入口
//type WebGL = laya.webgl.WebGL;
let WebGL = laya.webgl.WebGL
let Stage = laya.display.Stage;
let Stat = laya.utils.Stat;
let LayaEvent = laya.events.Event;
let Sprite = laya.display.Sprite;
type LayaImage = laya.ui.Image;

class GameMain{
    image:LayaImage;
    sps=[];
    frameCount=0;
    constructor(){
        Laya.init(1024,768,WebGL);
        Laya.stage.scaleMode=Stage.SCALE_FULL;
        Stat.show();

        this.image = new laya.ui.Image('test.png');
        this.image.once(LayaEvent.LOADED, this, this.onLoadImage);
        Laya.timer.frameLoop(1, this,this.animate);
    }

    onLoadImage(){
        for (let i = 0; i < 2000; i++){
            var sp = Laya.stage.addChild(new Sprite()) as laya.display.Sprite;
            this.sps.push(sp);
            sp.graphics.drawTexture(this.image.source, 0, 0, 20, 20);
            //sp.graphics.drawRect(0, 0, 50, 50, (i%2==0)?"#777777":"#555555");
            sp.pos((i%60)*10+i%2*2, Math.floor(i/60)*20+i%2*2);
        }

    }
    animate(e:laya.events.Event){
        this.frameCount++;
        if (this.sps.length > 0){
            for (let i = 0,n=this.sps.length; i < n; i++){
                this.sps[i].rotation=this.frameCount;
            }
        }
        
    }
}
new GameMain();