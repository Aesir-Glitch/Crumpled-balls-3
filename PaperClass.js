class Paper {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.8,
          friction: 0.6,
          density: 2.6
              }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("paper.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
            }
  display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
  }
};        