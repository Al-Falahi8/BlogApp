$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Click event for toggle menu
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })


});