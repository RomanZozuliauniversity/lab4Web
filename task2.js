function showName() {
    var name = "Зозуля Роман";
    document.getElementById("name").innerHTML = name;
    setTimeout(function() {
      document.getElementById("name").innerHTML = "";
    }, 5000);
  }