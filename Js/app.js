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
    github.getUser(userName).then((user) => {
      ui.showUser(user.profile);
    });
  }
});
