import React from "react";
import axios from "axios";

const Create = (props) => {
    const handleChange = async (event) => {
        props.setInput ({
            ...props.input,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('http://localhost:4000/api/library/create/', props.input)
        console.log(response)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Title:
            <input onChange={handleChange} type="text" name="title"></input>
                Author:
            <input onChange={handleChange} type="text" name="author"></input>
                Description:
            <input onChange={handleChange} type="text" name="description"></input>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Create