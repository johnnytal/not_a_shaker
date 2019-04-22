//window.onload = start;
document.addEventListener("deviceready", start, false);

function start(){
    WIDTH = 720; 
    HEIGHT = 400; 

    game = new Phaser.Game(WIDTH, HEIGHT);  

    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Shaker", shakerMain);
    
    game.state.start("Boot");  
}

var boot = function(game){};
  
boot.prototype = {
    create: function(){
        if (this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        } 
        
        else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
            this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
        }
        
        game.state.start("Preloader"); 
    }
};