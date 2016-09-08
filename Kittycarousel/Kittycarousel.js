(function() {
    var kittens = document.getElementsByClassName("image");
    var buttons = document.getElementsByClassName("button");
    var i = 0;
    var j = -1;
    var k = -2;

    function moveIt() {

        kittens[i].classList.add("current");
        buttons[i].classList.add("button-current");

        if (j >= 0) {
            kittens[j].classList.add("finished");
            kittens[j].classList.remove("current");
            buttons[j].classList.remove("button-current");
        }
        if (k >= 0) {
            kittens[k].classList.remove("finished");
        }
        i += 1;
        j += 1;
        k += 1;
        if (i > 3) {
            i = 0;
        }
        if (j > 3) {
            j = 0;
        }
        if (k > 3) {
            k = 0;
        }
        timer();
    }


    function timer() {
        setTimeout(moveIt, 5000);
    }


    moveIt();
})();
