class Game {
  constructor() {}

  getState(){
    database.ref("gameState").on("value",function(data){
      gameState=data.val()
    })
  }
  updateState(value){
    database.ref("/").update({
      gameState:value
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
    car1=createSprite(width/2-150,height-100)
    car1.addImage(car1img)
    car1.scale=0.07;
    car2=createSprite(width/2+150,height-100)
    car2.addImage(car2img)
    car2.scale=0.07;
  }
  play(){
    form.hide()
    Player.getPlayersInfo()
    if(allPlayers!==undefined){
    image(trackimg,0,-height*5,width,height*6)
    drawSprites()
    }
  }
}
