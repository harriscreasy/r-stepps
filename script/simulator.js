
document.addEventListener('click', function (e){
    let body = document.querySelector('body');
    let bullet = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;

    bullet.style.left = x+'px';
    bullet.style.top = y+'px';
    body.appendChild(bullet);
})



let clicks = 0; 
 
    function onClick() { 
 
     clicks += 1; 
 
     document.getElementById("clicks").innerHTML = clicks; 
 
    };

    


    let euros = 0; 
 
    function onEuro() { 
 
     euros += 4; 
 
     document.getElementById("euros").innerHTML = euros; 
 
    };