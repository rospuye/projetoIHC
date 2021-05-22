function validateWellnessCheck() {

    var q1a1 = document.getElementById("q1a1");
    var q1a2 = document.getElementById("q1a2");
    var q1a3 = document.getElementById("q1a3");
    var q1a4 = document.getElementById("q1a4");
    var q1a5 = document.getElementById("q1a5");
    var boolean1 = q1a1.checked || q1a2.checked || q1a3.checked || q1a4.checked || q1a5.checked;

    var q2a1 = document.getElementById("q2a1");
    var q2a2 = document.getElementById("q2a2");
    var q2a3 = document.getElementById("q2a3");
    var q2a4 = document.getElementById("q2a4");
    var boolean2 = q2a1.checked || q2a2.checked || q2a3.checked || q2a4.checked;

    var q3a1 = document.getElementById("q3a1");
    var q3a2 = document.getElementById("q3a2");
    var boolean3 = q3a1.checked || q3a2.checked;

    console.log(boolean1);
    console.log(boolean2);
    console.log(boolean3);
    

    if (boolean1 && boolean2 && boolean3) {
        processMoodForm();
    }
    else {
        alert("You didn't complete the whole questionnaire!");
    }

}