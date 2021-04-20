var dog , happyDog
var foodS,foodStock
var foodImage,food
var feedthepup, moreFood;

function preload()
{
  //load images here
  
  dogI = loadImage("images/dogImg.png")
  dogH = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(900, 500);
  database = firebase.database();

   food = new Food(200,200)


  foodStock = database.ref('food')
  foodStock.on("value",function(data){
   foodS = data.val();
   food.foodStock = foodS

  })
   dog = createSprite(650,250,10,10)
  dog.addImage(dogI)
  dog.scale =0.3
  
  feedthepup = createButton("Feed The Dog")
  feedthepup.position(800,95)
  feedthepup.mousePressed(feedDog)

  moreFood = createButton("Add Food")
  moreFood.position(700,95)
  moreFood.mousePressed(addFood)
}


function draw() {  
background(47,80,139)
  drawSprites();
  //add styles here
  
  textSize(20)
  
  text("Food Remaining:"+ foodS ,100,100)

    fill(255,255,254)
    textSize(15)
    if(lastFed>=12){
      text("Last Feed" +lastFed%12 + "PM", 350,30)
    }else if (lastFed == 0){
      text("Last feed: 12 AM" ,350,30)
    }else{
      text("Last feed:" +lastFed+ "AM", 350,30)
    }
 
  

    fedTime = database.ref('feedTime')
    fedTime.on("value",function(data){
      lastFed = data.val()
    });






food.display();
}
function readStock(data){
   foodS = data.val();
   console.log(foodS)
}

function feedDog(){
  dog.addImage(dogH)

  food.updateFoodStock(food.getFoodStock()-1);
  database.ref('/').update({
    food:food.getFoodStock(),
    fedTime:hour()
  })

}
function addFood(){
  console.log(foodS)
  foodS++
  database.ref('/').update({
    
    food:foodS    
  })
  console.log(foodS)
}
