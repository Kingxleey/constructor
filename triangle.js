const shape = {
    type: 'triangle',
    getType: function() { 
        return this.type
     }
  };
  
  function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  Triangle.prototype = shape;
  Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
  };
  Triangle.prototype.constructor = Triangle;