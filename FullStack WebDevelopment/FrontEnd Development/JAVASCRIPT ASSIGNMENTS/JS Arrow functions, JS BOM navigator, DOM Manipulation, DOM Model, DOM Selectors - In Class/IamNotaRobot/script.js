var imgArr = document.querySelectorAll("img");
let resetBtn = document.querySelector("#reset");
var verify_btn = document.getElementById("btn");
let h3 = document.querySelector("h3");
function random() {
  var arr = [1, 2, 3, 4, 5, Math.floor(Math.random() * 5) + 1];
  var s = arr.sort(func);

  function func(a, b) {
    return 0.5 - Math.random();
  }

  for (let i = 0; i < arr.length; i++) {
    imgArr[i].setAttribute("src", `./images/${arr[i]}.jpg`);
    imgArr[i].setAttribute("data-ns-test", `img${arr[i]}`);
  }
}

let count = 0;
let arr = [];
let arr2 = [];
function clickOnImg(e) {
  let src = e.target.attributes[0].value;
  let classImg = e.srcElement.className;
  arr.push(src);
    if(arr2.length == 0){
    arr2.push(classImg);
    count++;
  }else if(arr2[0] == classImg){
    arr2.pop();
    count--;
  }else{
    arr2.push(classImg);
    count++;
  }
  if (count == 2) {
    if (arr[0] == arr[1] && arr2[0] != arr2[1]) {
      let p = document.createElement("p");
      p.setAttribute("id", "para");
      h3.appendChild(p);
      p.innerText = "You are a human. Congratulations!";
    } else {
      let p = document.createElement("p");
      p.setAttribute("id", "para");
      h3.appendChild(p);
      p.innerText =
        "We can't verify you as a human. You selected the non-identical tiles.";
      verify_btn.style.visibility = "hidden";
    }
  }

  resetBtn.style.visibility = "visible";
  if (count == 2) {;
    verify_btn.style.visibility = "visible";
  } else {
    verify_btn.style.visibility = "hidden";
  }
}

resetBtn.addEventListener("click", () => {
  resetBtn.style.visibility = "hidden";
});