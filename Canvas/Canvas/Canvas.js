(function(){

    var context = document.getElementById('canv').getContext('2d');

// God //
        context.beginPath();
        context.arc(50, 30, 20, 0, 2 * Math.PI);
        context.stroke();

        context.moveTo(50,25);
        context.lineTo(50,30);
        context.stroke();

        context.moveTo(55,25);
        context.lineTo(55,30);
        context.stroke();

        context.moveTo(10,56);
        context.lineTo(90,56);
        context.stroke();

        context.moveTo(45,90);
        context.lineTo(15,120);
        context.stroke();

        context.moveTo(45,90);
        context.lineTo(75,120);
        context.stroke();

//stickwoman//

        context.beginPath();
        context.arc(190, 30, 20, 0, 2 * Math.PI);
        context.stroke();


        context.beginPath();
        context.arc(190, 40, 5, 0, 1 * Math.PI);
        context.stroke();


        context.beginPath();
        context.arc(235, 41, 8, 0, 2 * Math.PI);
        context.stroke();

        context.moveTo(223,52);
        context.lineTo(245,52);
        context.stroke();

        context.moveTo(235,50);
        context.lineTo(235,72);
        context.stroke();

//eyes//
        context.moveTo(180,22);
        context.lineTo(180,28);
        context.stroke();

        context.moveTo(196,22);
        context.lineTo(196,28);
        context.stroke();



        context.moveTo(55,25);
        context.lineTo(55,30);
        context.stroke();


        context.moveTo(150,56);
        context.lineTo(238,56);
        context.stroke();

        context.moveTo(190,50);
        context.lineTo(185,90);
        context.stroke();

        //Stickman´s torus//

        context.moveTo(150,30);
        context.lineTo(150,70);
        context.stroke();


        context.moveTo(185,90);
        context.lineTo(155,120);
        context.stroke();

        context.moveTo(185,90);
        context.lineTo(205,120);
        context.stroke();


})();
