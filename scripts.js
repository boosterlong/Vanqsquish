
//Put the text input next to the class and show the box with the enemy
function createHero() {
    var input = document.getElementById('userinput');
    var input2 = document.querySelector('input[name="option"]:checked');
    let hero = (input.value + ' the ' + input2.value);
//Saves hero title and name
    localStorage.setItem('heroName', hero)
    alert(hero + " has been born!")
} 

//This is the function to show the enemy, used in createHero()
function toggleText() {
    var text = document.getElementById("adventure");
    if (text.style.display === "none") {
      text.style.display = "block";
    }
  }

  //Attack the bug by generating a random damage number and comparing it to enemy health
  function attackBug() {
    let damage = Math.floor(Math.random() * 10 + 1);
    alert((localStorage.getItem('heroName')) + " fights the enemy and does " + damage + " damage!");
  if ((localStorage.getItem('enemyHP')) < damage) {
    resolveBattle();}
    else {
      alert('The bug remains alive and regenerates its lost health!')
    }
} 

function resolveBattle() {
    window.location.href = "./victory.html"
}

function backToMain() {
    window.location.href = "./customhero.html"
}

function recallName() {
  document.write(localStorage.getItem('heroName'));
}

function enemyPool() {
  //This generates the enemy health pool and posts it.
  const health = Math.floor(Math.random() * 10 + 1);
  localStorage.setItem('enemyHP', health)
  document.write(localStorage.getItem('enemyHP'))
}