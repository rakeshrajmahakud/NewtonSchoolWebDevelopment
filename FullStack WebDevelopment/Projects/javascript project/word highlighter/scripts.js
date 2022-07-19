function search(){
    var text = document.querySelector("#word-input").value;
    if (!text) {
      return;
    }
    var divCon = document.querySelector("#paragraph-input");
    const checkBox = document.querySelector("#ignore-case");
    const wordCount = document.querySelector("#words-counter");
    let counter = 0;
    let checkFlag = "g";
    if (checkBox.checked) {
      checkFlag += "i";
    }
    divCon.innerHTML = divCon.innerText.replace(new RegExp(text, checkFlag), (match) => {
      counter++;
      return "<span class='highlighted-txt'>" + match + "</span>";
    });
    wordCount.innerText = counter;
      
  }