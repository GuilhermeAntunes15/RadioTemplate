var turntable = $(".player");
var tooltip = $(".tooltip");
var playBtn = $("button.play");
var channel = $("#channel");

playBtn.on("click", function () {
    // Bye bye tooltip, we get it
    tooltip.remove();
    // Check classes and update
    // Play or pause track
    if (!turntable.hasClass("is-playing")) {
        turntable.removeClass("is-stopped").addClass("is-playing");
        setTimeout(function () {}, 500);
    } else {
        turntable.removeClass("is-playing").addClass("is-stopped");
    }
});
var elem = document.querySelector('input[type="range"]');

var rangeValue = function () {
    var newValue = elem.value;

    var target = document.querySelector(".value");
    target.innerHTML = newValue;
};

elem.addEventListener("input", rangeValue);

channel.on("change", function () {
    if (turntable.hasClass("is-playing")) {
        turntable.removeClass("is-playing").addClass("is-stopped");
    }
});
