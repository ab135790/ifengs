var ouCaiFestival = new Swiper('.swiper-container', {
    autoplay: true, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    disableOnInteraction:  false,
    watchOverflow: true,
    loop: true,
    lazy: true,
    clickable: true,
    slidesPerView: 4,
    spaceBetween: 30,
    interval: 5000
});
// 获取reviews类的集合
var reviews = forms.getElementsByClassName({
    searchClass: 'review',
    node: document
});
// 获取bottom-text-title 类的集合
var bottomText = forms.getElementsByClassName({
    searchClass: 'bottom-text',
    node: document
});
var part5 = new Swiper('.part5-container', {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    interval: 5000,
    observer: true,
    observeParents: true,
    observeSlideChildren:true,
    autoplayStart: true
});
// 绑定review点击切换事件
each(reviews, function(index, ele) {
    EventUtil.addEvent(ele, 'click', function() {
        $('.review').eq(index).siblings('li').removeClass('p1-nav-active');
        $('.review').eq(index).addClass('p1-nav-active');
        $('.box').eq(index).siblings('div').removeClass('active');
        $('.box').eq(index).addClass('active');
    });
});
// 绑定bottomTextTitles 点击切换事件
each(bottomText, function(index, ele) {
    EventUtil.addEvent(ele, 'click', function() {
        $('.part2-content-box-li').eq(index).siblings('li').removeClass('active');
        $('.part2-content-box-li').eq(index).addClass('active');
    });
});