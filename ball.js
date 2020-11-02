class Ball{

constructor(x,y){   

var options ={
isStatic : false,
restitution: 0.3,
friction: 0.5,
density:1.2
}

this.x=x
this.y=y
this.paperimage=loadImage("paper.png")
this.body= Bodies.circle(x,y,20,options)
World.add(world,this.body)
}

display(){
var pos=this.body.position
var angle = this.angle
push()
translate(pos.x,pos.y)
rotate(angle)
stroke("green")
fill ("blue")
imageMode(CENTER)
image(this.paperimage,0,0,50,50)
pop()
}



}