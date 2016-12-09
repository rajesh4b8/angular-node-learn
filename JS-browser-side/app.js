

// using DOM API

// plain-js

// document.addEventListener('DOMContentLoaded', function () { 

//     let box = document.querySelector('.jumbotron');
//     let hideBtn = document.querySelector('.btn-danger');
//     let showBtn = document.querySelector('.btn-primary');


//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     });

//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     });

// });

//------------------------------------

// using jquery

$(document).ready(function() { 

    let $box = $('.jumbotron');
    $('.btn-danger').click(function() { 
        $box.hide();
    });
    $('.btn-primary').click(function() { 
        $box.show();
    });

    //---------------------------------


    var $userField = $('#userField');
    var $userSpan = $('#userSpan');
    var $userBtn = $('#userBtn');

    var vm = {
        user: ''
    };

    $userBtn.click(function() {
        vm.user = 'Nag';
        applyBindings();
     });    

    $('#userField').on('keydown',function() { 
        vm.user = $(this).val();
        applyBindings();
    });

    function applyBindings() {
        $userField.val(vm.user);
        $userSpan.text(vm.user);
     }


});