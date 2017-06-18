// 程序入口
import WebGL =  laya.webgl.WebGL;
import  Stage = laya.display.Stage;
import  Stat = laya.utils.Stat;
import  LayaEvent = laya.events.Event;
import Sprite = laya.display.Sprite;
import LayaImage = laya.ui.Image;

class GameMain{
    image:LayaImage;
    sps=[];
    frameCount=0;
    constructor(){
        Laya.init(1024,768,WebGL);
        Laya.stage.scaleMode=Stage.SCALE_FULL;
        Stat.show();

        this.image = new LayaImage('test.png');
        this.image.once(LayaEvent.LOADED, this, this.onLoadImage);
        Laya.timer.frameLoop(1, this,this.animate);
    }

    onLoadImage(){
        for (let i = 0; i < 2000; i++){
            var sp = Laya.stage.addChild(new Sprite()) as Sprite;
            this.sps.push(sp);
            sp.graphics.drawTexture(this.image.source, 0, 0, 20, 20);
            //sp.graphics.drawRect(0, 0, 50, 50, (i%2==0)?"#777777":"#555555");
            sp.pos((i%60)*10+i%2*2, Math.floor(i/60)*20+i%2*2);
        }

    }
    animate(e:LayaEvent){
        this.frameCount++;
        if (this.sps.length > 0){
            for (let i = 0,n=this.sps.length; i < n; i++){
                this.sps[i].rotation=this.frameCount;
            }
        }
        
    }
}
new GameMain();