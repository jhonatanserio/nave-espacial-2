
var planodefundo
var anigador
var jogador
var stars, starsImg, starsGroup
var inimigoNormal
var inimigoRapido
var inimigoReforcado
var angle = 90;
var laserjogador
var laser2jogador
var laserinimigo
var enemy1
var enemyGroup1,enemyGroup2
var inicio=1
var fim=0
var laseGroupjg,laserGroupjg2,laserGroupE
var estadoDoJogo=inicio
var pontuacao=0
var pontuacaoinimigo=0

var enemyOne1, enemyTwo2, laser1

function preload() {
  anigador = loadAnimation("./assets/SpaceShip/s1 (2).png","./assets/SpaceShip/s2.png","./assets/SpaceShip/s3.png");
 

  starsImg = loadImage("./assets/estrela.png");

  enemyOne1 = loadAnimation(  "./assets/enemys/enemy5.png", "./assets/enemys/enemy6.png",  "./assets/enemys/enemy7.png");
  enemyTwo2 = loadAnimation(  "./assets/enemys/enemy1.png", "./assets/enemys/enemy2.png",  "./assets/enemys/enemy3.png");
  laser1 = loadAnimation("./assets/PNG/Explosion_7/2/Explosion_1_1.png", "./assets/PNG/Explosion_7/2/Explosion_1_2.png", "./assets/PNG/Explosion_7/2/Explosion_1_3.png")
 
  
}
    




function setup() {
  canvas = createCanvas(800, 600);
  starsGroup = new Group();
  
   
 

  jogador = createSprite(width/2,height/2+200,50,50);
  jogador.addAnimation("animaçãojogador",anigador);
  jogador.frameDelay=10
  enemyGroup1=new Group();;;
  enemyGroup2=new Group();;;
  laserGroupjg=new Group();;;
  laserGroupjg2=new Group();;;
}

function draw(){  

  background("black");
  fill ("white");
  text("pontuação: "+pontuacao,100,50);
  
  drawSprites();
 if (estadoDoJogo==inicio){

  if(keyDown(LEFT_ARROW)){
    jogador.x=jogador.x-4
  }

  if(keyDown(RIGHT_ARROW)){
    jogador.x=jogador.x+4
  }

  var ran = Math.round(random(1, 2));

 if( frameCount % 30 == 0 ){
  if(ran == 1){
    enemyOne(velocityX = 2)
  
  } else if(ran == 2){
    enemyOne(velocityX = -2)
  }}

  if(laserGroupjg.isTouching(enemyGroup1)){
     console.log("fim")
     pontuacao=pontuacao+10
     }

 if(laserGroupjg2.isTouching(enemyGroup1)){
  console.log("fim2") 
  pontuacao=pontuacao+10
    }
  if(pontuacao==10000){
    estadoDoJogo=fim
  
  }
  if(laGroup1.isTouching()){
    console.log("fim2") 
    pontuacao=pontuacao+10
  }
  if(pontuacaoinimigo==100)
    estadoDoJogo=fim2
  }else if(estadoDoJogo==fim){
    fill ("white")
    text("parabens voce conseguiu aqui esta seu premio",300,300)
    text("seu premio e 1200 reais por salva o mundo",300,350)
  }
}


function enemyOne(velocity){
  rotate(angle)
  enemy1 = createSprite(600, 40);

  enemy1.addAnimation("ENEMYONE", enemyOne1);
  enemy1.scale = 0.13;
  enemy1.velocityX = velocity;
  enemy1.lifetime = 350

  enemy1.x = Math.round(random(0, 800));


  laserinimigo = createSprite(enemy1.x, enemy1.y+50);
  laserinimigo.addAnimation("laser", laser1);
  laserinimigo.scale = 0.2;
  laserinimigo.velocityY= +5
  laserinimigo.lifetime=100
  laserGroupE.add(laserinimigo)
  enemyGroup1.add(enemy1)
  
}

function stars(){
  stars = createSprite(400, 300);
  stars.addImage("imagemdostars", starsImg);
  stars.scale = 0.15;  
  starsGroup.add(stars);


}
function playerlaser(){
  laserjogador = createSprite(jogador.x, jogador.y-50);
  laserjogador.addAnimation("laser", laser1);
  laserjogador.scale = 0.2;
  laserjogador.velocityY= -5
  laserjogador.velocityX=3
  laserjogador.lifetime=100

  laser2jogador = createSprite(jogador.x, jogador.y-50);
  laser2jogador.addAnimation("laser", laser1);
  laser2jogador.scale = 0.2;
  laser2jogador.velocityY= -5
  laser2jogador.velocityX=-3
  laser2jogador.lifetime=100
  laserGroupjg2.add(laser2jogador)
}
function playerlaser2(){
  laserjogador = createSprite(jogador.x, jogador.y-50);
  laserjogador.addAnimation("laser", laser1);
  laserjogador.scale = 0.2;
  laserjogador.velocityY= -5
  laserGroupjg.add(laserjogador)
  
}
function keyPressed(){
  if(frameCount%5==0){
  if(keyCode==DOWN_ARROW){
  playerlaser()
 }

if(keyCode==UP_ARROW){
  playerlaser2()
  }
}
}