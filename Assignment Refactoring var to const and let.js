function checkAccess(loggedIn) {
    let accessLevel;       // Declared
    let userRole;          // Declared
        const message = "User is logged in."; // Static
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        const message = "User not logged in."; // Static
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;


for (let i = 0; i < 3; i++) {           // Changing Variables
    console.log("Attempt", i);
    const loggedIn = Math.random() >= 0.5; // Assigned
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}