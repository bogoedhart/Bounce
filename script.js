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
 var x = 640;
 var y = 680;

function draw() {

    // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
    createCanvas(1280, 720);

    // Kleur de achtergrond blauw, zodat je het kunt zien
    background('blue');
    
 
    // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x, y, 80, 80);

  if (x < 1240){
    x = x + 5;
  } else {
    x = x - 5;
  }

  if (y < 680){
    y = y + 5;
  }  {
    y = y - 5;
  }

}