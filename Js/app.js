// Instantiate
const github = new Git();
const ui = new UI();
// * ui variable
const searchUser = document.getElementById("searchUser");
// *Event Listener
searchUser.addEventListener("keyup", (e) => {
  // get value from Input
  const userName = e.target.value;
  if (userName !== "") {
    // Send Api Request and get user
    github.getUser(userName).then((user) => {
      if (user.profile.message === "Not Found") {
        // ShowAlert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showUser(user.profile);
      }
    });
  } else {
    // Clear Field if there is no user
    ui.clearField();
  }
});
