"use strict";

$(function () {
  $('.arrow').click(function (e) {
    e.preventDefault();
    $('.down').toggleClass('d-none');
    $('.up').toggleClass('d-none');
  });
});
$(function () {
  $('.arrow-2').click(function (e) {
    e.preventDefault();
    $('.down-2').toggleClass('d-none');
    $('.up-2').toggleClass('d-none');
  });
});
$(function () {
  $('.arrow-3').click(function (e) {
    e.preventDefault();
    $('.down-3').toggleClass('d-none');
    $('.up-3').toggleClass('d-none');
  });
});
$(function () {
  $('.arrow-4').click(function (e) {
    e.preventDefault();
    $('.down-4').toggleClass('d-none');
    $('.up-4').toggleClass('d-none');
  });
});
var toastTrigger = document.getElementById('liveToastBtn');
var toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}
//# sourceMappingURL=all.js.map
