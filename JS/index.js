const today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Ciara Grayson`;

footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JavaScript", "GitHub", "Figma"];
let skillsSection = document.getElementById("Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.getElementById("leave_message");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let userName = event.target.usersName.value;
  let userEmail = event.target.usersEmail.value;
  let userMessage = event.target.usersMessage.value;

  console.log(userName, userEmail, userMessage);
});
let messageSection = document.getElementById("messages");
let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");
newMessage.innerHTML = (
  <>
    <a href="mailto:${userEmail}">${userName}</a>
    <span> wrote: ${userMessage}</span>
  </>
);

let removeButton = document.createElemet("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function () {
  let entry = removeButton.parentNode;
  entry.remove();
});

newMessage.appendChild(newMessage);
messageList.appendChild(newMessage);

messageForm.reset();
