/*
converting obj's using python script

paste into terminal:

python /Users/gh7337ju/Desktop/three.js-master/utils/converters/obj/convert_obj_three.py -i /Users/gh7337ju/Desktop/book.obj -a center -t ascii -o /Users/gh7337ju/Desktop/book2.js

python /Users/gh7337ju/Desktop/three.js-master/utils/converters/obj/convert_obj_three.py -i /Users/gh7337ju/Desktop/skybox2.obj -t ascii -o /Users/gh7337ju/Desktop/skybox2.js
*/

var loader = new THREE.JSONLoader();
var skybox, cannon, book, knife, wall, wallDec;
var pause = false;
var timerO = 0;

var loadbg = function(geometry){
    skybox = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('models/skybox2.jpg')
    }));
    
    scene.add( skybox );
    //skybox.rotation.y = 1.57;
    //skybox.rotation.y = 0.785;
    skybox.rotation.y = 3.14;
    skybox.scale.set(2, 2, 2);
    
    skybox.menuItem = false;
}

var loadcannon = function(geometry){
    cannon = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('models/cannon_map.jpg'),
        color: 0x6688ff
    }));
    
    scene.add( cannon );
    cannon.rotation.y = -1.75;
    cannon.position.y = -10;
    cannon.position.x = 30;
    cannon.position.z = -10;
    //cannon.scale.set(0.5, 0.5, 0.5);
    
    cannon.menuItem = true;
    cannon.description = "";
}

var loadbook = function(geometry){
    book = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('models/book_tex.jpg'),
        color: 0x6688ff
    }));
    
    scene.add( book );
    book.rotation.y = -2.75;
    book.rotation.z = -1.55;
    book.position.y = 10;
    book.position.x = 30;
    book.position.z = -10;
    //book.scale.set(0.5, 0.5, 0.5);
    
    book.menuItem = true;
    book.description = "";
}

var loadknife = function(geometry){
    knife = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('models/woodknife_tex.jpg'),
        color: 0x6688ff
    }));
    
    scene.add( knife );
    //knife.rotation.y = -2.75;
    knife.rotation.z = -1.55;
    knife.position.y = 30;
    knife.position.x = 30;
    knife.position.z = -10;
    knife.scale.set(3, 3, 3);
    
    knife.menuItem = true;
    knife.description = "";
}

var loadwall = function(geometry){
    wall = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        //color: 0x6688ff
        map: THREE.ImageUtils.loadTexture('models/wall.png'),
        transparent: true
    }));
    
    scene.add( wall );
    wall.rotation.y = -1.57;
    wall.position.x = 0;
    wall.position.z = 0;
    wall.scale.set(8, 14, 8);
    
    wall.menuItem = false;
    
    
    wallDec = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        //color: 0xffffff,
        map: THREE.ImageUtils.loadTexture('models/info_main.png'),
        transparent: true,
        alphaTest: 0.35
        
    }));
    
    scene.add( wallDec );
    wallDec.rotation.y = -1.57;
    wallDec.position.x = 6;
    wallDec.position.z = 14;
    wallDec.scale.set(7, 7, 7);
    
    wallDec.menuItem = false;
}

loader.load( "models/skybox2.js", loadbg );
loader.load( "models/woodknife.js", loadknife );
loader.load( "models/book.js", loadbook );
loader.load( "models/FCannon.js", loadcannon );
loader.load( "models/wall.js", loadwall );


function anim(obj) {
    timerO++;
    if (!pause) {
        if (obj) {
        //obj.position.y -= (Math.random()* Math.sin(timerO/24) /20) ;
        //obj.rotation.y += .025;
        }
    }
}