// 底部轮播；
var swipers = new Swiper('.swipers', {
    autoplay: { //播放时间间隔
        delay: 5000,
        disableOnInteraction: false,
    }, //可选选项，自动滑动
    loop: true,
    interval: 5000,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    observeSlideChildren:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});
var mainRightSwiper = new Swiper('.main-right', {
    autoplay: { //播放时间间隔
        delay: 5000,
        disableOnInteraction: false,
    }, //可选选项，自动滑动
    loop: true,
    interval: 5000,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
//鼠标放上暂停轮播
swipers.onmouseover = function(){
    swipers.autoplay.stop();
};
//鼠标离开开始轮播
swipers.onmouseleave = function(){
    swipers.autoplay.start();
};
//鼠标放上暂停轮播
mainRightSwiper.onmouseover = function(){
    mainRightSwiper.autoplay.stop();
};
//鼠标离开开始轮播
mainRightSwiper.onmouseleave = function(){
    mainRightSwiper.autoplay.start();
};
$.fn.extend({
    mouseOver: function() {
        $(this).find('div').addClass('active');
        $(this).find('img').addClass('swiper-action');
    },
    mouseOut: function() {
        $(this).find('div').removeClass('active');
        $(this).find('img').removeClass('swiper-action');
    },
    displayImage: function(ele)  {
        var bodyClientWidth = document.documentElement.clientWidth;
        var bodysClientHeight = document.documentElement.clientHeight;
        var overlay = document.createElement('div');
        var image = new Image(); // 建立新图片节点；
        image.src = ele.getAttribute('src');
        var con = image.height / image.width;
        if (con > 1.2) {
            image.style.height =  bodysClientHeight / 2 + 'px';
        }else if (con <= 1.2) {
            image.style.width =  bodyClientWidth / 2 + 'px';
        }
        $(image).css({
            'position':'fixed',
            'left':0,
            'top':0,
            'right':0,
            'bottom':0,
            'margin':'auto',
            'z-index':6
        });
        $(overlay).css({
            'position':'fixed',
            'left':0,
            'top':0,
            'width':'100%',
            'height':'100%',
            'background':'rgba(0,0,0,0.8)',
            'z-index':2
        });
        document.body.appendChild(overlay);
        document.body.appendChild(image);
        //再次点击，如果图片存在，就删除该节点；
        $(image).on("click", function(e){
            e.stopPropagation();
            if(image){
                $(image).remove();
                $(overlay).remove();
            }
        });
        $(overlay).on("click", function(e){
            e.stopPropagation();
            if(image){
                $(image).remove();
                $(overlay).remove();
            }
        });
    }
});
$('.swipers').hover(function(){
    $(this).mouseOver();
}, function(){
    $(this).mouseOut();
});
$('.main-right').hover(function(){
    $(this).mouseOver();
}, function(){
    $(this).mouseOut();
});
// 获取 content-right-img类
var contentRightImgs = forms.getElementsByClassName({
    searchClass:  "content-right-img",
    node: document
});
// 获取 mCSB_container类的集合
var mCSBContainers = forms.getElementsByClassName({
    searchClass: "mCSB_container",
    node: document
});
// 获取 mian-left-li类的集合
var mianLeftLis = forms.getElementsByClassName({
    searchClass: "mian-left-li",
    node: document
});
// 绑定点击事件；
each(contentRightImgs, function(index, ele) {
    EventUtil.addEvent(ele, 'click', function() {
        $(ele).displayImage(ele);
    })
});
// 遍历绑定切换事件
each(mCSBContainers, function(index, ele) {
    EventUtil.addEvent(ele, 'click', function() {
        $(mianLeftLis).eq(index).siblings('li').removeClass('active');
        $(mianLeftLis).eq(index).addClass('active');
        $(ele).siblings('li').css("backgroundColor","transparent");
        $(ele).css("backgroundColor","rgba(176,176,176,0.8)")
    })
});


