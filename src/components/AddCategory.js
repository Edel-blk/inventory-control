import React from 'react';
import {addCategory} from '../actions';
import { connect } from 'react-redux';

export function AddCategory({add}) {

    let [input, setInput] = React.useState({
        name: ''
    });

    let handleChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        
        add(input);
        console.log(input);
        setInput({ 
            name: ''
        });
    }

    return (
        <React.Fragment>
             <div>Create Category</div>
            <br/>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name of New Category</label>
                    <input type={'text'} name={'name'} value={input.name}
                    onChange={(e) => handleChange(e)}/>
                     <br/>
                    <input type={'submit'} value={'ADD'}/>
                </div>
            </form>
        </React.Fragment>

    )
}
function mapDispatchToProps(dispatch){
    return {
        add : (input) => dispatch(addCategory(input))
    }
}


export default (AddCategory, connect(null, mapDispatchToProps)(AddCategory));