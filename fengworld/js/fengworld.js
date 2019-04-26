//  渲染畅游温州的节点, 以及道听途说节点；
$.swim = ({
    _init: function(arr) {
        this.arr = arr.filter(function(ele) {
            return ele.id === '凤游天下' && ele.type === 'swim'
        });
        this.arr.reverse();
        $.swim._createElements(this.arr);
    },
    _createElements: function(newArr) {
        var swimLeft = '', hearsay = '', swimRight = '', len = newArr.length;
        for(var i = 0; i < len; i++) {
            if (i < 6) {
                swimLeft +=`<li class="swiper-slide">
                    <a href="${newArr[i].linkUrl}" target="_blank" title="${newArr[i].title}" class="slide-link"><img src="${newArr[i].imgUrl}" alt="${newArr[i].title}"></a>
                    <p class="slide-txt">${newArr[i].title}</p>
                </li>`;
                hearsay += `<li><a href="${newArr[i].linkUrl}" target="_blank" title="${newArr[i].title}"><img src="${newArr[i].imgUrl}" alt="${newArr[i].title}"></a></li>`;
            } else if (i >= 6) {
                swimRight +=`<li class="right-list">
                <div class="h2"><a href="${newArr[i].linkUrl}" title="${newArr[i].linkUrl}">${newArr[i].title}</a></div>
                <div class="box-txt">
                    <p>${newArr[i].boxTxt}</p><a href="${newArr[i].linkUrl}" title="${newArr[i].boxTxt}" target="_blank">[详细]</a>
                </div></li>`;
            }
        }
        $('#slides-left').html(swimLeft);
        $('#main-content-right').html(swimRight);
        $('#hearsay-main').html(hearsay);
    }
});
//  渲染特产美食的节点
$.cate = ({
    _init: function(arr) {
        this.cate = arr.filter(function(ele) {
            return ele.id === '凤游天下' && ele.type === 'cate';
        });
        this.product = arr.filter(function(ele) {
            return ele.id === '凤游天下' && ele.type === 'product';
        });
        this.cate.reverse();
        this.product.reverse();
        this._createElements(this.cate, this.product);
    },
    _createElements: function(cate, product) {
        var lis = '',lis2 = '';
        for (var i = 0; i < 3; i++) {
            lis +=`<li>
                    <img src="/pages/fengworld/img/qianbiao1.png" alt="">
                    <a href="${cate[i].linkUrl}" target="_blank" title="${cate[i].title}" class="public-p-single">${cate[i].title}</a>
                </li>`;
            lis2 +=`<li>
                    <img src="/pages/fengworld/img/qianbiao1.png" alt="">
                    <a href="${product[i].linkUrl}" target="_blank" title="${product[i].title}" class="public-p-single">${product[i].title}</a>
                </li>`;
        }
        $('#bottom-title-left').html(lis);
        $('#bottom-title-right').html(lis2);
        lis = '';
        lis += `<li>
                <a href="${cate[0].linkUrl}" target="_blank" title="${cate[0].title}">
                    <img src="${cate[0].imgUrl}" alt="${cate[0].title}"/>
                </a>
            </li>
            <li>
                <a href="${product[0].linkUrl}" target="_blank" title="${product[0].title}">
                    <img src="${product[0].imgUrl}" alt="${product[0].title}"/>
                </a>
            </li>`
        $('#content-bottom-center').html(lis);
    }
});
