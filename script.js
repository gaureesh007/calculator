let input = document.getElementById('input_box');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        string = input.value
        if(e.target.innerHTML == '='){
            if(input.value!=""){
                string = eval(string);
                input.value = string;
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            string = string.substring(0,string.length-1)
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string
        }
    })
})
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        button.classList.add('animate');
        setTimeout(()=>{

        },500)
    })
})