var APPLE_URL = "https://apps.apple.com/us/app/teckro/id6749154491";
var GOOGLE_URL = "https://play.google.com/store/apps/details?id=com.teckro.patient";
(function () {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) window.location.replace(APPLE_URL);
  else if (/android/i.test(ua)) window.location.replace(GOOGLE_URL);
})();
