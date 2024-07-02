
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGradeGenerator() {
    rl.question("What is your name? ", (name) => {
        rl.question("What was your mark? ", (mark) => {
            mark = Number(mark);
    
            if (isNaN(mark) || mark < 0 || mark > 100) {
                rl.question("Wrong choice, What was your mark? ", (mark1) => {
                    mark1 = Number(mark1);
    
                    if (mark1 > 79) {
                        console.log("You have an A")
                    } else if (mark1 >= 60 && mark1 <= 79) {
                        console.log("You have an B")
                    } else if (mark1 > 49 && mark1 < 60) {
                        console.log("You have an C")
                    } else if (mark1 >= 40 && mark1 <= 49) {
                        console.log("You have an D")
                    } else {
                        console.log("You have an E")
                    }
                    rl.close();
                })
            } else {
                if (mark > 79) {
                    console.log(`Hi ${name}, You have an A`);
                } else if (mark >= 60 && mark <= 79) {
                    console.log("You have an B")
                } else if (mark > 49 && mark < 60) {
                    console.log("You have an C")
                } else if (mark >= 40 && mark <= 49) {
                    console.log("You have an D")
                } else {
                    console.log("You have an E")
                } 
                rl.close();
            }
        })
    })
}

studentGradeGenerator();

