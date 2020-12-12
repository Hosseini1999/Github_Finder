// * construnctor UI
class UI {
  constructor() {
    //   get div from ui : profile
    this.profile = document.getElementById("profile");
  }
  //show users and their data in UI
  showUser(user) {
    this.profile.innerHTML = `
      <div class="card card-body">
        <div class="row">
          <div class="col-md-3">
          <img class="img-fluid" src="${user.avatar_url}" />
           <a class="btn btn-block btn-primary mt-3 mb-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <div class="mb-3">
              <span class="badge badge-primary mb-2 ">Public repos : ${user.public_repos}</span>
              <span class="badge badge-secondary mb-2 ">Public gists : ${user.public_gists}</span>
              <span class="badge badge-success mb-2 ">Followers : ${user.followers}</span>
              <span class="badge badge-info mb-2 ">Following : ${user.following}</span>
            </div>
            <ul class="list-group">
              <li class="list-group-item">Company :${user.company} </li>
              <li class="list-group-item">Website/blog :${user.blog} </li>
              <li class="list-group-item">Location :${user.location} </li>
              <li class="list-group-item">Since :${user.created_at} </li>
            </ul>
          </div>
        </div>
      </div>
      `;
  }
}
