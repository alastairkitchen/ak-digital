import {
  COLLISION_INTERACTION_COLOUR,
  CollisionObject,
} from "../../collision-objects";

const bookOneTop: CollisionObject = {
  x: 166,
  y: 380,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxHeader: "Suzanne Wright Photographer",
    textBoxContent:
      "A photography portfolio website showcasing the work of Suzanne Wright. Designed to present her photos in a visually appealing and interactive format. Technologies Used: Gatsby, Netlify CMS, GraphQL, React, Sass, Sketch design. Website is currently live with placeholder content.",
  },
};

const bookTwoTop: CollisionObject = {
  x: 199,
  y: 380,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxHeader: "Catherine Robertson Counselling",
    textBoxContent:
      "A website for Catherine Robertson's counselling service, providing potential clients with detailed information and service offerings. Technologies Used: Next.js, Sass, Javascript, React.",
  },
};

const bookTwoSide: CollisionObject = {
  x: 214,
  y: 388,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    modalType: "projects",
    cvSection: "projects",
    textBoxHeader: "Catherine Robertson Counselling",
    textBoxContent:
      "A website for Catherine Robertson's counselling service, providing potential clients with detailed information and service offerings. Technologies Used: Next.js, Sass, Javascript, React.",
  },
};

const bookThreeTop: CollisionObject = {
  x: 485,
  y: 379,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxHeader: "Rick and Morty App",
    textBoxContent:
      "A web app created to display information about characters and episodes of an American cartoon called Rick and Morty. Technologies used: React, React Router, Typescript, Sass, Rick and morty app.",
  },
};

const bookThreeSide: CollisionObject = {
  x: 470,
  y: 391,
  width: 21,
  height: 26,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: "projects",
    cvSection: "projects",
    textBoxHeader: "Rick and Morty App",
    textBoxContent:
      "A web app created to display information about characters and episodes of an American cartoon called Rick and Morty. Technologies used: React, React Router, Typescript, Sass, Rick and morty app.",
  },
};

const bookFourTop: CollisionObject = {
  x: 516,
  y: 379,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxHeader: "AK Digital Game",
    textBoxContent:
      "A game built from scratch to demonstrate front-end development skills. Developed entirely without game libraries, using React, TypeScript, and HTML5 Canvas to handle rendering, game logic, and state management.",
  },
};

const bookShelfLeft: CollisionObject = {
  x: 42,
  y: 99,
  width: 45,
  height: 24,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "A bookshelf packed full of Alex's favourite books.",
  },
};

const bookShelfRight: CollisionObject = {
  x: 619,
  y: 99,
  width: 45,
  height: 24,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: "skills",
    cvSection: "skills",
    textBoxHeader: "Technical Skills",
    textBoxContent:
      "Frontend: HTML, CSS, Sass, JavaScript (ES6+), TypeScript, React, Redux, Next.js, React Query, React Hook Form",
  },
};

const fireplace: CollisionObject = {
  x: 228,
  y: 95,
  width: 56,
  height: 31,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "The fireplace is crackling warmly.",
  },
};

const sink: CollisionObject = {
  x: 385,
  y: 99,
  width: 31,
  height: 25,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "The sink is empty, Alex runs a tight ship.",
  },
};

const worktopFish: CollisionObject = {
  x: 480,
  y: 98,
  width: 31,
  height: 25,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "A tasty looking fish for tonights dinner.",
  },
};

const beerKeg: CollisionObject = {
  x: 512,
  y: 98,
  width: 31,
  height: 25,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "The beer keg is full to the brim, no time for a drink now though.",
  },
};

const cabinateRightTop: CollisionObject = {
  x: 632,
  y: 193,
  width: 25,
  height: 52,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "The cabinate is packed full of retro video games, Alex enjoys collecting.",
  },
};

const cabinateRightBottom: CollisionObject = {
  x: 633,
  y: 258,
  width: 25,
  height: 52,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "More video game nostalgia, I see metroid prime, my favourite!",
  },
};

const cabinateLeftTop: CollisionObject = {
  x: 49,
  y: 385,
  width: 25,
  height: 52,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "The cabinate contains some of Alex's favourite films.",
  },
};

const cabinateLeftBottom: CollisionObject = {
  x: 49,
  y: 321,
  width: 25,
  height: 52,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "The cabinate contains some photos of alex's friends and family.",
  },
};

export const alexHouseInteractionObjects = [
  bookThreeTop,
  bookThreeSide,
  bookOneTop,
  bookTwoTop,
  bookTwoSide,
  bookFourTop,
  bookShelfLeft,
  bookShelfRight,
  fireplace,
  sink,
  worktopFish,
  beerKeg,
  cabinateRightTop,
  cabinateRightBottom,
  cabinateLeftTop,
  cabinateLeftBottom,
];
