import React from 'react';

class EditBurgerForm extends React.Component {

    handleChange = (event) => {
        console.log(event.currentTarget)
        
        const updatedBurger = {
            ...this.props.burger,
            [event.currentTarget.name]: event.currentTarget.value // Вычисляемые свойства
        };

    this.props.updateBurger(this.props.index, updatedBurger)
    }

    render() {
        
        return (
            <div className='burger-edit'>
                <input name='name' onChange={this.handleChange} type='text' value={this.props.burger.name}/>
                <input name='price' onChange={this.handleChange} type='text' value={this.props.burger.price}/>
                <select name='status' onChange={this.handleChange} className="status" type='text' value={this.props.burger.status}>
                    <option value="available">Доступно</option>
                    <option value="unavailable">Не доступно</option>
                </select>
                <textarea onChange={this.handleChange} name='desc' value={this.props.burger.desc}/>
                <input  onChange={this.handleChange} name='image' type='text' value={this.props.burger.image}/>
            </div>
        )
    }
}

export default EditBurgerForm;
