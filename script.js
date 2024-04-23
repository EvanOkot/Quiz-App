// script.js
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const answers = {
        q1: "Paris",
        q2: "HyperText Markup Language"
    };

    // Check each question
    const q1Answer = document.querySelector('input[name="q1"]:checked').value;
    const q2Answer = document.querySelector('input[name="q2"]:checked').value;

    if (q1Answer === answers.q1) {
        score += 1;
    }
    if (q2Answer === answers.q2) {
        score += 1;
    }

    // Show the score
    alert("Your score is: " + score + "/2");
});
