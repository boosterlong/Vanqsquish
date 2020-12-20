

function createHero() {
    var input = document.getElementById('userinput');
    var input2 = document.querySelector('input[name="option"]:checked');
    let hero = (input.value + ' the ' + input2.value);
    localStorage.setItem('heroName', hero)
    alert(hero + " has been born!")


//This generates the enemy health pool.
    let health = Math.floor(Math.random() * 10 + 1);
    localStorage.setItem('enemyHP', health)

} 


function toggleText() {
    var text = document.getElementById("adventure");
    if (text.style.display === "none") {
      text.style.display = "block";
    }
  }

  function attackBug() {
    let damage = Math.floor(Math.random() * 10 + 1);
    alert((localStorage.getItem('heroName')) + " fights the enemy and does " + damage + " damage!");
    localStorage.setItem('attackResult', damage)
  if (localStorage.getItem('enemyHP') <= damage) {
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
  document.write(localStorage.getItem('enemyHP'))
}