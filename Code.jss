class Calculator{
    constructor(previouscal,currentcal){
        this.previouscal = previouscal
        this.currentcal = currentcal
        this.clear()
    }
    clear(){//for clearing//
        this.pre_cal = ''
        this.cur_cal = ''
        this.operation= undefined

    }
    delete(){//
        this.cur_cal = this.cur_cal.toString().slice(0,-1)

    }
    shownumber(number){//event after user click on number buttons
        if( number === '.' && this.cur_cal.includes('.')) return
        this.cur_cal  = this.cur_cal.toString() + number.toString()

    }
    selectoperation(operation){//selection of the operaion
        if(this.cur_cal === '')return
        if(this.pre_cal !== ''){
            this.compute()
        }
        this.operation = operation
        this.pre_cal = this.cur_cal
        this.cur_cal = ''
    }   
  compute()
    {//taking values and computing them and then showing a singular value, simply for 'equal' sign
        let calculate
        const prev = parseFloat(this.pre_cal) 
        const next = parseFloat(this.cur_cal)
        if (isNaN(prev) || isNaN(next)) return
        switch(this.operation){
            case '+':
                calculate = prev + next
                break
            case '*':
                calculate = prev * next
                break
            case '-':
                calculate = prev - next
                break
            case '÷':
                calculate = prev/next
                break
            default:
                return                
        }
        this.cur_cal = calculate
        this.operation = undefined
        this.pre_cal = ''

    }
    update()
    {//updating screen
        if(this.operation){
        this.currentcal.innerText = this.cur_cal 
        this.previouscal.innerText = this.pre_cal + this.operation}
        else{  this.currentcal.innerText = this.cur_cal
            this.previouscal.innerText = this.pre_cal

        }
    }
}
const numberutton = document.querySelectorAll('[data-number]')
const operationbutton = document.querySelectorAll('[data-operation]')
const clearbutton = document.querySelector('[data-all-clear]')
const equalbutton = document.querySelector('[data-equal]')
const deletebutton = document.querySelector('[data-del]')
const previouscal = document.querySelector('[data-pre-cal]')
const currentcal = document.querySelector('[data-cur-cal]')

const calculator = new Calculator(previouscal,currentcal)

numberutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.shownumber(button.innerText)
        calculator.update()
        })
})
operationbutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectoperation(button.innerText)
        calculator.update()
    })
})
equalbutton.addEventListener('click', button => {
    calculator.compute()
    calculator.update()
  })
  
  clearbutton.addEventListener('click', button => {
    calculator.clear()
    calculator.update()
  })
  
  deletebutton.addEventListener('click', button => {
    calculator.delete()
    calculator.update()
  })



