let show = function () {
    console.log('Anonymous function');
};
show();
// * anonymous function *
setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);
(
    function() {
    console.log('IIFE');
})
();
