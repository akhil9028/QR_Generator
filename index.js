
$("h3").hide();

  const imgg=document.querySelector(".image"),
     qrInput=document.querySelector(".inp");



document.querySelector(".but").addEventListener("click",function(){

    let qrvalue= qrInput.value;

    var newc=this;
    newc.classList.add("pressed");

    setTimeout(function(){

        newc.classList.remove("pressed");

        $("h3").show();
      } , 100 );


        imgg.src= 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=+'+qrvalue;
 
       console.log(qrvalue);

    });




