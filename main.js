var canvas=new fabric.Canvas(my_canvas);
var player_x=10;
var player_y=10;
var block_image_width=30;
var block_image_height=30;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey==true && keyPressed=="80"){
		console.log("P and shift pressed together");
		block_image_width=block_image_width+10;
		block_image_height=block_image_height+10;
		document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
	}
    if(e.shiftKey==true && keyPressed=="77"){
        console.log("M and shift are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=="38"){
        console.log("up arrow is pressed");
        up();
    }
    if(keyPressed=="40"){
        console.log("down arrow is pressed");
        down();
    }
    if(keyPressed=="37"){
        console.log("left arrow is pressed");
        left();
    }
    if(keyPressed=="39"){
        console.log("right arrow is pressed")
        right();
    }


}