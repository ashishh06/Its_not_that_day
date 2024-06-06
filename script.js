var day = new Date().getDay();
        var notDay = day;
        while(day == notDay){
            notDay = Math.floor(Math.random() * 7);
        }

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF8F33', '#8F33FF', '#33FFF5'];

        var sarcasmMessages = [
            "Relax, you still have time to procrastinate. It's not Sunday. Go ahead, put off those plans a bit longer.",
            "Don't worry, you don't have the Monday blues today. But feel free to complain as if you do!",
            "Take it easy, it's not like it's Tuesday. You can still pretend you're getting things done.",
            "Chill out, it's not hump day yet. Save your mid-week crisis for later.",
            "Relax, Thor's day will come later. It's not Thursday. The weekend is still just a mirage.",
            "Don't get too excited, it's not Friday yet. Your Friday night dreams remain just that – dreams.",
            "No need to plan your adventures, it's not Saturday. Your epic plans can wait another day."
        ];

        var dayPassedMessages = [
            "Well, at least Monday has passed! You're not at the beginning of the misery anymore.",
            "At least you survived Monday and Tuesday! Two down, only a few more to go. Keep breathing.",
            "You're halfway through the week! Celebrate surviving this long without a major meltdown.",
            "Hang in there, it's almost Friday! The beacon of weekend hope is just around the corner.",
            "Almost there, just one more day to go! You can almost taste the freedom.",
            "It's Friday! Just a little longer until the weekend! The end of the tunnel is in sight.",
            "Enjoy the rest of your weekend! Because before you know it, it's Monday again."
        ];

        document.body.style.background = "linear-gradient(to bottom, " + colors[notDay] + ", " + colors[(notDay + 1) % 7] + ")";
        var textElement = document.getElementById("text");
        var messageElement = document.getElementById("message");
        var countdownElement = document.getElementById("countdown");

        textElement.innerHTML = "It's not " + days[notDay] + ".";
        var message = sarcasmMessages[notDay];

        if (notDay > day) {
            message += " " + dayPassedMessages[day];
        } else if (notDay < day) {
            message += " " + dayPassedMessages[notDay];
        }

        messageElement.innerHTML = message;

        
        var daysUntilSunday = (7 - day) % 7;
        var countdownMessage = "Just " + daysUntilSunday + " more day" + (daysUntilSunday !== 1 ? "s" : "") + " until Sunday.";
        countdownElement.innerHTML = countdownMessage;

        setTimeout(function() {
    textElement.style.transform = 'scale(1.2)';
    textElement.style.opacity = 1;
    setTimeout(function() {
        messageElement.style.transform = 'translateY(-10px)';
        messageElement.style.opacity = 1;
        setTimeout(function() {
            countdownElement.style.transform = 'translateY(-10px)';
            countdownElement.style.opacity = 1;
        }, 500);
    }, 500);
}, 1000);