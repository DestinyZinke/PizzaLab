var buttonNames = ['Pepperoni', 'Bacon', 'Grilled Chicken', 'Olives', 'Pineapple', 'Canadian Bacon', 'Anchovies', 'Peppers', 'Onions', 'Extra Cheese'];
var buttons = [];
var tPrice = 0;
var count = 0;
var pizza={
    toppings : [],
    size : "Default",
    price: 0
}



function createHTML(){
    var reset = "<link rel=stylesheet href=reset.css>"
    var css = "<link rel=stylesheet href=style.css>";
    document.head.innerHTML += reset + css;
    navBar();
   // createPizzas();
}

function navBar(){
    var nav = document.createElement("NAV");
    nav.setAttribute("id","navBar"); 
    nav.innerHTML += "<ul id=navList><li id=navCompany class=navItem><a href=index.html>" +
    "Pizza Now</a></li><li class=navItem><a href=index.html>Home</a></li><li class=navItem><a href=default.html>Order</a></li><li class=navItem><a href=contact.html>Contact Us</a></li></ul>"
    document.body.appendChild(nav);
}


function createPizzas(){
    var pizza = document.createElement("DIV");
    pizza.innerHTML = "<canvas id=small_pizza></canvas><canvas id=medium_pizza></canvas><canvas id=large_pizza></canvas>" +
    "<canvas id=extra_large_pizza></canvas>"
    pizza.width = 1000;
    pizza.height = 1000;
    
    document.body.appendChild(pizza);
    pizza.setAttribute("id", "pizzaList")   


    createSmallPizza();
    createMedPizza()
    createLargePizza();
    createExtraLargePizza();
}

function createPizzaSizes(){
    var small_choice = document.createElement("DIV");
        small_choice.innerHTML = "Small Pizza";
        document.body.appendChild('small');
}

function createSmallPizza(){
    var spCanvas = document.getElementById('small_pizza');
    var spCtx = spCanvas.getContext("2d");
    
    spCanvas.width = 250;
    spCanvas.height = 300;
    spCtx.beginPath();
    spCtx.arc(100, 75, 50,0, 2*Math.PI);
    spCtx.fillStyle = '#D4BB75';
    spCtx.fill();
    document.body.appendChild(spCanvas);

    
}

function createMedPizza(){
    var mpCanvas = document.getElementById('medium_pizza');
    var mpCtx = mpCanvas.getContext("2d");
    
    mpCanvas.width = 250;
    mpCanvas.height = 300;
    mpCtx.beginPath();
    mpCtx.arc(125, 100, 75,0, 2*Math.PI);
    mpCtx.fillStyle = '#D4BB75';
    mpCtx.fill();
    document.body.appendChild(mpCanvas);
}

function createLargePizza(){
    var lpCanvas = document.getElementById('large_pizza');
    var lpCtx = lpCanvas.getContext("2d");
    
    lpCanvas.width = 350;
    lpCanvas.height = 300;
    lpCtx.beginPath();
    lpCtx.arc(150, 125, 100,0, 2*Math.PI);
    lpCtx.fillStyle = '#D4BB75';
    lpCtx.fill();
    document.body.appendChild(lpCanvas);
}

function createExtraLargePizza(){
    var elpCanvas = document.getElementById('extra_large_pizza');
    var elpCtx = elpCanvas.getContext("2d");
    
    elpCanvas.width = 350;
    elpCanvas.height = 300;
    elpCtx.beginPath();
    elpCtx.arc(175, 150, 125,0, 2*Math.PI);
    elpCtx.fillStyle = '#D4BB75';
    elpCtx.fill();
    document.body.appendChild(elpCanvas);
}

function currentPizza(){
    var pizza = document.createElement("DIV");
    pizza.innerHTML = "<canvas id=current_pizza><button></button></canvas>"
    pizza.width = 1000;
    pizza.height = 1000;
    
    document.body.appendChild(pizza);
    pizza.setAttribute("id", "currentPizza")   

    var canvas = document.getElementById('current_pizza');
    var ctx = canvas.getContext("2d");
    
    canvas.width = 250;
    canvas.height = 300;
    ctx.beginPath();
    ctx.arc(150, 125, 100,0, 2*Math.PI);
    ctx.fillStyle = '#D4BB75';
    ctx.fill();
    document.body.appendChild(canvas);

    createToppingContainer();
    createButtonContainer();

    var proceed = document.createElement('BUTTON');
    proceed.innerHTML = "Proceed";
    document.body.appendChild(proceed);
    proceed.setAttribute('id', 'proceed-btn')
    proceed.addEventListener('click', loadRecipt);
    
}

function loadRecipt(evt){
    window.location = "order.html";

}

function createToppingContainer(){
    var tText = document.createElement('DIV');
    tText.innerHTML = "<div>Current Toppings</div><div id=toppings></div>";
    document.body.appendChild(tText);
    tText.setAttribute('id', 'topping_list');

    var total = document.createElement('DIV');
    document.body.appendChild(total);
    total.setAttribute('id', 'totalPrice'); 
}

function createButtonContainer(){
    var container = document.getElementById('container');
    var buttons = document.createElement('DIV'); 
    buttonNames.forEach(buildButton);
  }


  
  function buildButton(item, index, arr){

    
    console.log("button " + item + " at index " + index + ' created.');
    buttons[index] = document.createElement('div');
    buttons[index].textContent = item;
    buttons[index].setAttribute('class', 'btn');
    container.appendChild(buttons[index]);
    buttons[index].addEventListener('click', btnClicked);
  }
  
  function btnClicked(evt) {
    console.log(evt.target.innerText + " clicked");
    var temp = evt.target.innerText;
    console.log(temp);
    document.getElementById('toppings').innerHTML += temp + "<br><br>";
    pizza.toppings.push(temp);
    console.log(document.getElementById('topping_list').innerHTML);
    checkPrice();
    console.log(pizza.price);
  }

  function checkPrice(){
    count +=1;
    if(count==1){
        pizza.price=0;
    }else if(count==5){
        pizza.price=3;
    }else{
        pizza.price +=1;
    }

    document.getElementById('totalPrice').innerHTML = "&#36;" + pizza.price + ".00";
  }

createHTML();


