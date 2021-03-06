setup = () => {

    createCanvas(720, 450);
    background(218, 247, 166);
    
    heading();
    firstLine();
    secondLine();
    thirdLine();

    textOne();
    textTwo();
    textThree();
    textFour();
    textFive();
    textSix();
    textSeven();
    textEight();  
     
 }
 
firstLine = () => {
    rect(30, 130, 55, 55); //1
    rect(85, 130, 55, 55); //2
    rect(140, 130, 55, 55); //3
}

secondLine = () => {
    rect(30, 185, 55, 55); //4
    rect(85, 185, 55, 55); //5
    rect(140, 185, 55, 55); //6
}

thirdLine = () => {
    rect(30, 240, 55, 55); //7
    rect(85, 240, 55, 55); //8
    rect(140, 240, 55, 55); //9
}

heading = () => {
    textSize(32);
    text('Number Puzzle', 10, 70);
}

textOne = () => {
    textSize(30);
    text('1', 49, 170);
}

textTwo = () => {
    textSize(30);
    text('2', 100, 170);
}

textThree = () => {
    textSize(30);
    text('3', 157, 170);
}

textFour = () => {
    textSize(30);
    text('4', 50, 223);
}

textFive = () => {
    textSize(30);
    text('5', 102, 223);
}

textSix = () => {
    textSize(30);
    text('6', 159, 223);
}

textSeven = () => {
    textSize(30);
    text('7', 49, 275);
}

textEight = () => {
    textSize(30);
    text('8', 102, 275);
}