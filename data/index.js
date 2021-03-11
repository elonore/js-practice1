const array = ["Paris", "Lyon", "Bordeaux", "Montreal"];
const array1 = ["Paris", 33, ["Montreal", "Bordeaux"], true];

for (i = 0; i < array.length; i++) {
  console.log(typeof array1[i]);
}

const numbers = [21, 45, 1, 22, 7];
console.log(numbers.sort());

//********************************************************************

// ****************************************
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `
      <iframe
        width="654"
        height="491"
        src=${link}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  }
});

const changeLink = (linkToChange) => {
  embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};
