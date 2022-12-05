import React from "react";

const Create = () => {
    return(
        <div>
            <form>
                Title:
            <input type="text" name="title"></input>
                Author:
            <input type="text" name="author"></input>
                Description:
            <input type="text" name="description"></input>
            </form>
        </div>
    )
}

export default Create