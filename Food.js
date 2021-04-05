class Food{
    constructor(){
        this.foodStock
        this.lastFed
        this.image = loadImage("images/Milk.png")
    
    }
    
    
   
    display(){
      

     imageMode (CENTER)
      image(this.image,720,220,70,70)

      if(this.foodStock != 0 ){
          for(var i = 0;i<this.foodStock;i++){
            
            image(this.image,50,50)
           
         }
      }
    }
}