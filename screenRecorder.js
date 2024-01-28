// function person(name,age)
// {
//     this.Name=name;
//     this.Age=age
//     //creating the method in js
//     this.great=()=>{
//         console.log(`hii its ${name}`);
//     }

// };

// const person1=new person("Lalima",22);
// console.log(person1.Name);
// person1.great();
// let obj={
//     name:"Nikhil",
//     roll:20,
//     id:"isdfsaf",
//     crush:["lalime","Anchal","Druvi","ishdfuihf"]
// }
// // console.log(obj.crush);
// // obj.address="kjsidfoiasjfo";
// // console.log(obj)
// obj.crush.sort();
// console.log(obj.crush);
// obj.sort();
// console.log(obj)//cant do this bcz the key value pairs

//to add the key value and its values
// const names={
//     naam:"Nikhil",
//     roll:21,
//     add:"dfasdf"
// }
// const id="55";
// console.log(names[id]);
// console.log(names);

//how to access the key and values 

// const objs={
//     name:"NIkhil",
//     id:55,
//     str:['A','B','C']
// }
// console.log(typeof(objs))//o/p is object and array is an object in javascript
// console.log(objs[name]);//we cannot access like this
// console.log(objs)

// console.log(objs.str[0])
// console.log(typeof(objs.str))
// objs.sus="sdsjf";
// // console.log(objs);
// // console.log(objs["sus"])//by thsi we can accsee the key's values
// console.log(objs[sus])
//for accessing the key values pairs using for loop in js
// for(const key in objs)
// // console.log(key);
// console.log(objs[key]);//for accessing the values according to the key
//if i do like this 
// for(const key in objs)
// {
//     // console.log(objs.key);
//     //this will put a unidefined at each time due to it is searching for the variable key in objs we can do like this
//     console.log(objs[key]);//this help to print all elements 
// }


//for function concept
// function getVehicle()
// {
//     return {
//         name:"NIkhik",
//         id:22
//     }
// }
// const myVehical=getVehicle();
// const myVehical2=getVehicle();
// myVehical2.address="idhfiasf";
// console.log(myVehical2)
// console.log(myVehical);//this means that getVehicale is created in a map and then we are accessing the getVechical function at two different locationa dn changing the second object and the whole function
// console.log(myVehical)


//object destruction

// const objs={
//     car1:"lam",
//     car2:"C",
//     car3:"F",
//     car4:"E"
// }

// const {car1:C1,car2:C2,car3:C3,car4:C4}=objs;//we assign the C1 ,C2,C3,C4 as variable and assing the values in that variables
// // console.log(C1)
// // console.log(C2)
// // console.log(C3)
// // console.log(C4)
// // console.log(typeof(C1));
// const cars=[C1,C2,C3,C4];
// // console.log(cars)
// var length=Object.keys(objs).length;


// // console.log(typeof(Object.keys(objs)))

// for(var i=0;i<length;i++)
// {
//     console.log(cars[i]);
// }


//functions 
// function add(x,y)
// {
//     return x+y;
// }
// const myAddition=add(1,3);
// console.log(myAddition);

//assingment operators
// function add(x=5,y)
// {
//     return x+y;
// }
// const myAddition=add(1);//this will return NaN due to it dont know to assign which variable gets the value
// console.log(myAddition);

//passing the arrays of paramenter

// function add([num1,num2])
// {
//     return num1+num2;

// }
// const number=[110,112];
// const myaddition=add(number);
// console.log(myaddition)
//how to override the function 
//functions to override
// function displayMessage(message="Nikhil")
// {
//     return message;
// }

// const display=displayMessage("Lalima");
// console.log(display);
//using the arguments keyword in js
// function sum()
// {
//     var sum=0;
//     for(var i=0;i<arguments.length;i++)
//     sum+=arguments[i];
//     return sum;
// }
// const givenSum=sum(1,2,3,4,5);
// console.log(givenSum);

// 2-> arrow function
// const square=(x)=> x*x;
// const sumOfTwoNumbers=(x,y)=> x+y;
// const sums=(x,y)=>{
//     console.log(`The first number is ${x} and the second number is ${y} and the sum is `);
//     return x+y;
// }
// //to return the object using arrow function
// const arrowfunctionSum=(x,y)=>({sum:x+y,difference:x-y});
// console.log(square(2));
// console.log(sumOfTwoNumbers(1,1));
// console.log(sums(1,3));
// console.log(arrowfunctionSum(1,1))
//anynoumous function
// function names()
// {
//     console.log("Nikhill");

// }
// names();
// let x=function()
// {
//     console.log("Nik");
// }
// console.log(x())
//scopes in function
// (function ()
// {
//     return "hii its nikhil";
// }())
//function ansynomous
// (function exec()
// {
//     console.log("name");
// })();
// (function (x)
// {
//     console.log(x*x);
// })(5);
//objects in js
// let bj=new Object();
// console.log(bj);
// let length=Object.keys(bj).length;
// console.log(length);


// function Emp(i,n,s)
// {
//     this.id=i;
//     this.name=n;
//     this.size=s;
// }
// const e=new Emp(2,"Lalima",32);
// // console.log(e);
// ///to delete some key value pairs from object then
// delete e.id;
// e['id']=5;
// // console.log(e)
// // //now to extract the keys and values from object
// // let keys=Object.keys(e);
// // let values=Object.values(e);
// // console.log(keys);
// // console.log(values.sort());
// //to get the key and value pairs of arry from these object
// let pairs=Object.entries(e);
// // console.log(pairs)
// //to freezz this key value pair addition then we do this
// Object.freeze(e);
// e.num=7061824;
// // console.log(e) 
// //to change only the vallues of keys but don't want to add or remove keys then we should do this
// Object.seal(e);
// e.addrees="nasfnkasnfd"
// e.id=66;
// // console.log(e);
// //to create an object which have the previous keys but have no its values then do this
// let o=Object.assign({},e);
// console.log(o)


// class emp {
//     constructor(i, n, s) {
//         this.id = i;
//         this.name = n;
//         this.size = s;

//     }
// }

// function Emp(i,n,s)
// {
//     this.id=i;
//     this.name=n;
//     this.size=s;
// }
// let objs=new Emp(2,"Lalima",32);
// // console.log(objs)
// let keysObject=Object.keys(objs).reduce((newObjs,key)=>{
//     newObjs[key]=null;
//     return newObjs;
// },{});
// console.log(keysObject);




// xczxzcz

// const originalObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const keysOnlyObj = Object.keys(originalObj).reduce((newObj, key) => {
//     newObj[key] = null; // or undefined, or any default value you want
//     return newObj;
// }, {});

// console.log(keysOnlyObj); // Outputs: { name: null, age: null, city: null }


// let codns={
//     name:"Nikhil",
//     id:2,
//     place:"Bihar",
//     address:()=>{
//         console.log(`the name is ${name} and the address is ${this.id}${this.place}`)
//     },
// }

// console.log(codns.address())


//Classes in js
//classes are used to make blueprints in js
// class Vehical{
//     constructor(model,wheels)
//     {
//         this.model=model;
//         this.weels=wheels;

//     }
//     start()
//     {
//         console.log("the vehicale has been started");
//     }
// }
// const myCar=new Vehical("ford",4);
// console.log(myCar);
// const myCar2=new Vehical("maruti",4);
// console.log(myCar2)
// console.log();
//json
// const jsonData='{"name":"Nikhil","class":"3-c","id":"2"}'
// const object=JSON.parse(jsonData);
// console.log(object)
// console.log(jsonData);


// 2.>{
// const jsonString=`{
//     "userId": 1,
//     "that": 1,
//     "title" "or do not drive out an exception to the choice of criticism",
//     "Body" "because they receive\nsusperit refusal to result from the ease and cum\nreprehendendit discomfort that the entire\nnostrum things that are happening to the architect"
// }`
// console.log(jsonString);
// const jsonData=JSON.parse(jsonString)
// const jsonString = `{
//     "userId": 1,
//     "id": 15,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"
// }`;
// const jsonData = JSON.parse(jsonString);
// // console.log(jsonData);
// // console.log(jsonData.id)
// jsonData.empaddress="ndfasfjasofi";
// console.log(jsonData)


//dom mannupulation
// <body>
// <!-- Id -->
// <p id="one"><span>Hello</span> Namaste</p>
// <!-- Class -->
// <ul>
//   <li class="tech">One</li>
//   <li class="tech">Two</li>
//   <li class="tech">Three</li>
// </ul>

// <script>
//   // Id
//   let var1 = document.getElementById("one");
//   console.log(var1.innerText);
  
//   // Class
//   let var2 = document.getElementsByClassName("tech");
//   console.log(var2[2]);to select the list part 2
// </script>

// </body></html>


// const data1=document.getElementsByClassName('c1');
// const data2=document.getElementsByClassName('c2');
// const data3=document.getElementsByClassName('c3');
// console.log(data1.innertext);


