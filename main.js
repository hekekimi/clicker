
let object = document.getElementById("klikkaa");

object.addEventListener("click",()=> makeFood());

let kakku = document.getElementById("kakkuvalinta");

kakku.addEventListener("click", buyCake);

let taco = document.getElementById("taco");

taco.addEventListener("click",buyTaco);

let shortcake = document.getElementById("shortcake");

shortcake.addEventListener("click",buyShortCake);

let naytto = document.getElementById("click_naytto");


let klikkaukset = 0;

let rahat = 0;

let lisays = 2;

let raha_naytto = document.getElementById("rahat");

let klikkaus_aani = document.getElementById("klikkaus");

let rate = document.getElementById("rate");

let osto_aani = document.getElementById("osto");

let ilmoitukset = document.getElementById("ilmoitukset");

let play = document.getElementById("play");

play.addEventListener("click",startGame);

let onkoOstettuKakku = false;

let onkoOstettuTaco = false;

let onkoOstettuShortcake = false;

let cashRate = 0.2;

let interval = 1000;

const KAKKU_HINTA = 200;

const TACO_HINTA = 500;

const SHORTCAKE_HINTA = 1000;





function makeCash()
{

    rahat += cashRate;
    upDateCash();
    goToVacation();
}






function startGame()
{
    klikkaus_aani.play();
    play.remove();
    naytto.innerHTML = "Clicks 0 " ;
    raha_naytto.innerHTML = " Cash 0";
    object.style.display = "block";
    rate.innerHTML = "Cash rate: 0"
    
    setInterval(payVAT,50000);
    setInterval(makeCash,interval);

}

function upDateCash()
{
    raha_naytto.innerHTML = `Cash ${rahat.toFixed(2)} $`;



}





function makeFood()
{

    klikkaus_aani.play();
    object.classList.add("vibrate");
    


    
    klikkaukset ++;
    rahat += lisays;
    naytto.innerHTML = "Clicks: " + klikkaukset;
    
    upDateCash();
    rate.innerHTML = "Cash rate:" + cashRate +" $ / s";
    
    //poista tärinä
    setTimeout(function()
        {
        object.classList.remove("vibrate");
    } ,200);//aika
    

    let kolikko = document.createElement("img");
    kolikko.className ="lentavat";
    kolikko.src = "images/kolikko.png";
    //kolikoiden alueiden säätö
    kolikko.style.left = Math.random() * 10 + 45+ "%";
    kolikko.style.top = Math.random() * 10 + 30+"%";
    document.getElementById("gameContainer").appendChild(kolikko);
    //kolikon himmennnts vähitellen ja poisto
    setTimeout(function(){
        kolikko.style.opacity = "0";
        kolikko.style.transition = "opacity 0.5 ease";
        setTimeout(function(){
            kolikko.remove();
        },1000)
    },500)
    haveMoneyorNot();
    getBonus();
    

}



function haveMoneyorNot()  
    {
    if (rahat >= KAKKU_HINTA && !onkoOstettuKakku)
        {
        kakku.style.filter="none";
        document.getElementById("kakkuteksti").style.color ="crimson";
        kakku.style.cursor = "pointer";
    
        }

   

    if (rahat >= TACO_HINTA && !onkoOstettuTaco)
        {
        taco.style.filter="none";
        document.getElementById("tacoteksti").style.color ="crimson";
        taco.style.cursor = "pointer";
        
        }
        
    if (rahat >= SHORTCAKE_HINTA && !onkoOstettuShortcake)
        {
        shortcake.style.filter="none";
        document.getElementById("shortcake_teksti").style.color ="crimson";
        shortcake.style.cursor = "pointer";
        
        }
       

    }

// ostot
function buyCake()
{
    if(rahat >= KAKKU_HINTA && !onkoOstettuKakku)
        {

            
            rahat -=200;
            upDateCash();
            object.src = "images/cake.png"
            lisays = 5;
            cashRate = 0.5;
            onkoOstettuKakku = true;
            osto_aani.play();
            
        
        }
    

   
    if(onkoOstettuKakku)    // voi vaihtaa takaisin jos on kerran ostettu

    {
        object.src = "images/cake.png"
        lisays = 5;
        cashRate = 0.5;
        klikkaus_aani.play();
    }

  
}

function buyTaco()
    {
        if(rahat >= TACO_HINTA && !onkoOstettuTaco)

            {
    
            
                rahat -=500;
                upDateCash();
                object.src = "images/taco.png"
                lisays = 7;
                cashRate = 0.8;
                onkoOstettuTaco = true;
                osto_aani.play();
            
            }


        if(onkoOstettuTaco) // voi vaihtaa takaisin jos on kerran ostettu
            {
                object.src = "images/taco.png"
                lisays = 7;
                cashRate = 0.8;
                klikkaus_aani.play();

            }




    }



function buyShortCake()


{
    if(rahat >= SHORTCAKE_HINTA && !onkoOstettuShortcake)

        {

        
            rahat -=1000;
            upDateCash();
            object.src = "images/shortcake.png"
            lisays = 10;
            cashRate = 1;
            onkoOstettuShortcake = true;
            osto_aani.play();
        
        }


    if(onkoOstettuShortcake) // voi vaihtaa takaisin jos on kerran ostettu
        {
            object.src = "images/shortcake.png"
            lisays = 10;
            cashRate = 1;
            klikkaus_aani.play();

        }




}







function payVAT()
{
    let alviton = rahat/1.14;
    let alv = rahat-alviton;
    ilmoitukset.innerHTML = `You had to pay ${alv.toFixed(2)} $ VAT!`;
    
        
    
    rahat -= alv;
    setTimeout(function(){
     ilmoitukset.innerHTML = "";  

    },2000);
    
    


}




function goToVacation()

{
    if(rahat >= 1000000)
    {
      
    ilmoitukset.innerHTML = "You are a millionaire and you get to the Bahamas!";  
    setTimeout(function(){
        location.reload() 
   
       },10000);

           

        
    }


    
}



function getBonus()

    

    {
        if(klikkaukset == 500)
        {
        rahat += 5000;
        cashRate = 10;

        ilmoitukset.innerHTML = "You got a 5000 $ bonus!"



        setTimeout(function(){
            ilmoitukset.innerHTML = "";  
       
           },2000);

        }
    }




