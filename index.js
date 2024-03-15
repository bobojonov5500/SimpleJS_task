const form = document.getElementById("form");
const exampleInputText1 = document.querySelector("#exampleInputText1");
const exampleInputText2 = document.querySelector("#exampleInputText2");
const list = document.querySelector("#list");
const btnGroup = document.querySelector(".btn-group");
let Array = [];
let NewArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    Car_name: exampleInputText1.value,
    Car_type: exampleInputText2.value,
  };
  Array.push(obj);
  NewArray = Array.map((e) => {
    return ` <li class="list-group-item d-flex justify-content-between align-items-center">
      ${e.Car_name}
    <span class="badge bg-primary ">${e.Car_type}</span>
  </li>`;
  });
  console.log(NewArray);
  list.innerHTML = NewArray.join("");
  exampleInputText1.value = "";
  exampleInputText2.value = "";
  // console.log(NewArray);
});

btnGroup.addEventListener("click", (item) => {
  let filterA = Array.filter((e) => {
    return e.Car_type == item.target.textContent;
  });
  if (item.target.textContent === "All") {
    filterA = Array;
  }
  console.log(filterA);
  NewArrayOne = filterA.map((e) => {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
      ${e.Car_name}
    <span class="badge bg-primary ">${e.Car_type}</span>
  </li>`;
  });
  list.innerHTML = NewArrayOne.join("");
  // console.log(NewArrayOne);
});
