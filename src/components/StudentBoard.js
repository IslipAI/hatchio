import React from "react";
import { Component } from "react";
import StudentContainer from './StudentContainer.js'
import './StudentBoard.css'

export class StudentBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            studentdata : [],
            studentdatafiltered: [],
            isloaded: false,
            searchinput: '',
        };

        this.onChange = this.onChange.bind(this);
    }


    componentDidMount(){
        this.getStudentData();
        this.render();
    }

    onChange(event){
        console.log(event.target.value)
        const searchinput = event.target.value.toLowerCase();
        this.setState({ searchinput }, () => this.filterList());
    }

    filterList(){
        let datafilter = this.state.studentdata;
        let searchinput = this.state.searchinput

        datafilter = datafilter.filter(function(user){
            console.log(user.firstName)
            return user.firstName.toLowerCase().indexOf(searchinput) != -1;
        });

        console.log(datafilter);

        this.setState({
            studentdatafiltered: datafilter,
        });

    }

    getStudentData(){
       fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(async data => {
            this.setState({
                studentdata: data.students,
                studentdatafiltered: data.students,
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
                    <input input="text" placeholder="Search by name" className="studentSearch" onChange={this.onChange}/>
                    {
                        this.state.studentdatafiltered.map(function(item, x){
                            return <StudentContainer key={x} student={item} id={x}/>
                        })
                    }
                </div>
            )  
        }
    }
}
