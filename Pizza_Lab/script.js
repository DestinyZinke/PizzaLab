var buttonNames = ['Pepperoni', 'Bacon', 'Chicken', 'Olives', 'Pineapple', 'Ham', 'Mushrooms', 'Peppers', 'Onions', 'Sausage'];
var buttons = [];
var tPrice = 0;
var count = 0;
var span;
var pizza={
    toppings : [],
    size : "Small",
    price: 0
}

"<div>"+name+'<button 1 id="'+name+'Full"/><button 2 id="'+name+'left"/>'


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

function fillHome(){
    var homeDiv = document.createElement('DIV');
    homeDiv.innerHTML = "<h1><strong>Create Your Pizza</strong></h1><br><br><div id='intro'><p>Welcome to Pizza Now! The fastest pizza delivery company ever!</p><br><p>Click Order to start your experience!</p></div>"
    homeDiv.setAttribute('id', 'homeDiv');
    
    document.body.appendChild(homeDiv);
}

function contactFill(){
    var homeDiv = document.createElement('DIV');
    homeDiv.innerHTML = "<h1><strong>Contact Us</strong></h1><br><br><div id='intro'><p>Call 888-259-1529</p><br><p>Or Email us at PizzaNow@thisEmail.com</p></div>"
    homeDiv.setAttribute('id', 'homeDiv');
    document.body.appendChild(homeDiv);
}
function loadDefault(){
    var default_1 =  "<div class=default_pizza>Cheese<div class=default_price>Large &#45;10&#46;99</div><button onclick=defaultAddAll('Default_1')>Add</button></div>";
    var default_2 =  "<div class=default_pizza>Pepperoni<div class=default_price>Large &#45;10&#46;99</div><button onclick=defaultAddAll('Default_2')>Add</button></div>";
    var default_3 =  "<div class=default_pizza>Hawiian<div class=default_price>Large &#45;10&#46;99</div><button onclick=defaultAddAll('Default_3')>Add</button></div>";
    var default_4 =  "<div class=default_pizza>Meat Lovers<div class=default_price>Large &#45;10&#46;99</div><button onclick=defaultAddAll('Default_4')>Add</button></div>";
    var default_5 =  "<div class=default_pizza>Vegetarian<div class=default_price>Large &#45;10&#46;99</div><button onclick=defaultAddAll('Default_5')>Add</button></div>";
    
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

function defaultAddAll(e){
if(e == "Default_1"){
    pizza.price = 10.99;
    pizza.toppings = ['Cheese Only'];
    pizza.size = 'Large';
}
if(e == "Default_2"){
    pizza.price = 10.99;
    pizza.toppings = ['Pepperoni'];
    pizza.size = 'Large';
}
if(e == "Default_3"){
    pizza.price = 10.99;
    pizza.toppings = ['Ham', 'Pineapple'];
    pizza.size = 'Large';
}
if(e == "Default_4"){
    pizza.price = 10.99;
    pizza.toppings = ['Sausage', 'Bacon', 'Chicken'];
    pizza.size = 'Large';
}
if(e == "Default_5"){
    pizza.price = 10.99;
    pizza.toppings = ['Olives', 'Mushrooms', 'Onions', 'Peppers'];
    pizza.size = 'Large';
}

createReciept();
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

function currentPizza(){
    var pizza = document.createElement("DIV");
    pizza.innerHTML += "<img class=current_pizza_toppings src=Images/BasePizzaCrust.png />"
    pizza.width = 1000;
    pizza.height = 1000;
    
    document.body.appendChild(pizza);
    pizza.setAttribute("id", "currentPizza")   

    createToppingContainer();
    createButtonContainer();
    createSizeContainer();

    var proceed = document.createElement('BUTTON');
    proceed.innerHTML = "Proceed";
    document.body.appendChild(proceed);
    proceed.setAttribute('id', 'proceed-btn');  
    proceed.addEventListener('click', createReciept);
    
}

function createSizeContainer(){
    var sizes = document.createElement('DIV');
    sizes.innerHTML = "<select id=select><option value=Small>Small</option><option value=Medium>Medium</option><option value=Large>Large</option><option value=XL>Extra Large</option></select><button id='selectbtn' onclick=text()>Apply</button>"
    document.body.appendChild(sizes);
    sizes.setAttribute('class', 'select')
}
function createReciept(){
    console.log("Help")
    var reciept = document.createElement('DIV');
    reciept.innerHTML = "<div class='recieptList'><span class=close>X</span><p id=PizzaOrder>Thanks for your Order! <br></p></div>"
    reciept.setAttribute("id","reciept");
    reciept.setAttribute("class","reciept");
    document.body.appendChild(reciept);
    displayReciept(reciept);
}

function displayReciept(){
    console.log(pizza);
    var reciept = document.getElementById('reciept');
    document.getElementById('PizzaOrder').innerHTML += '<br>';
    document.getElementById('PizzaOrder').innerHTML += '<br>';    
    document.getElementById('PizzaOrder').innerHTML += pizza.size;
    document.getElementById('PizzaOrder').innerHTML += '<br>';
    document.getElementById('PizzaOrder').innerHTML += '<br>';
    
    document.getElementById('PizzaOrder').innerHTML += pizza.price;  
    document.getElementById('PizzaOrder').innerHTML += '<br>';
    document.getElementById('PizzaOrder').innerHTML += '<br>';
    
    
    for(var i = 0; i < pizza.toppings.length; i++){
    document.getElementById('PizzaOrder').innerHTML += pizza.toppings[i];
    document.getElementById('PizzaOrder').innerHTML += '<br>';
    }
    
    reciept.style.display = "block";
    console.log("Hits");
    span = document.getElementsByClassName("close")[0]; 
    span.onclick = function(){
    reciept.style.display = 'none';
    window.location = "index.html";
}
}

function text(elem){
    pizza.size = document.getElementById('select').value;
    console.log(pizza.size);
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
    buttons[index] = document.createElement('div');
    buttons[index].textContent = item;
    buttons[index].style.color = "#fff";
    buttons[index].style.backgroundColor = "#ff3039";
    buttons[index].style.borderRadius =  '15px ';
    buttons[index].innerHTML += "<br><br><img class=side_buttons src=Images/Full.png onclick='full(\""+item+"\")'><img class=side_buttons src=Images/Left.png onclick='left(\""+item+"\")''><img class=side_buttons src=Images/Right.png onclick='right(\""+item+"\")'>" +
    "<br><br><form><input type=radio name=double value=double onchange=doubleToppings(\""+item+"\")>Double</input><br><input type=radio value=none name=double onchange=removeDoubleToppings(\""+item+"\"); checked=checked>No Double</input></form>";
    buttons[index].setAttribute('class', 'btn');
    container.appendChild(buttons[index]);
//    buttons[index].addEventListener('click', btnClicked);
  }
  
  function doubleToppings(e){
    count += 1;
    pizza.price += 1;
    checkPrice();
    doubleToppingsElem(e)
    }

  function doubleToppingsElem(e){
    console.log('hits')
    document.getElementById('toppings').innerHTML = "";
    var index = pizza.toppings.indexOf(e);
    if(index != -1) {
        pizza.toppings.splice(index, 1, e+"X2");
    }

    for(var i = 0; i < pizza.toppings.length; i++){
       document.getElementById("toppings").innerHTML += pizza.toppings[i] + "<br><br>";
    }
  }

  function removeDoubleToppings(e){
    count-=1;
    pizza.price -=1;
    checkPrice();
    removeDoubleToppingsElem(e);
  }

  function removeDoubleToppingsElem(e){
    document.getElementById('toppings').innerHTML = "";
    var index = pizza.toppings.indexOf(e +"X2");
      console.log(index)
    if(index != -1) {
        pizza.toppings.splice(index, 1, e);
    }

    for(var i = 0; i < pizza.toppings.length; i++){
       document.getElementById("toppings").innerHTML += pizza.toppings[i] + "<br><br>";
    }
  }
  function full(e){
      var tempTopping = e;
      side = e + "Full.png";
      var currentClass = "top_pizza_toppings";
      if(document.getElementById(side) != undefined){
          removeTopping(side);
          removeToppingElem(e);
      }else if(document.getElementById(side) == undefined){
        var t1 = e +"Left.png";
        var t2 = e+"Right.png";
        checkallToppings(t1, t2, e);
        addTopping(side, tempTopping, currentClass);
      }
  }

  function left(e){
    var tempTopping = e;
    side = e+"Left.png" 
    var currentClass = "left_pizza_toppings";
    if(document.getElementById(side) != undefined){
        removeTopping(side);
        removeToppingElem(e);
    }else if(document.getElementById(side) == undefined){
        var t1 = e +"Full.png";
        var t2 = e+"Right.png";
        checkallToppings(t1, t2, e);
         addTopping(side, tempTopping, currentClass);
    }
  }

  function right(e){
      side = e+"Right.png";
      var currentClass = "right_pizza_toppings";
    if(document.getElementById(side) != undefined){
        removeTopping(side);
        removeToppingElem(e);
    }else if(document.getElementById(side) == undefined){
        var t1 = e +"Full.png";
        var t2 = e+"Left.png";
        checkallToppings(t1, t2, e);
        addTopping(side, e, currentClass);
    }
  }


  function addTopping(e, thisTopping, currentClass) {
    document.getElementById('toppings').innerHTML += thisTopping + "<br><br>";
    pizza.toppings.push(thisTopping);
    document.getElementById('currentPizza').innerHTML += "<img id=" + e + " class=" + currentClass + " src= Images/"+ e+ " />";
    count +=1;
    pizza.price +=1;
    checkPrice();
  }

  function checkallToppings(t1, t2, e, d1, d2){
    if(document.getElementById(t1) != undefined){
        removeTopping(t1);
        removeToppingElem(e);
    }
    if(document.getElementById(t2) != undefined){
        removeTopping(t2);
        removeToppingElem(e);
    
    }
  }
  function removeTopping(e){
    var elem = document.getElementById(e);
    elem.remove();
  }

  function removeToppingElem(e){
    document.getElementById('toppings').innerHTML = "";
    var index = pizza.toppings.indexOf(e);
    if(index != -1) {
        pizza.toppings.splice(index, 1);
    }

    for(var i = 0; i < pizza.toppings.length; i++){
       document.getElementById("toppings").innerHTML += pizza.toppings[i] + "<br><br>";
    }

    pizza.price -=1;
    count -=1;

    console.log("count: " + count);
    checkPrice();
    document.getElementById('totalPrice').innerHTML = "&#36;" + pizza.price + ".00";
    
     
}
  function checkPrice(){
    if(count==1){
        pizza.price=0;
    }else if(count==5 || count == 4){
        pizza.price=3;
        
    }

    if(count == 5){
        displayDeal();
    }

    document.getElementById('totalPrice').innerHTML = "&#36;" + pizza.price + ".00";
    console.log("count:" + count)
  }

  function displayDeal(){
      console.log("Deal")
    var deal = document.createElement('DIV');
    deal.innerHTML = "<p>Special</p><br><p>5 toppings only 3 dollars</p>"
    document.body.appendChild(deal);
    deal.setAttribute('id', 'deal')
    deal.style.display = "block";
}   

createHTML();


