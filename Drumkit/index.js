var numberofdrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofdrums;++i){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerHTML=this.innerHTML;
        make_sound(innerHTML);
        animation(innerHTML);
    });
    document.addEventListener("keypress",function(event){
        make_sound(event.key);
        animation(event.key);
    });
    function make_sound(currentkey){
        switch (currentkey) {
            case "w":
                var tom = new Audio("sounds/tom-1.mp3");
                tom.play();
                
                break;
                case "w":
                var tom = new Audio("sounds/tom-1.mp3");
                tom.play();
                break;
                case "a":
                var tom=new Audio("sounds/tom-2.mp3");
                tom.play();
                break;
                case "s":
                var tom=new Audio("sounds/tom-3.mp3");
                tom.play();
                break;
                case "d":
                var tom=new Audio("sounds/tom-4.mp3");
                tom.play();
                break;
                case "j":
                var tom=new Audio("sounds/crash.mp3");
                tom.play();
                break;
                case "k":
                var tom=new Audio("sounds/snare.mp3");
                tom.play();
                break;
                case "l":
                var tom=new Audio("sounds/kick-bass.mp3");
                tom.play();
                break;
                default: console.log(innerHTML);
        
        }
       
    }
    function animation(key){
        document.querySelector("."+key).classList.add(".pressed");
        setTimeout(function(){
            document.querySelector("."+key).classList.remove(".pressed");
        },200);
           
    }
}