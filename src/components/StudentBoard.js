import React from "react";
import { Component } from "react";
import StudentContainer from './StudentContainer.js'
import './StudentBoard.css'

export class StudentBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            studentdata : [],
            isloaded: false,
        };
    }


    componentDidMount(){
        this.getStudentData();
        this.render();
    }

    getStudentData(){
       fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(async data => {
            this.setState({
                studentdata: data.students,
                isloaded: true,
            });
        });
    }

    render(){
        const isloaded = this.state.isloaded;
        if(!isloaded){
            return (
                <div>
                    <h1>Students</h1>
                    <h3>Students Not Found</h3>
                </div>
            )  
        }else {
            return (
                <div>
                    <input input="text" placeholder="Search by name" className="studentSearch"/>
                    {
                        this.state.studentdata.map(function(item, x){
                            return <StudentContainer key={x} student={item}/>
                        })
                    }
                </div>
            )  
        }
    }
}
