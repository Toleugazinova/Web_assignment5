const userProfile = {
    name: "Amina",
    birthYear: 2008,
    isDeveloper: false,
    hobbies: []
};

function showProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;

    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileYear").textContent = userProfile.birthYear;
    document.getElementById("profileAge").textContent = age;
    document.getElementById("profileDeveloper").textContent = userProfile.isDeveloper;
    document.getElementById("hobbyCount").textContent = userProfile.hobbies.length;

    console.log("User profile:", userProfile);
    console.log("Age:", age);
    console.log("Total hobbies:", userProfile.hobbies.length);
}

showProfile();

document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const birthYear = Number(document.getElementById("birthYear").value);

    userProfile.name = name;
    userProfile.birthYear = birthYear;

    showProfile();
    document.getElementById("message").textContent = "Profile updated successfully!";
    document.getElementById("message").style.color = "green";
});

document.getElementById("addButton").addEventListener("click", function () {
    const newHobby = document.getElementById("newHobby").value.trim();

    if (newHobby === "") {
        document.getElementById("listMessage").textContent = "Please enter a hobby";
        return;
    }

    const item = document.createElement("li");
    item.textContent = newHobby;
    document.getElementById("hobbyList").appendChild(item);

    userProfile.hobbies.push(newHobby);
    document.getElementById("newHobby").value = "";
    document.getElementById("listMessage").textContent = "";
    showProfile();
});

document.getElementById("removeButton").addEventListener("click", function () {
    const list = document.getElementById("hobbyList");

    if (list.lastElementChild !== null) {
        list.lastElementChild.remove();
        userProfile.hobbies.pop();
        document.getElementById("listMessage").textContent = "Last hobby removed";
        showProfile();
    } else {
        document.getElementById("listMessage").textContent = "The list is empty";
    }
});
