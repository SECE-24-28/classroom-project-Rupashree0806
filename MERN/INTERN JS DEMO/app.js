// console.log("Shamitha");

// const year=2025;

// console.log(year);
// let boolean=10.5;
// console.log(l boolean);

//function scope
// function testone()
// {
//     const a=20
//     console.log(a);
// }
// testone();
// console.log(a);

//block scope -->left and const follows,but var does not follow

// let a=20;
// if(a==20){
//    var msg="hello";  //const only one helloo;   var means two hello
//     console.log(msg)
// }
// console.log(msg);

//hosting
// console.log(a);
// var a=10

//  console.log(b);
//  let b=10

// let array=[1,"shami",10.6,true,6]
// console.log(array[1]);
// array[4]="mango"
// console.log(array);


//Array methods
//1) push-->add items at end

// let fruits=["apple","banana","orange"]
// fruits.push("Kiwi")
// console.log(fruits);

//2)pop-->remove last item
//3)unshift()-->remove last item
//4)  shift()-->remove first item
//5)slice()-->copy a portion of the array and returns a new array
//syntax:
//slice.(startindex,endindex)
//6)splice()-->add or remove items at any position
//syntax
//splice(start,deletecount,additem1,additem2,....)
// let fruits=["apple","banana","orange"]
// fruits.push("kiwi")
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.unshift("grapes")
// console.log(fruits);
// fruits.shift()
// console.log(fruits);
// let result=fruits.slice(0,3)
// console.log(result);
// fruits.splice(0.2,"kiwi")
// console.log(fruits);


//SORT

// let arr=[5,20,3,100]
// arr.sort((a,b)=>a-b) //small-->big
// console.log(arr); //big-->small

//a=5 b=20--> 5-20-->-15-->keep 5 before 20
//a=20 b=3-->17-->swap values-->keep 3 before 20
//5,3,20,100
//a=5,b=3-->2swap-->keep 3 before 5
//3,5,20,100


//ES8 -ecmascript 6
//ARROW function =>

// let area=(l,b)=>{
//     let result=l*b;
//     return result;
// }
// left value=area(5,3);
// console.log(value);
    
//Higher order function-->map(),filter(),reduce()
//def:
//It is a funactionwhich takes another function as an argument
//use it on arrays only



// let nums=[1,3,3.4]
// let double=nums.map(function(n))//traiditional method    //(n)-->mordern function
// {
//     return n*2
// })

// console.log(doubled);

//filter()-->select items based on cndtc

// let array=[1,2,3,4]
//      let numbers=array.filter(((n)=>     //n=1,2,3,4
//      {
//                return n>5
//      })

//      console.log(numbers);
 
//finding min or max    
//sum of the array
    //  let array=[10,20,30]
    //  let total=array.reduce((acc,sum)=>{
    //  return sum+acc
    //  },0) //sum //acc=10,20,30

//all three in one 
// let numbers=[1,2,3,4,5,6]
// let result = numbers
//         .map(n=>n*2)
//         .filter(n=>n>4)
//         .reduce((sum)=>sum+ActiveXObject,0)
//         console.log(result);



// convert celcius to farenheit using HOF formula F=(9/5)*C+32  
//C=[20,32,50,45,51]
// Convert Celsius to Fahrenheit using HOF

// let C = [20, 32, 50, 45, 51];

// let F = C.map(c => (9/5) * c + 32);

// console.log(F);

//for each loop
//loop ---> repeating process
//syntax
// foreach((Item,index,array)=>{

// })
// forEach(function() {
    
// });

//Objects-->collection of key-value pairs
//js-->object based language
// let array=[1,2,3,4]
// console.log(array);
// console.log(typeof array);

//create an object -->key-->string----value would be anyother datatype
// let object={
//     name:"eshwar",
//     dept:"aiml",
//     place:"cbe"
// }
// console.log(object);
// console.log(object.dept);
// console.log(object["dept"])//to deeclare in array  " "should be given for string
//add new key-value pair in  existing object
// object.id=1
// console.log(object);
// //delete one pair
// delete object.id;
// console.log(object);

//access an object
//two ways
//1_. notation
//2[] notation
//nested Ds
//1)nested objects-->{{{{{}}}}}
// let objectone={
//     name:"sece",
//     dept:"aiml",
//     address:{
//         place:"cbe",
//         state:"TN"
//     }
// }

//2)array of objects\
// let arrobjects=[{name:"sece",dept:"aiml"},
//     {place:"cbe",state:"tn"}
// ]
// arrobjects.forEach((item)=>{
//     console.log(item);
//         console.log(item.place);
// })
//3)objects of array
// let js={
//     name:"sece",
//     place:"cbe",
//     dept:["aiml","aids",5,10.5]
// }
//for in loop -->only on objects
// for(let key in js)
// {
//     console.log(js[key]);
// }

//DOM-document object model
//changing css style
// let change=Document.querySelector("hi")
// change.style.color="red";
// console.log(change);

// //document.getElementByclassName()
// document.querySelector() // to select all -->.querySelectorAll()

// //why do we dom?
// //1.)change tesxt
// let change=document.querySelector("ho");
// change.innerHTML="Welcome"
// console.log(change);
// //2.)change style(css)
// //4.)show/hide elements
// //5.)hancle events(click,input,etc)
// let change=document.querySelector('hi')
// let button=document.getElementById('btn')
// let add=document.getElementById("add")
// let list=document.getElementById("list")
// button.addEventListener("Click",()=>{
//     change.innerHTML="welcome"
//     change.style.color="red"

// })
// console.log(change);

// add.addEventListener("click",()=>{
//     let newElement=document.createElement("li")
//     newElement.innerHTML="new item added";
//     list.appendChild(newElement)
// })
//  remove.addEventListener("click",()=>{
//     let lastItem=list.lastElementChild;
//     if(lastItem){
//         lastItem.remove()
//     }
//  })

 //oninput syntax
 //textbox.oninput=()=>{
    
//}

//Promise--a task which will be done in the future
//states
//1)pending
//2)fulfilled
//3)rejected
//syntax
// let promise=new Promise((resolve,reject)=>{
//     //statements
// })

//promise-status
// .then()-->no error-->block will be executed
// .catch()-->any error-->this will be executed

//why?
//asyn,await
// console.log("hello");
// setTimeout(()=>{
// alert("Welcome")
// },5000) //3000=3s

// //basic promise programm
// let promise=new Promise((res,rej)=>{
// let success=true
//     if(success)
//     {
//         res("fulfilled")
//     }
//     else{
//         rej("rejected")
//     }
// })
// .then((msg)=>{
//     console.log(msg);

// })
// .catch((err)=>{
//     console.log(err);
// })
//  console.log(Promise);


//async,await==>promise makes easier

async function Myfunc(){
    return "hello"
}
let p=Myfunc()//return promise
console.log(p);

Myfunc().then(msg=>console.log(msg))

//async and await
function getDate(){
    return new Promise(resolve=> {
        setTimeout
        
    })
}