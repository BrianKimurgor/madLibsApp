"use strict";
window.onload = () =>
{
    let questions = 4;
    let questionQounter = 0;

    let input = `enter your`;
    let question = [
        `${input} name`,
        `${input} home`,
        `${input} course`,
        `${input} university`,
        `${input} career`,
    ];
    let userInputs = [];
    for (let i = questions; i >=0; i--)
    {
        console.log
        (
            question[questionQounter] + `(${questions} questions left)`
        );
        userInputs.push
        (
            prompt
            (question[questionQounter] + `(${questions} questions left)`)
        );
        console.log(userInputs);
        questionQounter++;
        questions--;
    }

    let story = `<h3>My name is ${userInputs[0]}, I come from ${userInputs[1]}, I am studying ${userInputs[2]} in ${userInputs[3]} and I hope to be a ${userInputs[4]} soon </h3>`;
    console.log(story);

    alert
    (
        "ALL DONE!!"
    );

    console.log(story);
    document.write(story);
};