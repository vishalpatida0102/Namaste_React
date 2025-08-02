
// react code
 
                                // in {} pass atribute for element
// const heading=React.createElement("h1",{id:"heading"},"hello world")
//         const root=ReactDOM.createRoot(document.getElementById("root"))
//         // hm root id wale div me tag dal rhe to vo hi render hoga baki 
//         // apke project me jo hi tag bane hee 

//         root.render(heading);

//         // rendr replace kr ta he 
//         //manlo div ke andar pahle se aik h1 tage he
//         //or ab apna naya heading tag add kara to , ye use 
//         //replace mar dega , ab ye show hoga



// create a complex structure nested 

{/* <div id="root">
        <div id="second">
                <h1 id="heading">hello</h1>
        </div>
</div> */}



// const parent=React.createElement('div',{id:"second"},
//         React.createElement('h1',{id:"heading"},"hello")
// )

//         const root=ReactDOM.createRoot(document.getElementById("root"))

//         root.render(parent);



{/* <div id="root">
        <div id="second">
                <h1 id="heading">hello</h1>
                <h1 id="heading2">hii</h1>


        </div>
</div> */}



// const parent=React.createElement('div',{id:"second"},
//        [ React.createElement('h1',{id:"heading"},"hello"),React.createElement('h1',{id:"heading1"},"hii")]
// )

//         const root=ReactDOM.createRoot(document.getElementById("root"))

//         root.render(parent);


{/* <div id="root">
        <div id="second">
                <h1 id="heading">hello</h1>
                <h1 id="heading2">hii</h1>


        </div>

         <div id="second">
                <h1 id="heading">hello</h1>
                <h1 id="heading2">hii</h1>


        </div>
</div> */}

// import React from 'react'
// import ReactDOM from 'react-dom/client'


// const parent1=React.createElement('div',{id:"second1"},
//        [ React.createElement('h1',{id:"heading1"},"helloddddd"),React.createElement('h1',{id:"heading1"},"hii")]
// )

//         const root=ReactDOM.createRoot(document.getElementById("root"))


//         // root.render(parent1);


// const parent2=React.createElement('div',{id:"second"},
//        [ React.createElement('h1',{id:"heading"},"hello2"),React.createElement('h1',{id:"heading1"},"hii2")]
// )

//         // const root=ReactDOM.createRoot(document.getElementById("root"))
        

//         // root.render(parent1); // In this Senario first parent1 render than parent2 replace it only parent2 show
//         // root.render(parent2);

//         root.render([parent1,parent2]); // in this both show




// Episode-03


// import React from "react";
// import reactdom from 'react-dom/client'


// // const heading=React.createElement(
// //         "h1",
// //         {id:"heading"},
// //         "Namste react "

// // );

// // console.log(heading);


// // JSX

// // const jsxHeading = <h1 id="heading">Namste React by using JSX</h1> // in one line

// // const jsxHeading = (<h1 id="heading">
// //         Namste React by using JSX
// //         </h1>) // if multiple line is use bracket





// //Rect Components-
// //class and function
// //functions are used in industry


// const Heading1=()=> <h1>hr hr mahadev</h1>  // second type written

// const Heading=()=>
// {
//         // react cpmponent composition
//         return (
//                 <div>
//                 <Heading1/>
//                 <h1>Jay shree Nath</h1>
//                 </div>
//         )
// }


// const title=(
//         <h1>hwllo</h1>
// )


//  const title2=(
//         <div>
//         <h1>hwllo</h1>
//         {title}
//         </div>
        
// )

// const Show=()=>
// {
//         return(
//                 <h1>hwllo</h1>
//         )
// }


// /*
// ye sb same hee
// {show()}
// <show/>
// <show><show/>
// */

// const root= reactdom.createRoot(document.getElementById('root'));

// root.render(<Show/>);
// // root.render({show()})




// Episode-04

import React, { Children } from "react";
import Reactdom from 'react-dom/client'
// import logo from 'logo.png'
import Hader from "./components/Hader";
import Body from "./components/Body";
import '../index.css'
import { createBrowserRouter, Outlet, RouterProvider }from "react-router-dom";
import About from "./components/About"; 
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import UserClass from "./components/UserClass";


 

 



  const HomePage=()=>
        {
                return(
                        <>
                        <Hader/>
                        <Outlet/>
                         </>
                )
        }


  const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    children: [ // 👈 Correct lowercase and inside the same object
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />, 
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<Restaurant/>
      },
    ],
  },
]);


const root= Reactdom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/> ) 