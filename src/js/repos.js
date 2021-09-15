// simple ajax-like get request for repos on my account
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/lilykiwi/repos");
xhr.onload = function () {
  if (xhr.status === 200) {
    let response = JSON.parse(xhr.responseText);
    // display the repos using the function below
    displayData(response);
  } else {
    console.error("couldn't fetch repos! status error: " + xhr.status);
  }
};
xhr.send();

function displayData(response) {
  // clear existing target area
  document.getElementById("card-area").innerHTML = "";

  // replace the spinner with a nice row column
  document.getElementById("card-area").innerHTML += `<div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"
    id="card-row"
  ></div>`;

  // state data for repos we know about
  const heldStates = [
    { name: "5e-strife", image: true },
    { name: "archive", image: true },
    { name: "countdown-applet", image: true },
    {
      name: "FaceFillers-Electron",
      image: true,
    },
    { name: "char-dotfiles", image: true },
    {
      name: "luna-superpi-discord",
      image: true,
    },
    { name: "playground", image: true },
    {
      name: "recipe-book-core",
      image: true,
    },
    {
      name: "summerysaturn.github.io",
      image: true,
    },
    {
      name: "y1-410A2-UnityProject",
      image: true,
    },
    { name: "y1-csg-uni", image: false },
    { name: "y2-csg-uni", image: false },
  ];

  // iterate over each repo in the json response. see api.github.com docs.
  response.forEach((element) => {
    let repoLink = element.html_url;
    let name = element.name;
    let description = element.description;

    let license = "No License";
    if (element.license != null) {
      license = element.license.name;
    }

    // get rid of my tiny and near-pointless github description repo
    if (name === "lilykiwi") {
      return;
    }

    /* we actually have some repo images saved on the host! github have
     *  yet to implement a way to fetch the social slide for a repo, even
     *  though repos can have images. the API just doesn't support it, for
     *  some reason. instead, i'm hosting them here and matching them.
     */
    let imageSrc = `placeholder.png`;

    // TODO: Replace this with a match statement
    // Grabs the image for the repo (if we have it in /image/*)
    heldStates.some((e) => {
      if (e.name == name && e.image) {
        imageSrc = `${name}.png`;
      }
    });

    // Gets rid of the ugly "null" language item if there's no code yet
    if (element.language == null) {
      language = "";
    } else {
      language = element.language;
    }

    // get the amount of issues, and enable the badge if there's more than 0
    let issueBadge = false;
    let issueCount = element.open_issues_count;
    if (issueCount > 0) {
      issueBadge = true;
    }

    // insert all found repos using this html prefab
    document.getElementById(
      "card-row"
    ).innerHTML += `<div class="col mb-2 fadein">
      <a class="link-undecorated" href="${repoLink}">
        <div class="card h-100 bg-secondary border-0">
          <img
            src="image/${imageSrc}"
            class="card-img-top rounded-bottom"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              ${description}
            </p>
          </div>

          <span
            class="
              position-absolute
              top-0
              start-50
              translate-middle
              badge
              rounded-pill
              bg-danger
              ${issueBadge ? "" : "d-none"}
            "
          >
            ${issueCount} issues
          </span>

          <div
            class="
              position-absolute
              top-100
              start-50
              translate-middle
              badge
              bg-light
              text-dark
            "
          >
            ${license} ${language}
          </div>
        </div>
      </a>
    </div>`;
  });
}
