import React from 'react';

const AddCategory = () => {

    let [input, setInput] = React.useState({
        name: ''
    });

    let handleChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    return (
        <React.Fragment>
             <div>Create Category</div>
            <br/>
            <form>
                <div>
                    <label>Name of New Category</label>
                    <input type={'text'} name={'name'} value={input.name}
                    onChange={(e) => handleChange(e)}/>
                </div>
            </form>
        </React.Fragment>

    )
}

export default AddCategory;