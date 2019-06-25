var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
        var rainbow;
        var pines;
        var war;
        var room;
        var candy;
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y; 

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var title = draw.bitmap('img/gravityfalls.png');
            title.x = 210;
            title.y = groundY-425;
            title.scaleX = 1.4;
            title.scaleY = 1.4;
            background.addChild(title);
            var circle;
            
            for(var i=0;i<100;i++) {
                circle = draw.circle(2,'white','yellow',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle);
            }
            var moon = draw.bitmap('img/moon.png');
            moon.x = 300;
            moon.y = 25;
            moon.scaleX = 0.1;
            moon.scaleY = 0.1;
            background.addChild(moon);
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            for(var i=0;i<7;++i) {
                var building;
                var randNum = Math.random() * 275 + 50;
                var buildingHeight = randNum;
                building = draw.rect(75,buildingHeight,'Black','DarkGray',1);
                building.x = 200*i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            
            // TODO 4: Part 1 - Add a tree
            war = draw.bitmap('img/war.png');
            war.x = 0;
            war.y = groundY-300;
            war.scaleX = 0.72;
            war.scaleY = 0.72;
            background.addChild(war);
            
            pines = draw.bitmap('img/pines.png');
            pines.x = 845;
            pines.y = groundY-355;
            pines.scaleX = 1;
            pines.scaleY = 1;
            background.addChild(pines);
                        
            candy = draw.bitmap('img/summerween.png');
            candy.x = 570;
            candy.y = groundY-250;
            candy.scaleX = 0.9;
            candy.scaleY = 0.9;
            background.addChild(candy);
            
            room = draw.bitmap('img/room.png');
            room.x = 1310;
            room.y = groundY-250;
            room.scaleX = 0.9;
            room.scaleY = 0.9;
            background.addChild(room);
            
            rainbow = draw.bitmap('img/rainbow.png');
            rainbow.x = 315;
            rainbow.y = groundY-80;
            rainbow.scaleX = .2;
            rainbow.scaleY = .2;
            background.addChild(rainbow);
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            rainbow.x = rainbow.x - 5;
            if(rainbow.x < -500) {
                rainbow.x = canvasWidth;
            }
            war.x = war.x - 1;
            if(war.x < -500) {
                war.x = canvasWidth;
            }
            pines.x = pines.x - 1;
            if(pines.x < -500) {
                pines.x = canvasWidth;
            }
            candy.x = candy.x - 1;
            if(candy.x < -500) {
                candy.x = canvasWidth;
            }
            room.x = room.x - 1;
            if(room.x < -500) {
                room.x = canvasWidth;
            }
            // TODO 5: Part 2 - Parallaxs
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x - .1;
                if(building.x < -200) {
                    building.x = canvasWidth;
                }
            }
            
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
