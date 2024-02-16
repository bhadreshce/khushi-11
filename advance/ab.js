abstract class A {

    constructor() {
       
    }

    abstract add()
}

class B extends A { 
    n1
    n2
    constructor(a, b) { 
        super()
        this.n1 = a
        this.n2 = b
    }

    add() { 
        console.log(this.n1 +this.n2);
        
    }
}