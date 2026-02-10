function showProfile() {
    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    
    // Get selected grade
    let grade = "";
    const grades = document.getElementsByName("grade");
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].checked) {
            grade = grades[i].value;
        }
    }
    
    // Get interests
    let interests = [];
    if (document.getElementById("sports").checked) {
        interests.push("Sports");
    }
    if (document.getElementById("music").checked) {
        interests.push("Music");
    }
    if (document.getElementById("coding").checked) {
        interests.push("Coding");
    }

    // Build message
    let message = "Hello " + name + "!<br>";
    message += "You are a " + grade + ".<br>";

    if (interests.length > 0) {
        message += "Your interests include: " + interests.join(", ") + ".<br>";
    } else {
        message += "You didn't select any interests.<br>";
    }

    if (birthday !== "") {
        message += "Your birthday is " + birthday + ". 🎉";
    }

    document.getElementById("output").innerHTML = message;
}
