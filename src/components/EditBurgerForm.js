import React from 'react';
import PropTypes from 'prop-types';

class EditBurgerForm extends React.Component {


    static propTypes = {
        burger: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        updateBurger: PropTypes.func,
        deleteBurger: PropTypes.func
    }

    handleChange = (event) => {
        
        const updatedBurger = {
            ...this.props.burger,
            [event.currentTarget.name]:  // Вычисляемые свойства
                event.currentTarget.name === 'price' 
                    ? parseFloat(event.currentTarget.value) || 0  
                    : event.currentTarget.value  
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
                <button onClick={() => this.props.deleteBurger(this.props.index)}>Удалить из меню</button>
            </div>
        )
    }
}

export default EditBurgerForm;
