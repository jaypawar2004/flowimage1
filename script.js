    const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }

    document.querySelector("#center")
    .addEventListener("mousemove", throttleFunction((dets)=>{
  var div = document.createElement("div");
  div.classList.add('imagediv');
div.style.left = dets.clientX +'px';
div.style.top = dets.clientY +'px';

var img = document.createElement("img");
img.setAttribute("src","https://plus.unsplash.com/premium_photo-1670608489754-e9c220095207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60")
div.appendChild(img); 

  document.body.appendChild(div);
  gsap.to(img,{
    y:"0",
    ease: Power1,
    duration:1
  })
  setTimeout(function(){
div.remove();
  },1500);
    }, 250));