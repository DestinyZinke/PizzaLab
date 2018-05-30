var buttonNames = ['Pepperoni', 'Bacon', 'Grilled Chicken', 'Olives', 'Pineapple', 'Canadian Bacon', 'Anchovies', 'Peppers', 'Onions', 'Extra Cheese'];
var buttons = [];
var tPrice = 0;
var count = 0;
var span;
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

function loadDefault(){
    var default_1 =  "<div class=default_pizza>Cheese<div class=default_price>Large &#45;10&#46;99</div><button>Add</button></div>";
    var default_2 =  "<div class=default_pizza>Pepperoni<div class=default_price>Large &#45;10&#46;99</div><button>Add</button></div>";
    var default_3 =  "<div class=default_pizza>Hawiian<div class=default_price>Large &#45;10&#46;99</div><button>Add</button></div>";
    var default_4 =  "<div class=default_pizza>Meat Lovers<div class=default_price>Large &#45;10&#46;99</div><button>Add</button></div>";
    var default_5 =  "<div class=default_pizza>Vegetarian<div class=default_price>Large &#45;10&#46;99</div><button>Add</button></div>";
    
    var defaults = document.createElement('DIV');
    defaults.innerHTML = default_1 + default_2 + default_3 + default_4 + default_5;
    defaults.setAttribute('id', 'defaults');
    
    document.body.appendChild(defaults);

    var customBtn = document.createElement('BUTTON');
    customBtn.innerHTML = "Create Your Own";

    document.body.appendChild(customBtn);

    customBtn.setAttribute('id','customBtn');
    customBtn.addEventListener('click',customRedirect);
}

function customRedirect(){
    window.location = 'custom.html';
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
    createSizeContainer();

    var proceed = document.createElement('BUTTON');
    proceed.innerHTML = "Proceed";
    document.body.appendChild(proceed);
    proceed.setAttribute('id', 'proceed-btn')
    proceed.addEventListener('click', createReciept);
    
}

function createReciept(){
    var reciept = document.createElement('DIV');
    reciept.innerHTML = "<div class='recieptList'><span class=close>X</span><p id=PizzaOrder>Thanks for your Order! <br></p></div>"
    reciept.setAttribute("id","reciept");
    reciept.setAttribute("class","reciept");
    document.body.appendChild(reciept);
    displayReciept();
}

function displayReciept(){
    var reciept = document.getElementById('reciept');
    //document.getElementById.innerHTML += pizza.size;
    //document.getElementById.innerHTML +=<br>;
    document.getElementById('PizzaOrder').innerHTML += pizza.price;  
    
    pizza.toppings.forEach(addTopping);
    reciept.style.display = "block";
    console.log("Hits")
    span = document.getElementsByClassName("close")[0]; 
    span.onclick = function(){
    reciept.style.display = 'none';
    window.location = "index.html";
}
}



function addTopping(item,index,arr){
    document.getElementById("PizzaOrder").innerHTML += pizza.toppings[index];
    console.log(pizza.price + "dollars");
    reciept.style.display = "block";
}

function redirectHome(){
    reciept.style.display = "none";
    window.location = 'index.html';
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
    var container = document.createElement("DIV");
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
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
        displayDeal();
    }else{
        pizza.price +=1;
    }

    document.getElementById('totalPrice').innerHTML = "&#36;" + pizza.price + ".00";
  }

  function displayDeal(){
    var deal = document.createElement('DIV');
    deal.innerHTML = "<p>Special</p><br><p>5 toppings only 3 dollars</p>"
    document.body.appendChild(deal);
    document.setAttribute('id', 'deal')
  deal.style.display = "block";
}   

createHTML();


