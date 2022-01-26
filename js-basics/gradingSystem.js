let allStudents = ["A", "B-","C","C-", 1, 4, 5, 2];

let studentsWhoPass = [];

for(let i = 0 ; i< allStudents.length;i++){

    if(typeof allStudents[i] == "string"){
        // grades better than a c-
        allStudents[i] === "C-" ? studentsWhoPass[i] = "fail": studentsWhoPass[i]="pass";
        
        
    }
    else{
        allStudents[i] > 2 ? studentsWhoPass[i] = "pass": studentsWhoPass[i]="fail";

    }

}

console.log(studentsWhoPass)