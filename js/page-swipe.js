(function() {
    Zepto(function() {

        function imgSwipe(id) {
            var obj = null,
                oSwipe = $("#" + id),
                oImg = oSwipe.children().eq(0).find("img"),
                oLi = oSwipe.children().eq(1).find("li"),
                len = oImg.length,
                maxCount = len - 2,
                count = 1;
            obj = new Swipe(document.getElementById(id), {
                startSlide: 0,
                auto: 4000,
                speed: 300,
                callback: function(index, element) {
                    oLi.removeClass("active").eq(index).addClass("active");
                    if (count <= maxCount) {
                        if (index >= 1 && index <= maxCount) {
                            var currImg = oImg.eq(index + 1);
                            if (currImg.length > 0) {
                                src = currImg.attr("data-src");
                                currImg.attr("src", src)
                            }
                        }
                        count++
                    }
                }
            })
        }


        setTimeout(function() {
            imgSwipe("j_imgSwipe");
        }, 300);
    })
})();