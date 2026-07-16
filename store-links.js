// Store-link hrefs are set statically in index.html so they work without JS;
// this script only handles the desktop reveal.
document.getElementById("spinner").style.display = "none";
document.getElementById("message").textContent = "Available on iOS and Android.";
document.getElementById("store-links").classList.add("visible");
