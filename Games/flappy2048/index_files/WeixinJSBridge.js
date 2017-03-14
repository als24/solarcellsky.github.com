document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	window.shareData = {
		"imgUrl": "http://bbs.y3.cn/wechat/website/games/images/flappy2048.jpg",
		//������ҳ���ͷ��Ҳ�������Լ������һ��ͼƬ���䣬ÿ��ҳ����������JS
		"timeLineLink": "http://www.91jiao.com/flappy2048/",
		"sendFriendLink": "http://www.91jiao.com/flappy2048/",
		"weiboLink": "http://www.91jiao.com/flappy2048/",
		//��������Ȧ
		"tTitle": "��2048��Flappy Bird��ҪŰ�ĵ���Ϸ���Ѿ����������ٶ�����ս�ң�",
		"tContent": "ʷ��������������Ϸ����ô��ͣ�������Ķ�ս���飡",
		//���͸�����
		"fTitle": "��2048��Flappy Bird��ҪŰ�ĵ���Ϸ���Ѿ����������ٶ�����ս�ң�",
		"fContent": "ʷ��������������Ϸ����ô��ͣ�������Ķ�ս���飡",
		"wContent": "��2048��Flappy Bird��ҪŰ�ĵ���Ϸ���Ѿ����������ٶ�����ս�ң�"
	};
	// ���͸�����
	WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		WeixinJSBridge.invoke('sendAppMessage', {
			"img_url": window.shareData.imgUrl,
			// "img_width": "640",
			// "img_height": "640",
			"link": window.shareData.sendFriendLink,
			"desc": window.shareData.fContent,
			"title": window.shareData.fTitle
		}, function(res) {
			_report('send_msg', res.err_msg);
		})
	});

	// ��������Ȧ
	WeixinJSBridge.on('menu:share:timeline', function(argv) {
		WeixinJSBridge.invoke('shareTimeline', {
			"img_url": window.shareData.imgUrl,
			"img_width": "640",
			"img_height": "640",
			"link": window.shareData.timeLineLink,
			"desc": window.shareData.tContent,
			"title": window.shareData.tTitle
		}, function(res) {
			_report('timeline', res.err_msg);
		});
	});

	// ����΢��
	WeixinJSBridge.on('menu:share:weibo', function(argv) {
		WeixinJSBridge.invoke('shareWeibo', {
			"content": window.shareData.wContent,
			"url": window.shareData.weiboLink,
		}, function(res) {
			_report('weibo', res.err_msg);
		});
	});

}, false)