'use strict';

setTimeout (function askName(){
    var name = prompt('Please enter your name');
    var wel = name.toUpperCase();
    var askName = document.getElementById('askName')

    if (wel.length > 0 & wel != "null") {
        var message = ' Welcome ' + wel + '!';
        askName.innerText = message;
    } else if (name != "null") {
        var message = ' Fine don\'t tell me';
        askName.innerText = message;
    } else {
        var message = ' Hitting cancel I see.';
        askName.innerText = message;
    }

},1000
);
setTimeout (function questionOne() {
    var que = prompt('Was I born in Johnstown, Pa? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionOne = document.getElementById('questionOne');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Correct I was Born there"
        // console.log('Question one correct!');
        var pop = alert('Correct')
        questionOne.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Sorry that is incorrect.";
        questionOne.innerText = message;
    }
},1000
);
setTimeout (function questionTwo() {
    var que = prompt('Was i Raised in Johnstown, PA? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionTwo = document.getElementById('questionTwo');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Sorry that is incorrect"

        questionTwo.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Correct, I was raised in Cleveland Ohio.";
        // console.log('Question two correct!');
        var pop = alert('Correct!');
        questionTwo.innerText = message;
    }



},1000
);
setTimeout (function questionThree() {
    var que = prompt('Did I study Criminal Justice at Cleveland State? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionThree = document.getElementById('questionThree');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Sorry that is incorrect"

        questionThree.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Correct, I studied Computer Science at Cleveland State.";
        // console.log('Question three correct!');
        var pop = alert('Correct!');
        questionThree.innerText = message;
    }



},1000
);
setTimeout (function questionFour() {
    var que = prompt('Do I work IT in the US ARMY? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionFour = document.getElementById('questionFour');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Yes, I certainly do";
        // console.log('Question Four correct!');
        var pop = alert('Correct!');
        questionFour.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Sorry for both of us that is what i do";
        questionFour.innerText = message;
    }



},1000
);

setTimeout (function questionFive() {
    var que = prompt('Am I CCNA cerified? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionFive = document.getElementById('questionFive');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Sorry that is incorrect, I am Sec+ certified though";

        questionFive.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Correct, I am Sec+ certified.";
        // console.log('Question Five correct!');
        var pop = alert('Correct!');
        questionFive.innerText = message;
    }
},1000);