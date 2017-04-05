var canvas1 = document.createElement('canvas');
canvas1.width = 800;
canvas1.height = 1200;
var context1 = canvas1.getContext('2d');
context1.font = "Bold 40px Arial";
context1.fillStyle = "rgba(255,0,255,1)";

var textBlock = "Good Golly! This is certianly an exciting happenstance! For sure an occasion of muesment!";

context1.fillText(textBlock, 0, 50);

var temptxt = textBlock;
if (context1.measureText(temptxt).width > canvas1.width) {
    var txtlines = [];
    //var i = 0;

    /*
    while (context1.measureText(temptxt).width > canvas1.width){
    //for (var i = 0; i < 5; i++){

        //temptxt.split(" ");  //split by space
        //temptxt.slice(0, -1);  //remove last element
        //temptxt.join(" ");

        temptxt = temptxt.split(" ").slice(0, -1).join(" ")

        //alert(context1.measureText(temptxt).width);
    }
    */
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < temptxt.split(" ").length; j++) {
            txtline[i] = "";
            while (context1.measureText(txtline[i]).width > canvas1.width) {

            }

        }
    }

    //txtlines[i] = temptxt;

}

for (var j = 0; j < txtlines.length; j++) {

    context1.fillText(txtlines[j], 0, (40 * j) + 50);
    //context1.fillText(textBlock, 0, 50);
}

var texture1 = new THREE.Texture(canvas1);
texture1.needsUpdate = true;

var textMat = new THREE.MeshBasicMaterial( {
    map: texture1,
    side: THREE.DoubleSide
});
textMat.transparent = true;