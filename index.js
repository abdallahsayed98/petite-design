// petite designer
function setStyle(selector,options){
    let elements=document.querySelectorAll(selector);
    // detect shadow type
    if(options.shadow_type==='hard')
    {
        options.shadow_type='0px';
    }
    else{
        options.shadow_type='15px';
    }
    elements.forEach(element => {
        // add shadow to the element 
        element.style.boxShadow= `10px 10px ${options.shadow_type} rgba(0,0,0,0.12)`;
        // set padding
        if(options.padding){
            element.style.padding='1em';
        }
        // set margin
        if(options.margin){
            element.style.margin='1em';
        }
        // set backgrond color
        if(options.backgroundColor){
            element.style.backgroundColor=options.backgroundColor;
        }
    });
}

function addEvent(selector,event,callback){
    let elements=document.querySelectorAll(selector);
    elements.forEach(element => {
        // add event listener
        element.addEventListener(event,callback);
    });
}

function hide(selector){
    let elements=document.querySelectorAll(selector);
    elements.forEach(element => {
        // hide element by display property
        element.style.display='none';
    });
}



module.exports={setStyle , addEvent , hide}