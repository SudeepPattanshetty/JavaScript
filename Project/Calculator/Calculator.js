let string =""

let buttons = document.querySelectorAll('button')
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (element) => {
        if(element.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(element.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{
            string = string + element.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});