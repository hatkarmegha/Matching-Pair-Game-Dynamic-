    var gameboard=document.getElementById('gameboard');
    var images=['images/donut.png',
                'images/smily.png',
                'images/sunflower.png',
                'images/balloon.png',
                'images/crown.png',
                'images/mickeymouse.png',
                'images/icecream.png',
                'images/starfish.png',
                'images/compass.png',
                'images/pokemon.png'];
    let imgArr=[];
    let firstCard,secondCard;
    let pairCounter=0;
    let movesCounter=0;
    
    function displaycards(no_of_cards)
    {
        gameboard.innerHTML="";  
        pairCounter=0;
        movesCounter=0;
        let num=0;
        document.getElementById('no_of_move').innerHTML="";
        document.getElementById('no_of_pair').innerHTML="";
        let imagesclone_12=images.slice(0,6); 
        imagesclone_12=imagesclone_12.concat(imagesclone_12);//imagesclone_12 store 12 images. This array used for 3X4 card
        let imagesclone_16=images.slice(0,8);
        imagesclone_16=imagesclone_16.concat(imagesclone_16);//imagesclone_16 store 16 images. This array used for 4X4 card
        let imagesclone_20=images.slice();
        imagesclone_20=imagesclone_20.concat(imagesclone_20);//imagesclone_20 store 20 images. This array used for 5X4 card
   
            for(var i=0;i<no_of_cards;i++)
            {  
                //create card
                let card=document.createElement('div');
                card.className="card";
                card.id="card"+(i+1);   
                gameboard.appendChild(card);
               
                //Create front side of card
                let frontcard=document.createElement('div');
                frontcard.className="front";
                card.appendChild(frontcard);

                //Create back side of card
                let backcard=document.createElement('div');
                backcard.className="back";
                card.appendChild(backcard);
                
                //Display image on the back side of card
                let cardimg=document.createElement('img');
                if(no_of_cards==='12')
                { 
                    num=Math.floor(Math.random()*imagesclone_12.length); //Display random images 
                    cardimg.src=imagesclone_12[num];
                    imagesclone_12.splice(num,1);
                }
                else if(no_of_cards==='16')
                {
                    num=Math.floor(Math.random()*imagesclone_16.length);
                    cardimg.src=imagesclone_16[num];
                    imagesclone_16.splice(num,1);
                }
                else
                {
                    num=Math.floor(Math.random()*imagesclone_20.length);
                    cardimg.src=imagesclone_20[num];
                    imagesclone_20.splice(num,1);
                }
                card.appendChild(cardimg);             
            }

            let gamecards=document.getElementsByClassName('card');
            let pair=(gamecards.length)/2;
            console.log(pair);
            for(var i=0;i<gamecards.length;i++)
            {
                gamecards[i].addEventListener("click",function()
                {
                    this.classList.toggle('flipped');

                    let selectedCardId=this.id;
                    let selectedCard=document.getElementById(selectedCardId);
                    let selectedImg=selectedCard.querySelector('img').src;
                    imgArr.push(selectedImg);   //imgArr used for store path of image
                    let len=imgArr.length;
                    if(len===1)
                    {
                        firstCard=selectedCard; //store first clicked card
                    }
                    if(len===2)
                    {
                        movesCounter++;
                        document.getElementById('no_of_move').innerHTML=movesCounter;
                        secondCard=selectedCard;
                        if(imgArr[0]===imgArr[1])   //if path of both images are same
                        {
                            pairCounter++;
                            document.getElementById('no_of_pair').innerHTML=pairCounter;
                            firstCard.classList.add('match');
                            secondCard.classList.add('match');
                            if(pairCounter===pair)
                            {
                                restart(pairCounter);
                            }
                        }
                        else
                        {
                            setTimeout(function()                   //flip card after 1 sec
                            {           
                                firstCard.classList.toggle('flipped');
                                secondCard.classList.toggle('flipped');
                             }, 1000);
                        }
                        imgArr=[];
                    }  
                });
            }   
    }

    function restart(counter)
    {
        let gamecards=document.getElementsByClassName('card');
        let totalCard=2*counter;
        setTimeout(function()
        {
            alert("Game Finish..");                   
            for(var i=0;i<totalCard;i++)
            {  
                gamecards[i].classList.toggle('flipped');
                gamecards[i].classList.add('restart');
            }    
            pairCounter=0;
            movesCounter=0;
            document.getElementById('no_of_pair').innerHTML="";
            document.getElementById('no_of_move').innerHTML="";
        },1500);  
    }
           
           

        
    

  


