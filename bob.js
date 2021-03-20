class Bob {
    constructor(x,y,radius) {
      var options = {
          //isStatic: true
          retitution: 1.2,
          density: 0.8,
          friction: 0
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      ellipse(pos.x, pos.y, this.radius);
    }
  };