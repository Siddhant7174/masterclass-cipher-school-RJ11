import React,{useState} from "react";
import Test from "./Test";
import Userdetails from "./UserDetails";

AlluserList = () => {
    const [state, setState] = useState({
        name:"Shivkumar",
    });
}
// class AlluserList extends React.Component {
    // state = {
    //     name: "aditya",
    // };

    allusers = [{
        name: "John",
        email: "johan@gmail.com",
        phoneNumber: "9876543210",
    },
    {
        name: "shiva",
        email: "Shiva@gmail.com",
        phoneNumber: "9876543210",
    },
    {
        name: "manish",
        email: "manish@gmail.com",
        phoneNumber: "9876543210",
    },
];
render ()
    setTimeout(() => {
       this.setState({name: "Abhay raj Gupta"});
    }, 15000);

return (
     <div>
        <h1>The name is {this.state.name}</h1>
        {this.allusers.map ((user,index) => (
            <Userdetails key={index} user={user}/>
))}
           {/* <Userdetails user={allusers[0]}/>
           <Userdetails user={allusers[1]}/>
           <Userdetails user={allusers[2]}/>
           <Userdetails /> */}
     </div>
)
const AlluserList = () => {
    const [state, setState] = useState({name: "Shivkumar"});
    return <h1>The name is {state.name}</h1>
}
export default Test;