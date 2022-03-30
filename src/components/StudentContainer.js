import React from 'react';
import { useState } from 'react';
import calculateAverage from "../functions/CalculateAverage";
import './StudentContainer.css';
import { ReactComponent as Plus } from "../icons/plus-solid.svg";

export default function StudentContainer(props){
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(click){
            document.getElementById(props.id).style.height = "400px";
        }else{
            document.getElementById(props.id).style.height = "200px";
        }
    }


    if(typeof props.student == 'undefined'){
        //Do nothing
    }else{

        var average = calculateAverage(props.student.grades);
        return(
            <div className="studentContainer" id={props.id}>
                <div className="studentContainerLeft">
                    <div className="frame">
                        <img className="image" src={props.student.pic}></img>
                    </div>
                </div>
                <div className="studentContainerRight">
                    <h1>{props.student.firstName.toUpperCase() + ' ' + props.student.lastName.toUpperCase()}</h1>
                    <ul className="studentDetails">
                        <li>Email: {props.student.email}</li>
                        <li>Company: {props.student.company}</li>
                        <li>Skill: {props.student.skill}</li>
                        <li>Average: {average}</li>
                        <Plus onClick={handleClick} className="plusicon"/>
                    </ul>
                </div>
            </div>
        )
    }

    return null;
}