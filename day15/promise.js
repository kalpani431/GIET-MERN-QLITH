console.log("today we are going to learn is promise");

document.addEventListener("key down", (e) => {
    console.log("e.key");
    console.log("e.code");
    console.log("e.keycode");
    console.log("e.ctrlkey");
    console.log("e.altkey");
    console.log("e.shiftkey")
    console.log("key down");

})

// document.addEventListener("key up", () => {
//     console.log("key up");
// })
// document.addEventListener("key press", () => {
//     console.log("key press");
// })

// let input=document.querySelector("input.tag");
// input.addEventListener("input",(e)=> {
//     console.log("e");
//     console.log("input event");
// })
let form=document.querySelector("form");
form.addEventListener("submit",(evl)=> {
    evl.preventDefault()
     console.log("submit");
     console.log("evl");
})

// //window
window.addEventListener("domcontentloaded",(e)=> {
    console.log("dom load")
    console.log(e);
})
// window.addEventListener("resize",()=>{
//     console.log("resize");
// })