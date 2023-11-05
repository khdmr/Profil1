function skill1(progress) {
    let index = 0;
    let bars = document.querySelectorAll(".skill-progress1 .bar");
    console.log(progress)

    if (progress == 1){
        document.getElementById("skill-frontend").innerHTML = "Basic";
    } else if (progress == 2){
        document.getElementById("skill-frontend").innerHTML = "Intermediate";
    } else if (progress == 3){
        document.getElementById("skill-frontend").innerHTML = "Expert";
    } else {
        document.getElementById("skill-frontend").innerHTML = "None";
    }

    bars.forEach(function(bar, powerSkill) {
        powerSkill = Math.round(progress / 1);
          if (index !== powerSkill) {
            bar.classList.add("active");
            index++;
          } else {
            bar.classList.remove("active");
          }

    });
}

function skill2(progress) {
    let index = 0;
    let bars = document.querySelectorAll(".skill-progress2 .bar");
    console.log(progress)

    if (progress == 1){
        document.getElementById("skill-backend").innerHTML = "Basic";
    } else if (progress == 2){
        document.getElementById("skill-backend").innerHTML = "Intermediate";
    } else if (progress == 3){
        document.getElementById("skill-backend").innerHTML = "Expert";
    } else {
        document.getElementById("skill-backend").innerHTML = "None";
    }

    bars.forEach(function(bar, powerSkill) {
        powerSkill = Math.round(progress / 1);
          if (index !== powerSkill) {
            bar.classList.add("active");
            index++;
          } else {
            bar.classList.remove("active");
          }

    });
}

let skillBars1 = document.querySelectorAll(".skill-progress1 .bar");
let skillBars2 = document.querySelectorAll(".skill-progress2 .bar");
let resume = document.getElementById("resume");

skillBars1.forEach(function(bar) {
    bar.addEventListener("click", function() {
      skill1(bar.getAttribute("data-progress"));
    });
});

skillBars2.forEach(function(bar) {
    bar.addEventListener("click", function() {
      skill2(bar.getAttribute("data-progress"));
    });
});

resume.addEventListener("click", function(){
    alert("Coming Soon")
})

skill1(1);
skill2(1);
  