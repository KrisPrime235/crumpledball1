class CrPaper{
    constructor(x,y){
       var options = {
           'isStatic':false,
           'restitution':0.3,
           'friction':0.5,
           'density':1.2
       }
       this.body = Bodies.circle(x,y, 40, options)
       this.radius = 40;     

       World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        push();
        ellipseMode(RADIUS);
        fill(255,255,0);
        ellipse(0,0,this.radius, this.radius);
        pop();
      }
}

//now check
//the class got ended
//OH
//nope still not working
//i got it
// chck spelling of constructor :D :d
//ah yes
//my bad
//its working
// now lets add the last part 
// making ball jump whne uparrow is preseed
