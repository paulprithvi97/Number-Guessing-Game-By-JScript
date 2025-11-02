let name1 =document.getElementById("name1");
let startBtn = document.getElementById("startBtn");
let startBtn2 = document.getElementById("startBtn2");
let startBtn3 = document.getElementById("startBtn3");
let firstFrame = document.getElementById("firstFrame");
let f2WelcomeName = document.getElementById("f2WelcomeName");
let f3WelcomeName = document.getElementById("f3WelcomeName");
let f4WelcomeName = document.getElementById("f4WelcomeName");
let startBtn4 = document.getElementById("startBtn4");
let startBtn5 = document.getElementById("startBtn5");
let f4C = document.getElementById("f4C");
let f5C = document.getElementById("f5C");
let f5WelcomeName = document.getElementById("f5WelcomeName");
let numberInput1 = document.getElementById("numberInput1");
let numberInput2 = document.getElementById("numberInput2");
let f2C = document.getElementById("f2C");
let f3C = document.getElementById("f3C");
let frame2 = document.getElementById("frame2");
let frame1 = document.getElementById("frame1");
let name2 = document.getElementById("name2");
// let username = document.getElementById("name1");

startBtn.addEventListener("click", function() {
    console.log();
    if (name1.value === "" || name2.value === "")
     {
        let msg = "";
        if (name1.value === "") msg += "First name is empty.\n";
        if (name2.value === "") msg += "Second name is empty.";
        alert(msg.trim());
        return;
    }
    frame1.setAttribute("hidden", "true");
    f2C.removeAttribute("hidden", "true");
    frame1.setAttribute("hidden", "true");
    let username = name1.value;
    let username2 = name2.value;
    f2WelcomeName.innerText = `Welcome ${username} & ${username2} to the game!`;
});

startBtn2.addEventListener("click", function() {
    console.log();
    f2C.setAttribute("hidden", "true");
    f3C.removeAttribute("hidden", "true");
    let username = name1.value;
    f3WelcomeName.innerText = `First player ${username}, please give your integer value`;
    let numberInput1=numberInput1.value;

    
});

startBtn3.addEventListener("click", function() {
    console.log();
    f3C.setAttribute("hidden", "true");
    f4C.removeAttribute("hidden", "true");
    let username2 = name2.value;
    f4WelcomeName.innerText = `Second player ${username2}, please give your integer value`;
        let numberInput2=numberInput2.value;

});

startBtn4.addEventListener("click", function() {
    console.log();
    f4C.setAttribute("hidden", "true");
    f5C.removeAttribute("hidden", "true");
    let username = name1.value;
    let username2 = name2.value;
    if (numberInput1.value === numberInput2.value) {
        alert("Correct !! Player 2 Wins !!!");
        f5WelcomeName.innerText = `${username2} Wins !!! কেয়া কসমেটিক্স এর পক্ষ থেকে আকর্ষণীয় পুরষ্কার আপনার জন্য !!!`;
    } else {
        alert("Wrong Guess !! Player 1 Wins !!!");
                f5WelcomeName.innerText = `${username} Wins !!! কেয়া কসমেটিক্স এর পক্ষ থেকে আকর্ষণীয় পুরষ্কার আপনার জন্য !!!`;
    }
    // f5WelcomeName.innerText = `Results for ${username} & ${username2}`;
});
startBtn5.addEventListener("click", function() {
    console.log();
    location.reload();
});