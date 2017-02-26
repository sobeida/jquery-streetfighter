$(document).ready(function () {

    //$(".ryu-action").hide(); (this line means hide all 4 divs)
    // $(".ryu-still").show();

    //Ryu ready position
    $(".ryu").mouseenter(function () {
        $(".ryu-action").hide();
        $(".ryu-ready").show();
    })

    // Still position
    .mouseleave(function () {
        $(".ryu-action").hide();
        $(".ryu-still").show();

    })

    //Ryu throwing Hadouken & scream
    .mousedown(function () {
        playHadouken();
        $(".ryu-action").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show().animate({
                "left": "300px"
            },
            500,
            function () {
                $(this).hide();
                $(this).css("left", "-212px");
            });
    })

    .mouseup(function () {
        $(".ryu-action").hide();
        $(".ryu-ready").show();
    });

    /*on key press
          —> keydown —> display ryu-cool (and hide everythying else)*/
    $(document).keydown(function (key) {

        //keyCode == 88 is the X key
        if (key.keyCode == 88) {
            $(".ryu-action").hide(); //(this line means hide all 4 divs)
            $(".ryu-cool").show();
            playCool()
        }
    });

    /* —> keyup —> display the default state --> ryu-still (and hide everythying else)*/
    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $(".ryu-action").hide(); //(this line means hide all 4 divs)
            $(".ryu-still").show();
            $("#cool")[0].pause();
        }
    });
});

/*how to play a sound */
var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $("#hadouken-sound")[0].volume = 0.5; //set the volume (0 => 0% and 1 => 100%; so 0.5 is 50%)
        $("#hadouken-sound")[0].load(); //load the sound into the memory
        $("#hadouken-sound")[0].play(); //play it
    }
}

var coolSound = false;

function playCool() {
    coolSound = !coolSound;
    if (coolSound) {
        // $('#cool')[0].load()
        $("#cool")[0].play();
    }
}
