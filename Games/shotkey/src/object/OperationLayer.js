/**
 * Created by Administrator on 2015/9/15.
 *
 * ��Ϸ�������Ʋ�
 */
var OperationLayer = cc.Layer.extend({



    ctor:function(){
        this._super();
    },
    onEnter:function(){
        this._super();

        //�󶨵����Ļ�¼�
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan.bind(this),
            onTouchEnded: this.onTouchEnded.bind(this)
        },this);
        this.scheduleUpdate();
    },
    onTouchBegan:function(touch,event){


        var target = event.getCurrentTarget();
        var location = touch.getLocation();
        var parent = target.getParent();



        parent.playLayer.shotKey();

        //parent.playerLayer.playerJump();


        return true;
    },
    onTouchEnded:function(touch,event){

        this.isTouching = false;
    },
    //�˳�  ���������Ļ�¼�
    onExit:function(){
        cc.eventManager.removeListener(cc.EventListener.TOUCH_ONE_BY_ONE);
    }


});