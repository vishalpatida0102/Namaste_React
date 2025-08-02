import React from 'react';
class UserClass extends React.Component{

    constructor(props) // always "props" likho or dusra name , good practice
    { 
        // jo bhi props aate he vo aik object hota he 
        super(props);// allow to access this.props in constructor



        // hooks in class component

        // this.state={ // state is a big object that contains all the data of the component
        //     // it is used to store data that can change over time
        //     count:0,
        //     count2:0
        // }



        this.state={
            userInfo:{
                name:'',
                location:''
            },
        }


    }



     async componentDidMount(){
        // this method is called when the component is mounted
        // it is used to fetch data from API or perform any other side effects
        // it is called only once when the component is mounted
        // it is not called when the component is updated
        // it is called after the render method is called
        
        console.log(this.props.idKey);
        const data=await fetch(`https://api.github.com/users/${this.props.idKey}`)
        const json= await data.json();

        this.setState({
            userInfo:json,
        })
        console.log(json);

        console.log("Component Mounted");
     }

     
     componentWillUnmount(){
        console.log("Component Unmounted");
        // this method is called when the component is unmounted
     }

    render(){



        // const {name,location}=this.props; //always use this keyword to access props in class component
        const {name,bio,avatar_url}=this.state.userInfo;




        return(
            <div className="user-card-container">
            <div className='user-card'>




                 {/* <h1>Count:{count}</h1>
                 <button onClick={()=>{
                    this.setState({ // setState is used to update the state of the component
                        // it takes an object as an argument and updates the state
                        // it is asynchronous
                        // it will not update the state immediately
                        // it will update the state after the component is re-rendered
                        
                        //if you want change state of more than one state put all the state in one object
                        count:this.state.count+1
                    })
                 }}>
                    Increment Count
                 </button> 
                 <button   onClick={()=>{
                    this.setState({
                        count:0
                    })
                 }}>
                    Reset
                 </button> */}




                 <img className='img-github' src={avatar_url}></img>
                 <h2> Name: {name} </h2>
                 <h4>Role: {bio==null ? "no location":bio}</h4>
                 <h5>Contact</h5>
            </div>
            </div>
        )
    }
}

export default UserClass;

