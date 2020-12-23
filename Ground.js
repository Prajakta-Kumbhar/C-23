class Ground
{
  constructor(xpos,ypos,width1,height1)
  {
    
    var ground_options = {isStatic : true}

    this.ground = Bodies.rectangle(xpos,ypos,width1,height1,ground_options)
    World.add(world,this.ground) 

    this.width = width1;
    this.height = height1;
  }

  display()
  {
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
  }
}