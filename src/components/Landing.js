import React from "react";
import restaurants from '../sample-restaurants';

class Landing extends React.Component {

    state = {
        display: false,
        title: "",
        url: ""
    }

    displayList = () => {
        const {display} = this.state;
        this.setState({display: !display}) // Выводим то что не равно display то есть true;
    }

    getTitle = (restaurant) => {
        console.log(restaurant);
        const {title, url} = restaurant;
        this.setState({title:title, url:url, display: false})
    }

    goToRestaurant = () => {
        console.log("go to restaurant")
        const {url} = this.state
        console.log(url)
        this.props.history.push(`/restaurant/${url}`)

    }

    render() {

        return (
  
            <div className="restaurant_select">
                <div className="restaurant_select_top">

                    
                    <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
                   
                         {this.state.title ? this.state.title : 'Выбери ресторан'} 
            
                    </div>
                

                    <div className="arrow_picker">
                        <div className="arrow_picker-up"></div>
                        <div className="arrow_picker-down"></div>
                    </div>


                    {this.state.display ? <div className="restaurant_select_bottom">
                        <ul>
                           {restaurants.map(restaurant => {
                                return <li onClick={() => this.getTitle(restaurant)} key={restaurant.id}> {restaurant.title}</li>
                            })}
                        </ul>
                    </div> : null}


                </div>
                {this.state.title && !this.state.display ? ( <button onClick={this.goToRestaurant}>Перейти в ресторан</button> ) : null}
               {/* Если у нас есть название и display имеет значение false то мы отображаем кнопку перейти в ресторан
               В противном случае мы не отображаем ничего */}
            
            </div>
       
        )
    }
}



export default Landing;
