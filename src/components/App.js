import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';
import base from '../base';



class App extends React.Component {

    state = {
        burgers:{},
        order:{}
    }

    componentDidMount() {
        const {params} = this.props.match;

        const localStorageRef = localStorage.getItem(params.restaurantId)
        if(localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }
        
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
        })

    }

    componentDidUpdate() {
        const {params} = this.props.match;
        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        // Закрываем сокеты, 
        base.removeBinding(this.ref);
    }

    addBurger = burger => {
        const burgers = {...this.state.burgers}; // Оператор Spread
        burgers[`burger${Date.now()}`] = burger;
        this.setState({burgers});        
    }

    updateBurger = (key, updatedBurger) => {
        const burgers = {...this.state.burgers};
        burgers[key] = updatedBurger;
        this.setState({burgers})
    }

    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers})
    }
  
    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1
        console.log(order)
        this.setState({order})
    }

    deleteBurger = (key) => {
        const burgers = {...this.state.burgers}
        burgers[key] = null;
        this.setState({burgers})
    }

    
    deleteFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key] // delete т.к нету синхронизации с FireBase.
        this.setState({order})
    }

 

    render() {
        return (
            <div className="burger-paradise"> 
                <div className="menu">
                    <Header title="Very Hot Burgers" amount={10} hot="true"/>
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger key={key} index={key} details={this.state.burgers[key]} addToOrder={this.addToOrder}/>
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order} deleteFromOrder={this.deleteFromOrder}/>
                <MenuAdmin 
                    loadSampleBurgers={this.loadSampleBurgers} 
                    addBurger={this.addBurger} 
                    burgers={this.state.burgers}
                    updateBurger={this.updateBurger}
                    deleteBurger={this.deleteBurger} />
            </div>
        )
    }
}

export default App;
