/**
 * Created by us-web on 2014/9/25.
 */
$(function(){

    var oActionWrap = $('#js-buy-action');

    var oSubBtn = oActionWrap.find('#js-sub');
    var oNumText = oActionWrap.find('#js-num');
    var oAddBtn = oActionWrap.find('#js-add');

    function validateGoodsNum(num){
        if(num < 1){
            num = 1;
            oSubBtn.addClass('min-num');
        } else {
            oSubBtn.removeClass('min-num');
        }
        return num;
    }

    /*oActionWrap.delegate('span', 'click tap', function(){
        alert(oSubBtn.outerWidth());
        var currentNum = oNumText.val();
        if($(this).hasClass('action-sub')){
            oNumText.val(validateGoodsNum(--currentNum));
        } else if($(this).hasClass('action-add')){
            oNumText.val(validateGoodsNum(++currentNum));
        }
    });*/


    oSubBtn.on('tap', function(){
        var currentNum = oNumText.val();
        oNumText.val(validateGoodsNum(--currentNum));
    });

    oAddBtn.on('tap', function(){
        var currentNum = oNumText.val();
        oNumText.val(validateGoodsNum(++currentNum));
    });
});