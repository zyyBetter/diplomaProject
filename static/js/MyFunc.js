/**
 * Created by html5 on 2017/9/22.
 */
// /** + enter
/**
 * 通过id名称获取标签
 * @param id id名称
 * @returns {Element} 标签
 */
function $(id) {
    return document.getElementById(id);
}
/**
 * 通过标签名称获取元素
 * @param obj 在哪个标签里面获取元素
 * @param tagName 标签名称
 * @returns {NodeList} 返回获取到的标签的集合
 */
function getByTagName(obj, tagName) {
    return obj.getElementsByTagName(tagName);
}
/**
 * 遍历dom
 * @param obj 要遍历的数组或者是伪数组 集合
 * @param callback 回调函数
 */
function each(obj, callback) {
    for (var i = 0; i < obj.length; i++) {
        if (callback) {
            callback(obj[i], i);
        }
    }
}
/**
 * 获取滚动距离
 * 使用方法 scroll().top scroll().left
 * @returns {*}
 */
function scroll() {
    if (window.pageXOffset || window.pageYOffset) {
        var obj = {
            top: window.pageYOffset,
            left: window.pageXOffset
        };
        return obj;
    } else if (document.compatMode == 'CSS1Compat') {
        // 标准浏览器
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else {
        // 怪异模式
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}
/**
 * 获取屏幕的宽度和高度
 */
function client() {
    if (window.innerHeight) {
        // 最新浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode == 'CSS1Compat') {
        // 标准浏览器
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        // 怪异浏览器
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}
/**
 * 匀速动画
 * @param obj 要做动画得标签
 * @param speed 速度
 * @param target 目标值
 */
function linear(obj, speed, target) {
    clearInterval(obj.timer);
    var beginX = obj.offsetLeft;
    // 速度
    var dir = 0;
    // 判断方向
    if (beginX < target) {
        // 向右走
        dir = speed;
    } else {
        // 向左走
        dir = -speed;
    }
    obj.timer = setInterval(function () {
        beginX += dir;

        if (Math.abs(target - beginX) <= speed) {
            clearInterval(obj.timer);
            beginX = target;
        }
        obj.style.left = beginX + 'px';
        console.log(beginX);
    }, 10);
}
/**
 * 缓动动画
 * @param obj 要做缓动动画得标签
 * @param json 那些属性要改变
 * @param callback 回调函数
 */
function buffer(obj, json, callback) {
    // 1.清空上次定时器
    clearInterval(obj.timer);

    // 2.开启定时器
    obj.timer = setInterval(function () {
        // 定义一个标志 true 代表所有的值都到达目标值,清空定时器 false 没有达到目标值 不能清空定时器
        // 当所有的值都到达目标值才能清空定时器
        var flg = true;
        var begin = 0;
        var target = 0;
        for (var key in json) {
            // 1.获取初始值
            if (key == 'opacity') {
                begin = getStyleAttr(obj, key) == 0 ? 0 : parseInt(getStyleAttr(obj, key) * 100) || 100;
                target = json[key] * 100;
            } else if (key == 'scrollTop') {
                begin = obj.scrollTop;
                target = json[key];
            } else {
                begin = parseInt(getStyleAttr(obj, key)) || 0;
                // 2.获取目标值
                target = json[key];
            }

            // 3.速度
            var speed = (target - begin) / 10;
//            speed = Math.ceil(speed);
            // 4.判断方向
            if (begin <= target) {
                // 往右走
                //向上取整
                speed = Math.ceil(speed);
            } else {
                // 往左走
                // 向下取整
                speed = Math.floor(speed);
            }
            // 5.缓动动画
            begin = begin + speed;

            // console.log(speed,begin,target);
            // 6.判断终止条件
            if (key == 'opacity') {
                obj.style.opacity = begin / 100;
                // 兼容IE浏览器
                obj.style.filter = 'alpha(opacity=' + begin + ')';
            } else if (key == 'scrollTop') {
                obj.scrollTop = begin;
            } else if (key == 'zIndex') {
                // zIndex 不要渐变直接设置
                obj.style.zIndex = target;
            } else {
                obj.style[key] = begin + 'px';
            }

            // 7.判断终止条件
            if (begin != target) {
                // 当前属性没有到达目标值
                flg = false;
            }
        }
        if (flg) {
            // 到达目标值
            clearInterval(obj.timer);
            // 动画执行完毕
            if (callback) {
                callback();
            }
//                callback && callback();
        }
    }, 10);
}
/**
 * 获取css属性值
 * @param obj 要获取的元素
 * @param attr 要获取哪个属性值
 * @returns {*} 返回获取好的属性值
 */
function getStyleAttr(obj, attr) {
    if (obj.currentStyle) { // IE 和 opera
        return obj.currentStyle[attr];
    } else {
        // w3c标准
        return window.getComputedStyle(obj, null)[attr];
    }
}

/*
 * 判断浏览器
 */
function getOs() {
    var OsObject = "";
    // navigator.userAgent 获取浏览器信息
    if (isIE = navigator.userAgent.indexOf("MSIE") != -1) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") != -1) {
        return "Firefox";
    }
    if (isChrome = navigator.userAgent.indexOf("Chrome") != -1) {
        return "Chrome";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") != -1) {
        return "Safari";
    }
    if (isOpera = navigator.userAgent.indexOf("Opera") != -1) {
        return "Opera";
    }
}