import React, {useState} from "react";
import restaurants from '../sample-restaurants';
import PropTypes from 'prop-types';


const Landing = (props) => {
    
    // state = {
    //     display: false,
    //     title: "",
    //     url: ""
    // }

    const [display, toggleDisplay] = useState(false);
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')


    const displayList = () => {
        // const {display} = this.state;
        // this.setState({display: !display}) 
        toggleDisplay(!display)
    }

    const getTitle = (restaurant) => {
        const {title, url} = restaurant;
        // this.setState({title:title, url:url, display: false})
        setUrl(url)
        setTitle(title);
        toggleDisplay(false)
    }

    const goToRestaurant = () => {
        // const {url} = this.state
        props.history.push(`/restaurant/${url}`)

    }

    return (
  
        <div className="restaurant_select">
            <div className="restaurant_select_top">
                <div onClick={displayList} className="restaurant_select_top-header font-effect-outline">
                     
                     {title ? title : 'Выбери ресторан'} 

                </div>
    
                <div className="arrow_picker">
                    <div className="arrow_picker-up"></div>
                    <div className="arrow_picker-down"></div>
                </div>


                {display ? <div className="restaurant_select_bottom">
                    <ul>
                       {restaurants.map(restaurant => {
                            return <li onClick={() => getTitle(restaurant)} key={restaurant.id}> {restaurant.title}</li>
                        })}
                    </ul>
                </div> : null}


            </div>
            {title && !display ? ( <button onClick={goToRestaurant}>Перейти в ресторан</button> ) : null}           
        </div>
   
    )
}

Landing.propTypes = {
    history: PropTypes.object
}


export default Landing;
