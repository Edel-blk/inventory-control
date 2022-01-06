import React from 'react';


export default function AddArticle() {

    let [input, setInput] = React.useState({
        name: '', 
        units: '',
        price: ''
    });

    let handleChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}));
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input);
        setInput({ 
            name: '', 
            units: '',
            price: ''
        });
    }

    return (
        <React.Fragment>
            <div>Create Article</div>
            <br/>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Article Name</label>
                    <input type={'text'} name={'name'} value={input.name}
                    onChange={(e) => handleChange(e)}/>
                    <label>Category</label>
                    <input type={'text'}/>
                    <label>Units</label>
                    <input type={'text'} name={'units'} value={input.units}
                    onChange={(e) => handleChange(e)}/>
                    <label>Price</label>
                    <input type={'text'} name={'price'} value={input.price}
                    onChange={(e) => handleChange(e)}/>
                    <br/>
                    <input type={'submit'} value={'ADD'}/>
                </div>
            </form>
        </React.Fragment>

    )
}

