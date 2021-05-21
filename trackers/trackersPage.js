var goodHabits = [ {name: 'Meditating', conDays:7, maxDays:31, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
                {name: 'Reading', conDays:24, maxDays:26, date:new Date(), thisMonth:19, lastMonth:7, thisYear:41, lastYear:0, total:41 },
                {name: 'Working out', conDays:13, maxDays:5, date:new Date(), thisMonth:13, lastMonth:9, thisYear:55, lastYear:0, total:55 } ];
var badHabits = [ {name: 'Smoking', conDays:109, maxDays:109, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
                {name: 'Biting your nails', conDays:51, maxDays:77, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
                {name: 'Looking at a screen before bed', conDays:2, maxDays:11, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
                {name: 'Slouching', conDays:6, maxDays:8, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 } ];



function validateMoodForm() {

    var q1a1 = document.getElementById("q1a1");
    var q1a2 = document.getElementById("q1a2");
    var q1a3 = document.getElementById("q1a3");
    var q1a4 = document.getElementById("q1a4");
    var boolean1 = q1a1.checked || q1a2.checked || q1a3.checked || q1a4.checked;

    var q2a1 = document.getElementById("q2a1");
    var q2a2 = document.getElementById("q2a2");
    var q2a3 = document.getElementById("q2a3");
    var q2a4 = document.getElementById("q2a4");
    var boolean2 = q2a1.checked || q2a2.checked || q2a3.checked || q2a4.checked;

    var q3a1 = document.getElementById("q3a1");
    var q3a2 = document.getElementById("q3a2");
    var q3a3 = document.getElementById("q3a3");
    var q3a4 = document.getElementById("q3a4");
    var boolean3 = q3a1.checked || q3a2.checked || q3a3.checked || q3a4.checked;

    var q4a1 = document.getElementById("q4a1");
    var q4a2 = document.getElementById("q4a2");
    var q4a3 = document.getElementById("q4a3");
    var q4a4 = document.getElementById("q4a4");
    var boolean4 = q4a1.checked || q4a2.checked || q4a3.checked || q4a4.checked;

    var q5a1 = document.getElementById("q5a1");
    var q5a2 = document.getElementById("q5a2");
    var q5a3 = document.getElementById("q5a3");
    var q5a4 = document.getElementById("q5a4");
    var boolean5 = q5a1.checked || q5a2.checked || q5a3.checked || q5a4.checked;

    var q6a1 = document.getElementById("q6a1");
    var q6a2 = document.getElementById("q6a2");
    var q6a3 = document.getElementById("q6a3");
    var q6a4 = document.getElementById("q6a4");
    var boolean6 = q6a1.checked || q6a2.checked || q6a3.checked || q6a4.checked;

    var q7a1 = document.getElementById("q7a1");
    var q7a2 = document.getElementById("q7a2");
    var q7a3 = document.getElementById("q7a3");
    var q7a4 = document.getElementById("q7a4");
    var boolean7 = q7a1.checked || q7a2.checked || q7a3.checked || q7a4.checked;

    console.log(boolean1);
    console.log(boolean2);
    console.log(boolean3);
    console.log(boolean4);
    console.log(boolean5);
    console.log(boolean6);
    console.log(boolean7);

    if (boolean1 && boolean2 && boolean3 && boolean4 && boolean5 && boolean6 && boolean7) {
        processMoodForm();
    }
    else {
        alert("You didn't complete the whole form!");
    }

}

function processMoodForm() {
    // ...
}

function loadHabits() {

    document.getElementById("appendHH").innerHTML = "";
    document.getElementById("appendUH").innerHTML = "";

    for (i=0; i<goodHabits.length; i++) {
        var bigDiv = document.createElement("div");
        bigDiv.className = "row";
        bigDiv.style.marginLeft = "2%";
        bigDiv.id = "div" + goodHabits[i]["name"];

        var medDiv = document.createElement("div");
        bigDiv.className = "form-check form-switch";

        var input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        input.id = goodHabits[i]["name"];

        var label = document.createElement("label");
        label.className = "form-check-label";
        label.textContent = goodHabits[i]["name"];

        medDiv.appendChild(input);
        medDiv.appendChild(label);
        bigDiv.appendChild(medDiv);
        document.getElementById("appendHH").appendChild(bigDiv);
    }
    for (i=0; i<badHabits.length; i++) {
        var bigDiv = document.createElement("div");
        bigDiv.className = "row";
        bigDiv.style.marginLeft = "2%";
        bigDiv.id = "div" + badHabits[i]["name"];

        var medDiv = document.createElement("div");
        bigDiv.className = "form-check form-switch";

        var input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        input.id = badHabits[i]["name"];

        var label = document.createElement("label");
        label.className = "form-check-label";
        label.textContent = badHabits[i]["name"];

        medDiv.appendChild(input);
        medDiv.appendChild(label);
        bigDiv.appendChild(medDiv);
        document.getElementById("appendUH").appendChild(bigDiv);
    }
}

function validateAddHabitForm() {
    var habit = document.getElementById("habitName").value;
    var radio1 = document.getElementById("healthyHabitCheck");
    var radio2 = document.getElementById("unhealthyHabitCheck");
    if (habit=="" || (radio1.checked==false && radio2.checked==false)) {
        alert("You didn't complete the whole form!");
    }
    else {
        addHabit(habit, radio1);
    }
}

function addHabit(habit, radio1) {

    var dict = {name: habit, conDays:0, maxDays:0, date:new Date(), thisMonth:0, lastMonth:0, thisYear:0, lastYear:0, total:0 };

    if (radio1.checked) {
        goodHabits.push(dict);
    }
    else {
        badHabits.push(dict);
    }

    loadHabits();
}

function displayRemoveHabits() {

    document.getElementById("removeAppend1").innerHTML = "";
    document.getElementById("removeAppend2").innerHTML = "";

    for (i=0; i<goodHabits.length; i++) {
        var bigDiv = document.createElement("div");
        bigDiv.className = "row";
        bigDiv.style.marginLeft = "2%";

        var medDiv = document.createElement("div");
        bigDiv.className = "form-check form-switch";

        var input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        input.id = "remove" + goodHabits[i]["name"];
        console.log(input.id)

        var label = document.createElement("label");
        label.className = "form-check-label";
        label.textContent = goodHabits[i]["name"];

        medDiv.appendChild(input);
        medDiv.appendChild(label);
        bigDiv.appendChild(medDiv);
        document.getElementById("removeAppend1").appendChild(bigDiv);
    }

    for (i=0; i<badHabits.length; i++) {
        var bigDiv = document.createElement("div");
        bigDiv.className = "row";
        bigDiv.style.marginLeft = "2%";

        var medDiv = document.createElement("div");
        bigDiv.className = "form-check form-switch";

        var input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        input.id = "remove" + badHabits[i]["name"];
        console.log(input.id)

        var label = document.createElement("label");
        label.className = "form-check-label";
        label.textContent = badHabits[i]["name"];

        medDiv.appendChild(input);
        medDiv.appendChild(label);
        bigDiv.appendChild(medDiv);
        document.getElementById("removeAppend2").appendChild(bigDiv);
    }

}

function removeHabits() {

    for (i=0; i<goodHabits.length; i++) {
        var checkbox = document.getElementById("remove" + goodHabits[i]["name"]);
        if (checkbox.checked == true) {
            document.getElementById("div" + goodHabits[i]["name"]).style.display = "none";
        }
    }
    for (i=0; i<badHabits.length; i++) {
        var checkbox = document.getElementById("remove" + badHabits[i]["name"]);
        if (checkbox.checked == true) {
            document.getElementById("div" + badHabits[i]["name"]).style.display = "none";
        }
    }

}







// ng-init = "goodHabits = [ {name: 'Meditating', conDays:7, maxDays:31, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
//                             {name: 'Reading', conDays:24, maxDays:26, date:new Date(), thisMonth:19, lastMonth:7, thisYear:41, lastYear:0, total:41 },
//                             {name: 'Working out', conDays:13, maxDays:5, date:new Date(), thisMonth:13, lastMonth:9, thisYear:55, lastYear:0, total:55 } ];
//            badHabits = [ {name: 'Smoking', conDays:109, maxDays:109, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
//                             {name: 'Biting your nails', conDays:51, maxDays:77, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
//                             {name: 'Looking at a screen before bed', conDays:2, maxDays:11, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 },
//                             {name: 'Slouching', conDays:6, maxDays:8, date:new Date(), thisMonth:9, lastMonth:21, thisYear:27, lastYear:3, total:56 } ]"

// ------------ ATTRIBUTES OF EACH HABIT ------------

// conDays = consecutive days
    // for good habits: number of consecutive days doing that habit
    // for bad habits: number os consecutive days without doing that habit

// maxDays = maximum number of days
    // for good habits: maximum number of consecutive days doing that habit (ever)
    // for bad habits: maximum number os consecutive days without doing that habit (ever)

// date = date of the last update
    // we're gonna use Date objects
    // var d = new Date(year,month,day)
    // parameters are int values
    // we can compare Dates using the >, >=, <, <= and == operators
    // new Date() without passing any parameters gives us the current date

// thisMonth
    // for good habits: number of days the habit was done this month
    // for bad habits: number of days the habit was avoided this month

// lastMonth
    // for good habits: number of days the habit was done last month
    // for bad habits: number of days the habit was avoided last month

// thisYear
    // for good habits: number of days the habit was done this year
    // for bad habits: number of days the habit was avoided this year

// lastYear
    // for good habits: number of days the habit was done last year
    // for bad habits: number of days the habit was avoided last year

// total
    // for good habits: total number of days in which the habit was done (ever)
    // for bad habits: total number of days in which the habit was avoided (ever)

// --------------------------------------------------

// -------------- DATA FOR EACH HABIT ---------------

// OVERVIEW SECTION:
    // contDays
    // maxDays
    // score (percentage): percentage of days in current month that were successful
        // successful means doing the habit if it's good or avoiding it if it's bad
        // we could try to have a little load cycle here
    // month (percentage): how much more successful is this month compared to last month?
    // year (percentage): how much more successful is this year compared to last year?
    // total: total number of successful days (ever)

// GRAPHS
    // History graph:
        // it's basically an histogram with the number of successful days for each of the last 6 months
    // Calendar:
        // a small calendar where all the successful days are marked

// --------------------------------------------------