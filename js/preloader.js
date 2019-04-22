var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){
        game.load.image('plus', 'assets/images/plus.png');
        game.load.image('minus', 'assets/images/minus.png');
        
        game.load.audio("front", "assets/audio/front.mp3");
        game.load.audio("back", "assets/audio/back.mp3");
    },
    
    create: function(){
        this.game.state.start("Shaker"); 
    }
};