//存放common.js里面公共的对象
let globalObj = {

};

//get请求
export const getXHR = function (url,data,callback) {

    const hasData = typeof data !== 'function';

    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.onreadystatechange = function () {

        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {

            hasData ? callback(xhr.responseText) : data(xhr.responseText);

        }
    }

    const sendDate = hasData ? data : null;

    xhr.send(sendDate);
}

//post请求
export const postXHR = function (url,data,callback) {

    var xhr = new XMLHttpRequest();

    xhr.open('POST',url,true);

    xhr.onreadystatechange = function () {

        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {

            callback(xhr.responseText);

        }
    }

    xhr.send(data);
}
//滚动加载
export const scrollLoad = function(ele,bottomHeight,callback){

    const _ele = document.querySelector(ele);

    const cliHeight = _ele.clientHeight;

    let bH = bottomHeight || 100;

    let scrollTop = _ele.scrollTop;

    let scrollHeight = _ele.scrollHeight;

    _ele.addEventListener('scroll',function(){

        if(scrollHeight <= cliHeight){return false};

        scrollTop = _ele.scrollTop;
        
        scrollHeight = _ele.scrollHeight;

        if(scrollHeight - cliHeight - scrollTop < bH){
            callback();
        }
        
    },false);
}

//图片加载成功后
function imgPrevLoad (config, callback) {

    var hash = config.hash || false;

    var imgArr = config.imgArr || [];

    var tempLen = imgArr.length;

    var hashImgBox = [];

    imgArr.forEach(function(value,index) {

        var IMG = document.createElement("img");

        if (hash) {
            value += '?vs='+(new Date().getTime())+'';
        }

        IMG.src = value;

        hashImgBox.push(value);

        IMG.onload = function () {

            tempLen--;

            if (tempLen === 0) {

                callback(hashImgBox);

            }
        }
    });
}




