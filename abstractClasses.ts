abstract class CreditBase {
    constructor() {
        
    }
    save():void{
        console.log("Saved")
    }
    abstract calculate():void
}

class ConsumerCredit extends CreditBase {
   
    constructor() {
        super();
    }

    calculate(): void {
        console.log("Calculated according to consumer credit ");
    }
}

class MortgageCredit extends CreditBase {
   
    constructor() {
        super();
    }

    calculate(): void {
        console.log("Calculated according to morgage credit ");
    }
    anotherOperation(){

    }
}

let consumerCredit = new ConsumerCredit()
consumerCredit.calculate()
consumerCredit.save()

let mortgageCredit = new MortgageCredit()
mortgageCredit.calculate()
mortgageCredit.save()
mortgageCredit.anotherOperation()

let credit : CreditBase
credit = new ConsumerCredit()

credit = new MortgageCredit()