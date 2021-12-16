new fullpage ('#full-page',{
  autoScrolling:true,
  navigation:true,
  onLeave: (origin,destination,direction) =>{

const section=destination.item;
const title =section.querySelector("h1");
const tl =new TimelineMax({delay:0.5});
tl.fromTo(title ,0.5 ,{y:"50",opacity:0},{y:"0",opacity:1});

if(destination.index ===1){
  const chairs =document.querySelectorAll(".chair");
  const description =document.querySelector(".description");
  //
  tl.fromTo(chairs, 0.7 ,{x:"100%"},{x:"-35%"})
  .fromTo(description,0.5,{y:"50",opacity:0},{y:"0",opacity:1})
  .fromTo(chairs[0],1 ,{opacity:1},{opacity:1})
  .fromTo(chairs[1],1 ,{opacity:0},{opacity:1})
  .fromTo(chairs[2],1 ,{opacity:0},{opacity:1});

}
  }
});
//text animation for 3rd section


// const text =document.querySelector(".fancy");//be careful while selecting the classes
// const strText =text.textContent;
// const splitText =strText.split("");//splits every word including spaces into an array and then converting it into span so we can indivisully animate all tha letters one by one
// text.textContent="";//as it get doubly printed so to remove it ..
// for(let i=0;i < splitText.length ;i++){

//   text.innerHTML += "<span>" +splitText[i] +"</span>";
// }
// //text.textContent and text.innerHTML is the same thing

// let char=0;
// let timer =setInterval(onTick,50);

// function onTick(){
//    const span =document.querySelectorAll("span")[char];//span is html inline html 
//    span.classList.add("fade");//can add any class name to apply
//    char++;
//    if(char === splitText.length){
//      complete();
//      return;
//    }
// }

// function complete(){
//   clearInterval(timer);//stops the timer
//   timer=null;//starts from beginning
// }
