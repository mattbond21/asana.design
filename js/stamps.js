let stampIndex = 0;
const stamps = [
  "../images/stamps/dice.png",
  "../images/stamps/face.png",
  "../images/stamps/hand.png",
  "../images/stamps/lipstick.png",
  "../images/stamps/pencil.png",
  "../images/stamps/apple.png",
  "../images/stamps/ducko.png",
  "../images/stamps/cat.png",
  "../images/stamps/drum.png",
  "../images/stamps/horn.png",
  "../images/stamps/plane.png",
  "../images/stamps/sunny.png"
];

const stampsTag = document.querySelector(".stamps");

const addStamp = function (x, y) {
  const img = document.createElement("img");
  img.setAttribute("src", stamps[stampIndex]);

	// remove half the window width
  img.style.left = (x - window.innerWidth / 2) + "px";
  img.style.top = y + "px";

  stampsTag.appendChild(img);

	// add some audio. can add multiple similar to how stamps were added
  const audio = document.createElement("audio");
  audio.setAttribute("src", "images/stamps/pop.mp3");
  audio.play();

  stampIndex++;
  if (stampIndex > stamps.length - 1) {
    stampIndex = 0
  }
};

document.addEventListener("click", function(event) {
  addStamp(event.pageX, event.pageY)
}, false);
