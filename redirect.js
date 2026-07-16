var APPLE_URL = "https://apps.apple.com/us/app/teckro/id6749154491";
var GOOGLE_URL = "https://play.google.com/store/apps/details?id=com.teckro.patient";
(function () {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  // iPadOS Safari reports a Mac UA, so also treat a touch-capable "MacIntel" as iOS.
  var isIOS = (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS) window.location.replace(APPLE_URL);
  else if (/android/i.test(ua)) window.location.replace(GOOGLE_URL);
})();
