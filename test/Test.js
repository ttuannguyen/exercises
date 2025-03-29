const validate = (user_name) => {
    let lowerCaseUsername = user_name.toLowerCase();
    if (lowerCaseUsername.includes("admin") || lowerCaseUsername.includes("colombo") || lowerCaseUsername.includes("colomboai")) {
        console.log("not allowed")
    } else {
        console.log("passed")
    }
}

validate("whatadminsup");

// console.log("omgcolombo".includes("colombo"))