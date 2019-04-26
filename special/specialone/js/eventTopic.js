//  获取nav_d 类
var nav_ds = forms.getElementsByClassName({
    searchClass:'nav_d',
    node: document
});
// 获取 tacit-title 类
var lis = forms.getElementsByClassName({
    searchClass: 'lis',
    node: document
});
var tacitLinks = forms.getElementsByClassName({
    searchClass: 'tacit-link',
    node: document
});
// 遍历 品牌栏目、自主活动、列表、重点推介
each(nav_ds,function(index, ele){
    EventUtil.addEvent(ele,'click',function(){
        var scroll_offset = $(".part").eq(index).offset(); //得到pos这个div层的offset，包含两个值，top和left
        $(window).scrollTop(scroll_offset.top);
    });
});
// 点击区域
each(lis,function(index, ele) {
   EventUtil.addEvent(ele, 'click', function(){
       $('.v-left-li').eq(index).siblings('li').removeClass('active');
       $('.v-left-li').eq(index).addClass('active');
   })
});
//阻止向上冒泡
each(tacitLinks, function(ele) {
    EventUtil.addEvent(ele, 'click', function() {
        EventUtil.stopPropagation();
    });
});
//轮播图
var swiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    interval: 5000,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});