// MODEL (data + logic for data)
const state = {
  shopinnhlist: ["apple", "banana", "orange"]
};

function createSingleElement(tag, value) {
  const singleElement = document.createElement(tag);
  if (value !== undefined) {
    singleElement.appendChild(document.createTextNode(value));
  }
  return singleElement;
}

function createList() {
  const listOfElemnts = createSingleElement("ul", "");
  for (let i = 0; i < state.shopinnhlist.length; i++) {
    const element = createSingleElement("li", state.shopinnhlist[i]);
    listOfElemnts.appendChild(element);
  }
  return listOfElemnts;
}

function createInput() {
  const input = createSingleElement("input");
  input.setAttribute("type", "text");
  return input;
}

function ButtonComponent() {
  const button = createSingleElement("button", "submit");
  button.addEventListener("click", handleSubmit);
  return button;
}
function handleSubmit() {
  const volueOfInput = document.querySelector("input");

  if (volueOfInput.value.length > 0) {
    state.shopinnhlist.push(volueOfInput.value);
    upDateDom();
    console.log(state.shopinnhlist);
  } else {
    alert("no input");
  }

  volueOfInput.value = "";
}
// CONTROLER btween VIEW and MODEL

function upDateDom() {
  const root = document.getElementById("root");
  root.innerHTML = "";
  const input = createInput();
  const button = ButtonComponent();
  const list = createList();
  root.appendChild(input);
  root.appendChild(button);
  root.appendChild(list);
}
function render() {}
render();
upDateDom();
