let acc = document.getElementsByClassName("main-faq");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("h-max");

    let btn = this.firstElementChild.firstElementChild.firstElementChild;

    let faq_content = this.nextElementSibling;
    if (faq_content.style.maxHeight) {
      faq_content.style.maxHeight = null;
      btn.innerHTML = "+";
    } else {
      btn.innerHTML = "-";

      faq_content.style.maxHeight = faq_content.scrollHeight + "px";
    }
  });
}

document.getElementById("default").click();

function showTabData(evt, tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("w-84");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll("ul li");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("text-[#ff5c35]", "");
  }
  evt.currentTarget.className += "text-[#ff5c35]";
  if (tabname == "All") {
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "block";
    }
    return;
  }
  document.getElementById(tabname).style.display = "block";
}
