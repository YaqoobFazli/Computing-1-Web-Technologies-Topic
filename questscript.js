const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {

    let action = 0;
    let comedy = 0;
    let horror = 0;
    let scifi = 0;

    for (let i = 1; i <= 5; i++) {

        const answer = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (answer === null) {
            alert("Please answer all questions.");
            return;
        }

        if (answer.value === "action") {
            action++;
        }

        if (answer.value === "comedy") {
            comedy++;
        }

        if (answer.value === "horror") {
            horror++;
        }

        if (answer.value === "scifi") {
            scifi++;
        }
    }

    let movie = "";
    let description = "";

    if (action >= comedy && action >= horror && action >= scifi) {
        movie = "John Wick: Chapter 4";
        description = "You enjoy fast-paced action, intense fights and non-stop entertainment.";
    }

    else if (comedy >= action && comedy >= horror && comedy >= scifi) {
        movie = "The Hangover";
        description = "You enjoy funny situations, ridiculous characters and movies that do not take themselves too seriously.";
    }

    else if (horror >= action && horror >= comedy && horror >= scifi) {
        movie = "The Conjuring";
        description = "You enjoy suspense, mystery and movies that keep you on edge.";
    }

    else {
        movie = "Interstellar";
        description = "You enjoy mysterious stories, futuristic ideas and exploring different worlds.";
    }

    localStorage.setItem("movie", movie);
    localStorage.setItem("description", description);

    window.location.href = "result.html";
});

