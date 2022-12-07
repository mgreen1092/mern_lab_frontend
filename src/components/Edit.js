import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
//import e from "express";

const Edit = (props) => {
    let params = useParams()
    console.log(params.id)
    const editHandler = async (event) => {
        event.preventDefault()
        //const sendEdit = props.input
        const response = await axios.put(`https://mernlab.fly.dev/api/library/edit/${params.id}`, props.input)
        console.log(response)
    }
    const handleChange = async (event) => {
        props.setInput ({
            ...props.input,
            [event.target.id]: event.target.value
        })
    }
    console.log(props.input)
    return(
        <div>
            <form onSubmit={editHandler}>
                Title:
            <input onChange={handleChange} id="title" type="text" name="title"></input>
                Author:
            <input onChange={handleChange} id="author" type="text" name="author"></input>
                Description:
            <input onChange={handleChange} id="description" type="text" name="description"></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Edit