window.onload = function() {
  if (!localStorage.getItem('mcname')) {
    console.log('no name set')
    return
  } else {
    let mc = localStorage.getItem('mcname')
    document.body.innerHTML = document.body.innerHTML.replaceAll("MC", mc)
  }
}

function saveName() {
  localStorage.setItem('mcname', charname.value);
  document.getElementById('confirmtext').innerHTML = 'Main Character name successfully saved as "' + localStorage.getItem('mcname') + '"!';
}

function showR1() {
  if (document.getElementsByClassName("r1")[0].style.display != "flex" && document.getElementsByClassName("r2")[0].style.display != "flex") {
    document.getElementsByClassName("r1")[0].style.display = "flex";
  } else if (document.getElementsByClassName("r1")[0].style.display != "flex") {
    document.getElementsByClassName("r1")[0].style.display = "flex";
    document.getElementsByClassName("r2")[0].style.display = "none";
  } else {
    document.getElementsByClassName("r1")[0].style.display = "none";
  }
}

function showR2() {
  if (document.getElementsByClassName("r1")[0].style.display != "flex" && document.getElementsByClassName("r2")[0].style.display != "flex") {
    document.getElementsByClassName("r2")[0].style.display = "flex";
  } else if (document.getElementsByClassName("r2")[0].style.display != "flex") {
    document.getElementsByClassName("r2")[0].style.display = "flex";
    document.getElementsByClassName("r1")[0].style.display = "none";
  } else {
    document.getElementsByClassName("r2")[0].style.display = "none";
  }
}
