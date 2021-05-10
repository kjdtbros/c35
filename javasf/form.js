class Form{
    constructor(){
        this.input=createInput("plese enter yor name")
        this.button=createButton("submit")
    }
    display(){
        this.input.position(450,300)
        this.button.position(450,350)
    }
}
