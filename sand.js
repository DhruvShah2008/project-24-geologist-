class Sand{
    constructor(x,y,r){
    var options = {
        'restitution':1.0,
        'friction':1.0,
        'density':2.0
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,(this.r-50)/2,options)
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push ();
        translate (pos.x,pos.y)
        strokeWeight(3);
        stroke ('lightred')
        fill ('black')
        ellipseMode(RADIUS)
        ellipse(0,0,this.r, this.r)
        pop ()
        
    }

}