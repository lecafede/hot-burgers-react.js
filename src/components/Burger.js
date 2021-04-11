

import React from 'react';

class Burger extends React.Component {


    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }

    render() {
        
        // const image = this.props.details.image;
        // const name = this.props.details.name;
            
        const {image, name, price, desc, status} = this.props.details;

        const isAvailable = status === 'available'; // Если значение status = available То isAvailable будет равняться true;
        
    
    
        return (
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt={name}/>
                </div>

                <div className="burger-details">
                    <h3 className="burger-name">
                        {name}
                        <span className='price'>{price} ₴</span>
                    </h3>
                    <p>{desc}</p>
                    <button onClick={this.handleClick} className="buttonOrder" disabled={!isAvailable}>
                        {isAvailable ? 'Заказать' : "Временно нет"}
                    </button>
                </div>
            </li>
        );
    }
}

export default Burger;
