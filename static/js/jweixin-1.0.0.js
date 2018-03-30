!function (a, b) { "function" == typeof define && (define.amd || define.cmd) ? define(function () { return b(a) }) : b(a, !0) }(window, function (a, b) { function c(b, c, d) { a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function (a) { g(b, a, d) }) : j(b, d) } function d(b, c, d) { a.WeixinJSBridge ? WeixinJSBridge.on(b, function (a) { d && d.trigger && d.trigger(a), g(b, a, c) }) : d ? j(b, d) : j(b, c) } function e(a) { return a = a || {}, a.appId = z.appId, a.verifyAppId = z.appId, a.verifySignType = "sha1", a.verifyTimestamp = z.timestamp + "", a.verifyNonceStr = z.nonceStr, a.verifySignature = z.signature, a } function f(a) { return { timeStamp: a.timestamp + "", nonceStr: a.nonceStr, "package": a.package, paySign: a.paySign, signType: a.signType || "SHA1" } } function g(a, b, c) { var d, e, f; switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d, c), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", z.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(":"), f = d.substring(e + 1)) { case "ok": c.success && c.success(b); break; case "cancel": c.cancel && c.cancel(b); break; default: c.fail && c.fail(b) } c.complete && c.complete(b) } function h(a, b) { var d, e, f, g; if (b) { switch (d = b.indexOf(":"), a) { case o.config: e = "config"; break; case o.openProductSpecificView: e = "openProductSpecificView"; break; default: e = b.substring(0, d), e = e.replace(/_/g, " "), e = e.replace(/\b\w+\b/g, function (a) { return a.substring(0, 1).toUpperCase() + a.substring(1) }), e = e.substring(0, 1).toLowerCase() + e.substring(1), e = e.replace(/ /g, ""), -1 != e.indexOf("Wcpay") && (e = e.replace("Wcpay", "WCPay")), f = p[e], f && (e = f) } g = b.substring(d + 1), "confirm" == g && (g = "ok"), "failed" == g && (g = "fail"), -1 != g.indexOf("failed_") && (g = g.substring(7)), -1 != g.indexOf("fail_") && (g = g.substring(5)), g = g.replace(/_/g, " "), g = g.toLowerCase(), ("access denied" == g || "no permission to execute" == g) && (g = "permission denied"), "config" == e && "function not exist" == g && (g = "ok"), b = e + ":" + g } return b } function i(a) { var b, c, d, e; if (a) { for (b = 0, c = a.length; c > b; ++b) d = a[b], e = o[d], e && (a[b] = e); return a } } function j(a, b) { if (!(!z.debug || b && b.isInnerInvoke)) { var c = p[a]; c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || "") } } function k() { if (!("6.0.2" > w || y.systemType < 0)) { var b = new Image; y.appId = z.appId, y.initTime = x.initEndTime - x.initStartTime, y.preVerifyTime = x.preVerifyEndTime - x.preVerifyStartTime, C.getNetworkType({ isInnerInvoke: !0, success: function (a) { y.networkType = a.networkType; var c = "https://open.weixin.qq.com/sdk/report?v=" + y.version + "&o=" + y.isPreVerifyOk + "&s=" + y.systemType + "&c=" + y.clientVersion + "&a=" + y.appId + "&n=" + y.networkType + "&i=" + y.initTime + "&p=" + y.preVerifyTime + "&u=" + y.url; b.src = c } }) } } function l() { return (new Date).getTime() } function m(b) { t && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener("WeixinJSBridgeReady", b, !1)) } function n() { C.invoke || (C.invoke = function (b, c, d) { a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d) }, C.on = function (b, c) { a.WeixinJSBridge && WeixinJSBridge.on(b, c) }) } var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C; if (!a.jWeixin) return o = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", onMenuShareQZone: "menu:share:QZone", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest" }, p = function () { var b, a = {}; for (b in o) a[o[b]] = b; return a }(), q = a.document, r = q.title, s = navigator.userAgent.toLowerCase(), t = -1 != s.indexOf("micromessenger"), u = -1 != s.indexOf("android"), v = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"), w = function () { var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/); return a ? a[1] : "" }(), x = { initStartTime: l(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 }, y = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", isPreVerifyOk: 1, systemType: v ? 1 : u ? 2 : -1, clientVersion: w, url: encodeURIComponent(location.href) }, z = {}, A = { _completes: [] }, B = { state: 0, res: {} }, m(function () { x.initEndTime = l() }), C = { config: function (a) { z = a, j("config", a); var b = z.check === !1 ? !1 : !0; m(function () { var a, d, e; if (b) c(o.config, { verifyJsApiList: i(z.jsApiList) }, function () { A._complete = function (a) { x.preVerifyEndTime = l(), B.state = 1, B.res = a }, A.success = function () { y.isPreVerifyOk = 0 }, A.fail = function (a) { A._fail ? A._fail(a) : B.state = -1 }; var a = A._completes; return a.push(function () { z.debug || k() }), A.complete = function () { for (var c = 0, d = a.length; d > c; ++c) a[c](); A._completes = [] }, A }()), x.preVerifyStartTime = l(); else { for (B.state = 1, a = A._completes, d = 0, e = a.length; e > d; ++d) a[d](); A._completes = [] } }), z.beta && n() }, ready: function (a) { 0 != B.state ? a() : (A._completes.push(a), !t && z.debug && a()) }, error: function (a) { "6.0.2" > w || (-1 == B.state ? a(B.res) : A._fail = a) }, checkJsApi: function (a) { var b = function (a) { var c, d, b = a.checkResult; for (c in b) d = p[c], d && (b[d] = b[c], delete b[c]); return a }; c("checkJsApi", { jsApiList: i(a.jsApiList) }, function () { return a._complete = function (a) { if (u) { var c = a.checkResult; c && (a.checkResult = JSON.parse(c)) } a = b(a) }, a }()) }, onMenuShareTimeline: function (a) { d(o.onMenuShareTimeline, { complete: function () { c("shareTimeline", { title: a.title || r, desc: a.title || r, img_url: a.imgUrl || "", link: a.link || location.href }, a) } }, a) }, onMenuShareAppMessage: function (a) { d(o.onMenuShareAppMessage, { complete: function () { c("sendAppMessage", { title: a.title || r, desc: a.desc || "", link: a.link || location.href, img_url: a.imgUrl || "", type: a.type || "link", data_url: a.dataUrl || "" }, a) } }, a) }, onMenuShareQQ: function (a) { d(o.onMenuShareQQ, { complete: function () { c("shareQQ", { title: a.title || r, desc: a.desc || "", img_url: a.imgUrl || "", link: a.link || location.href }, a) } }, a) }, onMenuShareWeibo: function (a) { d(o.onMenuShareWeibo, { complete: function () { c("shareWeiboApp", { title: a.title || r, desc: a.desc || "", img_url: a.imgUrl || "", link: a.link || location.href }, a) } }, a) }, onMenuShareQZone: function (a) { d(o.onMenuShareQZone, { complete: function () { c("shareQZone", { title: a.title || r, desc: a.desc || "", img_url: a.imgUrl || "", link: a.link || location.href }, a) } }, a) }, startRecord: function (a) { c("startRecord", {}, a) }, stopRecord: function (a) { c("stopRecord", {}, a) }, onVoiceRecordEnd: function (a) { d("onVoiceRecordEnd", a) }, playVoice: function (a) { c("playVoice", { localId: a.localId }, a) }, pauseVoice: function (a) { c("pauseVoice", { localId: a.localId }, a) }, stopVoice: function (a) { c("stopVoice", { localId: a.localId }, a) }, onVoicePlayEnd: function (a) { d("onVoicePlayEnd", a) }, uploadVoice: function (a) { c("uploadVoice", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a) }, downloadVoice: function (a) { c("downloadVoice", { serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a) }, translateVoice: function (a) { c("translateVoice", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a) }, chooseImage: function (a) { c("chooseImage", { scene: "1|2", count: a.count || 9, sizeType: a.sizeType || ["original", "compressed"], sourceType: a.sourceType || ["album", "camera"] }, function () { return a._complete = function (a) { if (u) { var b = a.localIds; b && (a.localIds = JSON.parse(b)) } }, a }()) }, previewImage: function (a) { c(o.previewImage, { current: a.current, urls: a.urls }, a) }, uploadImage: function (a) { c("uploadImage", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a) }, downloadImage: function (a) { c("downloadImage", { serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a) }, getNetworkType: function (a) { var b = function (a) { var c, d, e, b = a.errMsg; if (a.errMsg = "getNetworkType:ok", c = a.subtype, delete a.subtype, c) a.networkType = c; else switch (d = b.indexOf(":"), e = b.substring(d + 1)) { case "wifi": case "edge": case "wwan": a.networkType = e; break; default: a.errMsg = "getNetworkType:fail" } return a }; c("getNetworkType", {}, function () { return a._complete = function (a) { a = b(a) }, a }()) }, openLocation: function (a) { c("openLocation", { latitude: a.latitude, longitude: a.longitude, name: a.name || "", address: a.address || "", scale: a.scale || 28, infoUrl: a.infoUrl || "" }, a) }, getLocation: function (a) { a = a || {}, c(o.getLocation, { type: a.type || "wgs84" }, function () { return a._complete = function (a) { delete a.type }, a }()) }, hideOptionMenu: function (a) { c("hideOptionMenu", {}, a) }, showOptionMenu: function (a) { c("showOptionMenu", {}, a) }, closeWindow: function (a) { a = a || {}, c("closeWindow", { immediate_close: a.immediateClose || 0 }, a) }, hideMenuItems: function (a) { c("hideMenuItems", { menuList: a.menuList }, a) }, showMenuItems: function (a) { c("showMenuItems", { menuList: a.menuList }, a) }, hideAllNonBaseMenuItem: function (a) { c("hideAllNonBaseMenuItem", {}, a) }, showAllNonBaseMenuItem: function (a) { c("showAllNonBaseMenuItem", {}, a) }, scanQRCode: function (a) { a = a || {}, c("scanQRCode", { needResult: a.needResult || 0, scanType: a.scanType || ["qrCode", "barCode"] }, function () { return a._complete = function (a) { var b, c; v && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result)) }, a }()) }, openProductSpecificView: function (a) { c(o.openProductSpecificView, { pid: a.productId, view_type: a.viewType || 0 }, a) }, addCard: function (a) { var e, f, g, h, b = a.cardList, d = []; for (e = 0, f = b.length; f > e; ++e) g = b[e], h = { card_id: g.cardId, card_ext: g.cardExt }, d.push(h); c(o.addCard, { card_list: d }, function () { return a._complete = function (a) { var c, d, e, b = a.card_list; if (b) { for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c) e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ; a.cardList = b, delete a.card_list } }, a }()) }, chooseCard: function (a) { c("chooseCard", { app_id: z.appId, location_id: a.shopId || "", sign_type: a.signType || "SHA1", card_id: a.cardId || "", card_type: a.cardType || "", card_sign: a.cardSign, time_stamp: a.timestamp + "", nonce_str: a.nonceStr }, function () { return a._complete = function (a) { a.cardList = a.choose_card_info, delete a.choose_card_info }, a }()) }, openCard: function (a) { var e, f, g, h, b = a.cardList, d = []; for (e = 0, f = b.length; f > e; ++e) g = b[e], h = { card_id: g.cardId, code: g.code }, d.push(h); c(o.openCard, { card_list: d }, a) }, chooseWXPay: function (a) { c(o.chooseWXPay, f(a), a) } }, b && (a.wx = a.jWeixin = C), C });
//$.getScript("http://res.wx.qq.com/open/js/jweixin-1.0.0.js?v=1.0", function () {});

$.WeChat = {
    "isWeChat": function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    },
    "Init": function (o) {
        $.get("/api/services/app/Wechat/GetWXJsTicket", {
            url: location.href.split('#')[0]
        }, function (data) {
            success_config(data.result);
        }, "json");

        function success_config(data) {
            wx.config({
                debug: !$.WeChat.isWeChat(),//开启调试模式
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名，见附录1
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.error(function (res) {
                var str = '';
                for (var i in res) {
                    str += res[i] + "|";
                }
                if (this.layer != null) {
                    layer.open({
                        content: 'wx.error:加载微信组件失败，请退出或者刷新重新进入，需检测是否绑定了JS域名授权。' + str + '</br>当前地址：' + location.hostname,
                        shadeClose: false
                    });
                }
                else {
                    alert('wx.error:加载微信组件失败，请退出或者刷新重新进入，需检测是否绑定了JS域名授权。' + str);
                }
            });
            wx.ready(function (res) {
                //try {
                //    if (o.Callback) {
                //        (o.Callback)();
                //    }
                //} catch (e) {
                //    if (this.layer != null) {
                //        layer.open({
                //            content: 'wx.ready:加载微信组件异常，请退出或者刷新重新进入，需检测是否绑定了JS域名授权。'+e,
                //            shadeClose: false
                //        });
                //    }
                //    else {
                //        alert('wx.ready:加载微信组件异常，请退出或者刷新重新进入，需检测是否绑定了JS域名授权。'+e);
                //    }
                //}
            });
        }
    },
    "Ready": function (o) {
        if (typeof wx === "object") {
            //判断当前客户端版本是否支持指定JS接口
            wx.checkJsApi({
                jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function (res) {
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                }
            });
            //分享朋友圈
            wx.onMenuShareTimeline({
                title: o.title,
                link: unescape(o.url),
                imgUrl: o.img, // 分享图标
                trigger: function (res) {
                    //alert('trigger');
                },
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                    if (o.SuccessTimeline) { (o.SuccessTimeline)(res); }
                    //分享朋友圈记录
                    if (o.collectmodule) {
                        var data = $.WeChat.GetCollectData(o.collectmodule);
                        $.post(Route.GetURL(Route.Module.Statistics, 'TimeLine'), data);
                    }
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                },
                fail: function (res) {
                }
            });
            //发送给好友
            wx.onMenuShareAppMessage({
                title: o.title, // 分享标题
                desc: o.desc, // 分享描述
                link: unescape(o.url), // 分享链接
                imgUrl: o.img, // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                    if (o.SuccessAppMessage) {
                        (o.SuccessAppMessage)(res);
                    }
                    //分享好友记录
                    if (o.collectmodule) {
                        try {
                            var data = $.WeChat.GetCollectData(o.collectmodule);
                            $.post("/Controller/collect.ashx?parm=AppMessage", data);
                        }
                        catch (e) {
                            //alert(e.message);
                        }
                    }
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                },
                fail: function (res) {
                }
            });
            //回调方法
            if (o.Callback) { (o.Callback)(); };
        }
        else {
            setTimeout(function () { $.WeChat.Ready(o); }, 100);
        }
    },
    "WxPay": function (data) {
        wx.chooseWXPay({
            "timeStamp": data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            "nonceStr": data.nonceStr, // 支付签名随机串，不长于 32 位
            "package": data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            "signType": data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            "paySign": data.paySign, // 支付签名
            success: function (res) {
                if (data.success) {
                    data.success(res);
                }
            }
        });
    },
    "SuccessTimeline": function (data, callback) {
        //alert("分享朋友圈成功。");
        try {
            $.get(Route.GetURL(Route.Module.Activity, 'AddShare'), data, function (o) {
                if (o) {
                    if (this.layer != null) {
                        layer.open({ type: 2, content: o.ok, time: 2 });
                    } else {
                        alert(o.ok);
                    }
                    if (callback) { (callback)(o); } else { }
                }
            });
        } catch (e) {
            //alert(e.message);
        }
    },
    "SuccessAppMessage": function (callback) {
        try {
            if (callback) { (callback)(); }
        } catch (e) { }
    },
    "GetCollectData": function (module) {
        var arg = window.location.search.substr(1);
        var settings = { "mod_id": module };
        arg.replace(/(\w+)(?:=([^&]*))?/g, function (a, key, value) {
            settings[key] = value;
        });
        return settings;
    },
    "CollectModule": {
        "Magazine": 1,
        "TWeb": 2
    }
};