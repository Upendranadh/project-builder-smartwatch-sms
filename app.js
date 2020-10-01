//Dom elements

const timeElement = document.querySelector(".smartwatch_innerpart-text2 h1");
const topTime = document.querySelector(".smartwatch_innerpart-text1 p");
const day = document.querySelector(".smartwatch_innerpart-text2 h3");
const messageElement = document.querySelector(".fa-comments");
const smartWatchMessageElement = document.querySelector(".smartwatch_sms");
const smartWatchElementDiv = document.querySelector(".smartwatch_sms");
//Creating a new Date obj from DATE class(function constructor)
// const time = new Date();

state = {
  smsVisible: false,
  fullSmsvisible: false,
};
//Updating the UI for Time
const updateClock = () => {
  timeElement.textContent = new Date().toLocaleTimeString(); //gives Current Time
  topTime.textContent = new Date().toLocaleTimeString().substring(0, 5);
};

setInterval(updateClock, 1000); //set interval to update time every 1sec

//Updating UI for Day
const updateDay = () => {
  const Day = new Date().getDay();
  const d = toKnowDay(Day);
  //   console.log(Day);
  day.textContent = d;
};

//Updating UI when clicked on the Message Icon in the UI

messageElement.addEventListener("click", () => {
  //   console.log("hello");
  if (state.fullSmsvisible === false) {
    state.smsVisible === false
      ? (smartWatchMessageElement.style.visibility = "visible")
      : (smartWatchMessageElement.style.visibility = "hidden");
    state.smsVisible = !state.smsVisible;
    smartWatchElementDiv.addEventListener("click", (e) => {
      console.log(e.target.id);
      switch (e.target.id) {
        case "html": {
          smartWatchMessageElement.textContent =
            "HTML means Hyper Text Markup Language";
          break;
        }
        case "css": {
          smartWatchMessageElement.textContent =
            "CSS means Cascading style sheets";
          break;
        }
        case "js": {
          smartWatchMessageElement.textContent =
            "Java script is an Asynchronous language";
          break;
        }
      }
      state.fullSmsvisible = !state.fullSmsvisible;
    });
  } else if (state.fullSmsvisible === true) {
    smartWatchMessageElement.innerHTML = `<div id="html" class="padding2">HTML</div><hr /> <div id="css" class="padding2">CSS</div><hr /><div id="js" class="padding2">JS</div>`;
    state.fullSmsvisible = !state.fullSmsvisible;
    state.smsVisible = !state.smsVisible;
  }
});

smartWatchElementDiv.addEventListener("click", () => {});

const toKnowDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

window.onload = () => {
  setInterval(updateClock, 1000);
  updateDay();
};
