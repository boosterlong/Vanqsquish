function createHero() {
    var input = document.getElementById('userinput');
    var input2 = document.querySelector('input[name="option"]:checked');
    let hero = (input.value + ' the ' + input2.value);
    alert(hero + " has been born!")
} 

function toggleText() {
    var text = document.getElementById("adventure");
    if (text.style.display === "none") {
      text.style.display = "block";
    }
  }

  function attackBug() {
    var input = document.getElementById('userinput');
    var input2 = document.querySelector('input[name="option"]:checked');
    let hero = (input.value + ' the ' + input2.value);
    let damage = Math.floor(Math.random() * 10 + 1)
    alert(hero + " fights the enemy and does " + damage + " damage!")

    if (damage >=2 ) {
        window.location.href = "./victory.html"
    }
    else window.location.href = "./defeat.html";

} 

function backToMain() {
    window.location.href = "./customhero.html"
}