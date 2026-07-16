// Store URLs are also set as static <a href> in index.html (no-JS path) —
// keep both in sync.
const APPLE_URL = "https://apps.apple.com/us/app/teckro/id6749154491";
const GOOGLE_URL = "https://play.google.com/store/apps/details?id=com.teckro.patient";

const ua = navigator.userAgent;
// iPadOS Safari reports a Mac UA, so also treat a touch-capable "MacIntel" as iOS.
const isIOS = /iPad|iPhone|iPod/.test(ua) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

if (isIOS) location.replace(APPLE_URL);
else if (/android/i.test(ua)) location.replace(GOOGLE_URL);
