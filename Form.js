class Form {

  constructor() {
                                    
    this.input = createInput("").attribute("placeholder", "Enter you player nickname");
    this.playButton = createButton("Play the most amazing car-racing game ever!");
    this.titleImage = createImage("./assets/title.png", "gameTitle");

    this.greeting = createElement("h2");

  } 

  setElementsPosition(){

    this.titleImage.position(100, 120);
    this.playButton.position(width / 2, height / 2);
    this.greeting.position((width / 2) - 300, (height / 2) - 300);
    this.input.position((width / 2) - 110, (height / 2) - 80);

  }

  hide(){

    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();

  }

  handleMousePressed(){

    this.playButton.mousePresses(()=>{

      this.input.hide();
      this.playButton.hide();

      var message = ` Hello ${this.input.value()} </br>Please wait for another player to join...`;

      this.greeting.html(message);

    })


  }

  display(){

    this.setElementsPosition();
    this.handleMousePressed();
  
  }

}


