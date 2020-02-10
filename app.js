let readbtn = document.querySelector(".read");
let closebtn = document.querySelector(".close");

// let modal = document.querySelector(".modal");


 readbtn.addEventListener( "click", open);
 closebtn.addEventListener( "click", close);

   function open(e) {
     document.querySelector(".modal").style.display = " block";
     document.querySelector(".container").style.opacity = 0.3;
   }

   function close(){
     document.querySelector(".modal").style.display = " none";
     document.querySelector(".container").style.opacity = 1;
        
   }