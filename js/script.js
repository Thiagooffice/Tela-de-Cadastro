class Validator{
    constructor(){
        this.validations = [
            'data-min-lenth',

        ]
    }
    // iniciar a validação de todos os camps
    validate(form){
        //pegar os inputs
        let inputs = form.getElementsByTagName('input')

        //htmlcolletion --> array
        let inputArrays = [...inputs]
        //loop nos inputs e validação meadiante ao que for encontrado
        inputsArray.forEach(function(input){
            
            //loop em todas as valdações existentes
            for(let i = 0 ; this.validations.length > i ; i++){
                //verifica se a validação atual existe no input
                if (input.getAttribute(this.validations[i])!=null) {
                
                    let method = this.validations[i].replace('data-','').replace('-','')
                }
            }
        }, this)
    }
    //verifica se um input tem um numero minimo de caracteres
    minlength(){
        
    }
}


let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let Validator = new Validator()

//evento que dispara as validações
submit.addEventListener('click', function(e){
    e.preventDefault()

    Validator.Validator(form)
})