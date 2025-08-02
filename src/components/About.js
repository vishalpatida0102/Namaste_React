import React from 'react';
import UserClass from './UserClass';
import { ID_ARRAY } from '../utils/links'; // Importing the array of IDs

class About extends React.Component {
    constructor(){
        super();
        // This constructor is not strictly necessary here, but it can be used for initializing state or binding methods if needed.
        // In this case, we are not using any state or methods that require binding.
    }
    
    componentDidMount(){
        console.log("About Component Mounted");
    }

    render() {
        return (
            <div>
              
                <h1 className='heading'>About Us</h1>
              {  ID_ARRAY.map((id,index)=>{
                  return   <UserClass key={index} idKey={id} />
                })}
                 
            </div>
        );
    }
}
// const About=()=>{
//     return (
//         <div>
//         <div>About Us</div>
//         <UserClass name={"Vishal Patidar"} location={"Indore"}/>
//         <UserClass name={"Nilesh Patidar"} location={"Indore"}/>
//         <UserClass name={"Nitesh Patidar"} location={"Indore"}/>
//         <UserClass name={"Ganesh Patidar"} location={"Indore"}/>
//         <UserClass name={"Vaibhav Patidar"} location={"Indore"}/>

//         </div>
//     )
// }

export default About;