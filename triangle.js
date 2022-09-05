let shape = {
    type: null,
    getType: function() { 
        return this.type;
     }
  };
  
  function Triangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    Triangle.prototype.type = "Triangle";
  }
Triangle.prototype = Object.create(shape);
  Triangle.prototype.constructor = Triangle;
let triangleObj = new Triangle(1,2,3);
console.log(triangleObj.getType())

  Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
  };
console.log(shape.isPrototypeOf(triangleObj));
console.log(triangleObj.getPerimeter());