abstract class A {

    constructor() {
       
    }

    abstract add():void
}

class B extends A { 
    n1: number
    n2:number
    constructor(a, b) { 
        super()
        this.n1 = a
        this.n2 = b
    }

    add() { 
        console.log(this.n1 +this.n2);
        
    }
}