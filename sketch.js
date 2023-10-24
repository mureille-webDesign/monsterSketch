let sunSize = 0;
let yPos = 0;
let angle = 0;


function setup() {
  createCanvas(400, 400);
  angleMode(degrees)
}

function draw() {
  background(194,159,114);
  
  
  fill(117, 28, 0) ;
 ellipse (100 , yPos+150, sunSize+30);
 sunSize = sunSize + 0.20;
  
  
  
  
  
  fill(166,152,109)
  ellipse( 200,320,80,10) //leg2
  ellipse( 190,300,80,10) //leg 
  ellipse( 190,310,80,10) //leg 
  
  noStroke();

  

//Head 
  fill(166,152,109)
 ellipse(204,220,160,160); //body circle 
  fill(242,214,179)
 ellipse(130,100,160,100); //beck circle
  fill(199,117,87)
  ellipse(130,100,100,100);


 
  
  
  
  
  
  

//body 
  fill(166,152,109);
 ellipse(160,106,120,120); //head cirlce 
  fill(242,214,179)
 ellipse(195,195,90,50); //1st circle small
  fill(199,117,87);
 ellipse( 209,250,109,50); //1st circle big
  fill(199,187,97);
 ellipse( 195,195,50,20); // 2nd circle stomach
 ellipse( 210,250,70,30);//2nd circle stomach big
   ellipse(170,106,40,40); //eyeline
   ellipse(170,106,80,0); //face 

  
  ellipse( 170,109,60,20) //leg 
  fill(25);
  ellipse(170,109,20,20) //eyelid
  fill(300);
  ellipse(180,105,10,10);

//hands 
  fill(166,152,109);
  translate(130,200)
  rotate(angle);
  angle = angle -0.1;
  rect(0,0,40,30); //left hands 
  rect(0,0,150,45);  //left hands 

  
  //
  translate(0,20)
  rotate(angle);
  angle = angle -0.1;
  rect(0,0,20,30);   //2nd Hand 
  rect(0,0,10,90);    //2nd hands. 

  




}
