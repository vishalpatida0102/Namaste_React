
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

import React from 'react'
import ReactDOM from 'react-dom/client'


const parent1=React.createElement('div',{id:"second1"},
       [ React.createElement('h1',{id:"heading1"},"helloddddd"),React.createElement('h1',{id:"heading1"},"hii")]
)

        const root=ReactDOM.createRoot(document.getElementById("root"))


        // root.render(parent1);


const parent2=React.createElement('div',{id:"second"},
       [ React.createElement('h1',{id:"heading"},"hello2"),React.createElement('h1',{id:"heading1"},"hii2")]
)

        // const root=ReactDOM.createRoot(document.getElementById("root"))
        

        // root.render(parent1); // In this Senario first parent1 render than parent2 replace it only parent2 show
        // root.render(parent2);

        root.render([parent1,parent2]); // in this both show