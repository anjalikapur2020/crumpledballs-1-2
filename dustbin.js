class Dustbin{

constructor(x,y,w,h){   

var options ={
isStatic : true,
}

this.x=x
this.y=y
this.w=w
this.h=h
this.dustbinimage= loadImage("dustbingreen.png")
this.body=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
}

display(){

var pos = this.body.position
rectMode(CENTER)

rect(this.x,this.y,this.w,this.h)

imageMode(CENTER)
image(this.dustbinimage,575,600,150,200)
}


}