$(document).ready(function() {
    var times = null;
    $(window).scroll(function() {
        var winHeight = $(this).height();
        var winScroll = $(this).scrollTop();
        if(times) clearInterval(times);
        times = setTimeout(function() {
            if (winScroll >= winHeight) {
                $('.tops').addClass('activeTops');
            } else if (winScroll < winHeight){
                $('.tops').removeClass('activeTops');
            }
        }, 200);

    });
    var backtops = $.fn.extend({
        createEle: function() {
            if (!uls) {
                var uls = document.createElement('ul');
                var style = document.createElement('link');
                var createElements = '';
                var topsData = [
                    {
                        linkUrl: 'http://zj.ifeng.com/wenzhou.shtml',
                        classNames: 'iconiconfonthome0',
                        names: '凤凰浙江'
                    },
                    {
                        linkUrl: '',
                        classNames: 'iconbiaodiandidian_',
                        names: '站点介绍'
                    },
                    {
                        linkUrl: '',
                        classNames: 'iconweixin',
                        names: '凤凰浙江'
                    },
                    {
                        linkUrl: 'https://weibo.com/7075520649/profile?topnav=1&wvr=6',
                        classNames: 'iconweibo',
                        names: '凤凰浙江'
                    },
                    {
                        linkUrl: 'javascript:;',
                        classNames: 'iconicon--',
                        names: '回到顶部'
                    }
                ];
                // 创建并添加图标样式、链接
                style.href = 'http://at.alicdn.com/t/font_1115325_ndc9l7gv50m.css';
                style.rel = 'stylesheet';
                style.type = 'text/css';
                document.getElementsByTagName('HEAD').item(0).appendChild(style);
                // 给uls 添加class类名；
                uls.setAttribute("class", "tops");
                for (var i = 0; i < topsData.length; i++) {
                    createElements += `<li><a href="${topsData[i].linkUrl}" target="_blank" class="linksIcon"><span class="iconfont ${topsData[i].classNames}"></span><span class="txt">${topsData[i].names}</span></a></li>`;
                }
                uls.innerHTML = createElements;
                document.body.appendChild(uls);
            }
            // 点击回到顶部
            $('.tops li:last-child').click(function (e) {
                var currentPosition,times;
                var speed = 50;
                e.preventDefault();
                times = setInterval(function(){
                    currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                    currentPosition -= speed; //speed变量
                    if(currentPosition>0){
                        window.scrollTo(0,currentPosition);
                    }else{
                        window.scrollTo(0,0);
                        clearInterval(times);
                    }
                }, 1);
            });
        }
    });
    backtops.createEle();
});
