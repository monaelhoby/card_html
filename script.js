$(function(){

    $('#labelTitle').html($('#customRange3').val())
    $('.btn-info span').html($('#customRange3').val() * $('.selectpicker').val())
    $('.btn-warning span').html($('#customRange3').val() * .1)

    $('#customRange3').click(function(){
        // console.log($('#customRange3').val())
        $('#labelTitle').html($('#customRange3').val())
        $('.btn-info span').html($('#customRange3').val() * $('.selectpicker').val())
        $('.btn-warning span').html($('#customRange3').val() * .1)
    })
    $('.selectpicker').click(function(){
        $('.btn-info span').html($('#customRange3').val() * $('.selectpicker').val())
    })

    let step = 10;

    $('.formLabelMinus').click(function(){
        $('#customRange3').val($('#customRange3').val() - step)
    })

    $('.formLabelPlus').click(function(){
        $('#customRange3').val(parseInt($('#customRange3').val()) + step)
    })

    var loopInc, loopDec;

    $('.formLabelMinus').on('mousedown',function () {
        loopInc = setInterval(() => {
            $('#customRange3').val($('#customRange3').val() - step)
            $('#labelTitle').html($('#customRange3').val())
            $('.btn-info span').html($('#customRange3').val() * $('.selectpicker').val())
            $('.btn-warning span').html($('#customRange3').val() * .1)
        }, 500);
    });

    $('.formLabelMinus').on('mouseup',function () {
        clearInterval(loopInc);
    });

    $('.formLabelPlus').on('mousedown',function () {
        loopDec = setInterval((_this) => {
            $('#customRange3').val(parseInt($('#customRange3').val()) + step)
            $('#labelTitle').html($('#customRange3').val())
            $('.btn-info span').html($('#customRange3').val() * $('.selectpicker').val())
            $('.btn-warning span').html($('#customRange3').val() * .1)
        }, 500);
    });

    $('.formLabelPlus').on('mouseup',function () {
        clearInterval(loopDec);
    });

    
})