whatCanIDrink = function(age) {
    /*
    var age = Number();
    */
    if age <= 0 {
        return "I doubt that. Too young to have entered data!"
    }

    if age > 1 && age <=3 {
        return "Incredible that you have mastered numbers and how to enter them on a computer. May I recommend: breast milk!";
    }

    if age > 4 && age <=14 {
        return "Drink Toddy (whatever the hell that is!)";
    }

    if age > 15 && age <=18 {
        return "Drink Coke";
    }

    if age > 19 && age <=21 {
        return "Drink Beer";
    }

    if age > 21 && age <=130 {
        return "Drink Whisky";
    }

    else {
        return "Sorry. Please enter your age as a numerical value.";
    }

};
