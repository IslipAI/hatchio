import React from "react";
import { Component } from "react";
import StudentContainer from './StudentContainer.js'

export class StudentBoard extends Component{

    constructor(props){
        super(props);
        this.state = {studentdata : ["hey", "yall"]};
    }


    componentDidMount(){
        this.getStudentData();
    }

    getStudentData(){
        fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    setStudentData(studentdata){

    }

    render(){
        return (
            <div>
                <h1>Students</h1>
                <StudentContainer/>
            </div>
        )  
    }
}
