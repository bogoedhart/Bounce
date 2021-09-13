/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
 var x = 50;
 var y = 50;

 var speedX = 10;
 var speedY = 10;


function draw() {

    // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
    createCanvas(1280, 720);

    // Kleur de achtergrond blauw, zodat je het kunt zien
    background('blue');
    
 
    // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x, y, 80, 80);

  x = x + speedX;
  y = y + speedY;

  if (x === 1240 || x === 40){
    speedX = speedX * -1;
  }

  if (y === 680 || y === 40){
    speedY = speedY * -1;
  }


}

// code van Cam


// globale variabelen
var bal = new Bal(50, 100);

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  bal.show();
  bal.update();
}