import React,{Component} from 'react';
//Lets create a class component
//Component Defination
class Anil extends Component{
    //1. Property
    //props= {};

    //2. Constructor
    constructor(){
       super();//Call parent Construtor
        //parent::__construct(); //PHP
    }

    //3. Methods
    //Every Class Component Must have a render method which returns HTML
    render(){
        //Create a Local Variable/Property
        let x='How are you';
        return (
            <React.Fragment>
                <h1>Hello Anil</h1>
                <h1>Hello { this.props.myname}</h1>
            </React.Fragment>
        );
    }
}

//default Export

export default Anil;