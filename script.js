// let inputText = document.getElementById("input-text");
// let btn = document.getElementById("btn");
// let listContainer = document.getElementById("list-container");

// btn.addEventListener("click", function () {
//   if (inputText.value == "") {
//     alert("Please write something!");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  let inputText = document.getElementById("input-text");
  let btn = document.getElementById("btn");
  let listContainer = document.getElementById("list-container");

  btn.addEventListener("click", function () {
    if (inputText.value === "") {
      alert("Please write something!");
    } else {
      let listItem = document.createElement("li");
      listItem.textContent = inputText.value;
      listContainer.appendChild(listItem);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      listItem.appendChild(span);
    }
    inputText.value = "";
    saveData();
  });
  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    },
    false
  );
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }
  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
  }
  showTask();
});
