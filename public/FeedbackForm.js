document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedback-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const satisfaction = document.getElementById("satisfaction").value;
    const designSatisfaction = document.getElementById("designSatisfaction").value;
    const difficulty = document.getElementById("difficulty").value;
    const learning = document.getElementById("learn").value;
    const comments = document.getElementById("comments").value;

    console.log("Satisfaction with webpage content: ", satisfaction);
    console.log("Satisfaction with webpage design: ", designSatisfaction);
    console.log("Difficulty of the questions: ", difficulty);
    console.log("Learning Satisfaction: ", learning);
    console.log("Additional comments: ", comments);

    // You can handle form submission here, such as sending the feedback to a backend server

    // You can also reset the form fields after submission if needed
    form.reset();
  });
});
