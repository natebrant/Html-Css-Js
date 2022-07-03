var gamestate = 0;
var hp = 3;

$("#test").css("display", "none");
$("#submit").click(function() {
    if (gamestate === 0) {
        if (document.getElementById("fix").innerHTML === "&lt;head&gt;&lt;title&gt;Launch Codes&lt;/title&gt;&lt;/head&gt;") {
            console.log(document.getElementById("fix").innerHTML);
            gamestate += 1;
        } else {
            losthp();
            console.log(hp);
        }
    }
    if (gamestate === 1) {
        document.getElementById("question").innerHTML = "Next they want you to fix posion of the code with a new set, 39.9612 N, 82.9988 W ";
        document.getElementById("fix").innerHTML = "launch.pos(N=0,W=0)";
        gamestate += 1;
        hp += 1;
    }
    if (gamestate === 2) {
        if (document.getElementById("fix").innerHTML === "launch.pos(N=39.9612,W=82.9988)") {
            console.log(document.getElementById("fix").innerHTML);
            gamestate += 1;
        } else {
            losthp();
            console.log(hp);
        }
    }


    if (gamestate === 3) {
        document.getElementById("question").innerHTML = "Finally you need to fix the Button to run the class launch and change the name to Launch (no quotes).";
        document.getElementById("fix").innerHTML = "&lt;button class=fire&gt;&lt;button&gt;";
        gamestate += 1;
        hp += 1;
    }
    if (gamestate === 4) {
        if (document.getElementById("fix").innerHTML === "&lt;button class=launch&gt;Launch&lt;/button&gt;") {
            console.log(document.getElementById("fix").innerHTML);
            gamestate += 1;
        } else {
            losthp();
            console.log(hp);
        }
    }
        if (gamestate === 6) {
        gamestate += 1;
            hp+=1;
 
    }
    if (gamestate === 5) {
        $(".info").text("Now you have completed all they needed of you. ");
        document.getElementById("question").innerHTML = "You have Two choices you can chose from now.";
        document.getElementById("fix").innerHTML = "&lt;button class=launch&gt;Launch&lt;/button&gt;";
        $("#fix").attr("contenteditable", "false");
        $("#submit").css("display", "block");
        $("#test").css("display", "block");
        $("#submit").text("Give Code");
        gamestate += 1;
        hp += 1;
    }

    if (gamestate === 7) {
        $(".info").text("You give them all the code.");
        document.getElementById("question").innerHTML = "Now they have no need for you, they nuke ohio and put all the blame on you, then you get hunted and killed by the U.S.A. government.";
         $("#submit").css("display", "none");
        $("#test").css("display", "none");
        document.getElementById("fix").innerHTML = "";
        gamestate += 1;
        hp += 1;
    }


console.log(gamestate);


});




$("#test").click(function() {
    gamestate += 100;
    $("img").css("display", "block");
    $(".info").text("Ohio is now gone they congratulate you and then invite you into the Russian government...");
             $("#submit").css("display", "none");
        $("#test").css("display", "none");
    document.getElementById("question").innerHTML = "Game Complete For now...";
    

    console.log(gamestate);
});

function losthp() {

    $("body").css("background-color","red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).css("background-color","black");
   
    // $("body").css("background-color", "red");
    // sleep(2000);
    // $("body").css("background-color", "black");
    hp -= 1;
    if (hp === 2) {
        document.getElementById("health").src = "https://i.ibb.co/cC1Tbp6/2.png";
    }
    if (hp === 1) {
        document.getElementById("health").src = "https://i.ibb.co/wzBK1hj/1.png";
    }
    if (hp === 0) {
        $("#health").attr("src", "https://i0.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1&w=640");
        gamestate += 999;
        $(".info").text("You have failed them to many times");
        $("#question").text("They get rid of you, and then get a new intern.");
        $(".game").text("Game Over...");
        $("#submit").css("display", "none");
      
    }
      


}

