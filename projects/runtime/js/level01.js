var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'bill',x:1450,y:groundY-115},
                {type: 'bill',x:2800,y:groundY},
                {type: 'bill',x:4600,y:groundY},
                {type: 'baby',x:450,y:groundY-50},
                {type: 'bill',x:2220,y:groundY-115},
                {type: 'robot',x:2000,y:groundY-50},
                {type: 'one',x:600,y:groundY-130},
                {type: 'bill',x:1000,y:groundY},
                {type: 'two',x:1560,y:groundY-130},
                {type: 'three',x:3300,y:groundY-130},
                {type: 'baby',x:3100,y:groundY-50},
                {type: 'bill',x:3000,y:groundY-115},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
       
        function createBill(x,y) {
            var hitZoneSize = 27;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            myObstacle.rotationalVelocity = 25;
            var obstacleImage = draw.bitmap('img/bill.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -75;
            obstacleImage.y = -75;
        }
        
        function createBaby(x,y) {
            var enemy =  game.createGameItem('enemy',25);
            var baby = draw.bitmap('img/baby.png');
            baby.x = -50;
            baby.y = -100;
            enemy.addChild(baby);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -3;
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy');
                game.increaseScore(100);
                enemy.fadeOut();
            };
            
        }
        
        function createRobot(x,y) {
            var enemy =  game.createGameItem('enemy',25);
            var robot = draw.bitmap('img/robogideon.png');
            robot.x = -80;
            robot.y = -175;
            enemy.addChild(robot);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -3;
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy');
                game.increaseScore(100);
                enemy.fadeOut();
            };
            
        }
        
        function createOne(x,y) {
            var reward =  game.createGameItem('reward',10);
            var one = draw.bitmap('img/1.png');
            one.x = -25;
            one.y = -25;
            reward.addChild(one);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -1;
            reward.onPlayerCollision = function() {
                console.log('Halle received the reward');
                game.increaseScore(1000);
                reward.fadeOut();            
            };
        }
        
        function createTwo(x,y) {
            var reward =  game.createGameItem('reward',10);
            var two = draw.bitmap('img/2.png');
            two.x = -25;
            two.y = -25;
            reward.addChild(two);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -1;
            reward.onPlayerCollision = function() {
                console.log('Halle received the reward');
                game.increaseScore(1000);
                reward.fadeOut();            
            };
        }
        
        function createThree(x,y) {
            var reward =  game.createGameItem('reward',10);
            var three = draw.bitmap('img/3.png');
            three.x = -25;
            three.y = -25;
            reward.addChild(three);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -1;
            reward.onPlayerCollision = function() {
                console.log('Halle received the reward');
                game.increaseScore(1000);
                reward.fadeOut();            
            };
        }
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
        var gameItem = levelData.gameItems[i];
            if (gameItem.type === 'bill') {
                createBill(gameItem.x, gameItem.y);
            } else if (gameItem.type === 'baby') {
                createBaby(gameItem.x, gameItem.y);
            } else if (gameItem.type === 'one') {
                createOne(gameItem.x, gameItem.y);
            } else if (gameItem.type === 'two') {
                createTwo(gameItem.x, gameItem.y);
            } else if (gameItem.type === 'three') {
                createThree(gameItem.x, gameItem.y);
            } else if (gameItem.type === 'robot') {
                createRobot(gameItem.x, gameItem.y);
            }
        }
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}