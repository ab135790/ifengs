// 创建瓯越文化DOM节点；
$.ouyueculture = ({
    _init: function(arr) {
        this.arr = arr.filter(function(ele) {
            return ele.id === '瓯越文化'
        });
        this.arr.reverse();
        $.ouyueculture._createElements(this.arr);
    },
    _createElements: function(arr) {
        var left_banner = '',recent = '', rightUl_R = '', len = arr.length, slides =[], slides_lis = [], num = 0, retrospect = '', diversity = '', arrs = len;
        left_banner = `<a href="${arr[1].linkUrl}"><img src="${arr[1].imgUrl}" alt="${arr[1].title}"></a>`;
        for (var i = 0; i < len; i++) {
            if (i < 1) {
                recent = `<div class="top-content-txt">
                        <h2>${arr[i].title}</h2>
                        <p>${arr[i].title}</p>
                    </div>
                    <div class="top-content-img"><img src="${arr[i].imgUrl}" alt=""></div>`
            } else if (i >= 1 && i < 5 && i < len) {
                rightUl_R += `<li>
                    <a href="${arr[i].linkUrl}" title="${arr[i].title}" target="_blank">${arr[i].title}</a>
                    <p>${arr[i].boxTxt}</p>
                </li>`;
                diversity +=`<li>
                    <a href="${arr[i].linkUrl}" title="${arr[i].title}">
                        <img src="${arr[i].imgUrl}" alt="${arr[i].title}">
                        <p>${arr[i].title}</p>
                    </a>
                </li>`;
            }
            // 创建专题回顾节点
            retrospect +=`<li class="inner">
                    <a href="${arr[i].linkUrl}">
                        <img src="${arr[i].imgUrl}" alt="${arr[i].title}"/>
                    </a>
                    <div class="num">第 <p>${arrs--}</p>期</div>
                    <div class="textbg"></div>
                    <a href="${arr[i].linkUrl}" class="inner-title" title="${arr[i].title}">${arr[i].title}</a>
                    <p class="public-p-lines lines">${arr[i].boxTxt}<a href="${arr[i].linkUrl}" class="inner-detail">[详细]</a></p>
                </li>`;
            // 以6个对象分为一个数组
            if (i % 6 === 0 && i > 0) {
                slides.push(slides_lis);
                slides_lis = [];
                slides_lis.push(arr[i]);
            }else {
                slides_lis.push(arr[i]);
            }
        }
        slides.push(slides_lis);
        //  创建视频集锦DOM节点
        var slidesCategory = '', CategoryDetail = '';
        arrs = len;
        for (var i = 0; i < slides.length; i++) {
            slidesCategory = `<li><ul class="slides-lis"></ul></li>`;
            for (var j = 0; j < slides[i].length; j++) {
                CategoryDetail +=`<li>
                                <a href="${slides[i][j].linkUrl}" class="slides-lis-title">[第<span>${arrs--}</span>期]<span>木板年画</span></a>
                                <a href="${slides[i][j].linkUrl}"><img src="${slides[i][j].imgUrl}" alt="${slides[i][j].title}"/></a>
                            </li>`
            }
            $('#slides').append(slidesCategory);
            $('.slides-lis').eq(i).html(CategoryDetail);
            CategoryDetail = '';
            slidesCategory = '';
        }
        $('#rights-content').html(retrospect);
        $('#front-page-left').html(left_banner);
        $('#right-ul').html(rightUl_R);
        $('#top-content').html(recent);
        $('#diversity-slides').html(diversity);
    }
});