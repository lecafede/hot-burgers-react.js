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
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    // ИММУТАБЕЛЬНОСТЬ 13 УРОК

    addBurger = burger => {
        console.log("Add Burger", burger);
        
        // РАЗОБРАТЬ РАБОТУ
        
        // 1. Делаем копию объекта state;
        const burgers = {...this.state.burgers}; // Оператор Spread
        // 2. Добавить новый бургер в переменную(обьект) Burgers
        burgers[`burger${Date.now()}`] = burger;
        console.log("Бургеры", burgers)
        // Записать новый обьект burgers В state
        this.setState({burgers});
        

        // В реакте есть правило, всегда когда мы имеем дело с обьектами внутри state, когда мы добавляем новые обьекты, меняем текущие обьекты мы должны придерживаться принципа иммутабельности, это значит что мы никогда не взаимодействум с обьектом напрямую, мы всегда сначала создаем её копию, потом вносим какие-то изменения, и новую копию записываем в state.

        console.log(burgers)
        
    }


    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers})
    }


    
    
    addToOrder = (key) => {

        // 16 урок
        // 1. Делаем копию обьекта state

        const order = {...this.state.order};
        
        console.log('Ордер ' + order)

        // 2. Добавить ключ к заказу со значением 1, либо обновить текущее значение
        order[key] = order[key] + 1 || 1
        console.log(order)
        // 3. Записать наш новый обьект order в state.
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
                <Order burgers={this.state.burgers} order={this.state.order}/>
                <MenuAdmin loadSampleBurgers={this.loadSampleBurgers} addBurger={this.addBurger}/>
            </div>
        )
    }
}

export default App;
