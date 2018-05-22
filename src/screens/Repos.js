import React from 'react';
import {render} from 'react-dom';
import Header from '../components/Header';
import {Provider} from 'react-redux';

import configureStore from '../store/configureStore';

import ItemList from '../components/ItemList';


const store = configureStore();

export default React.createClass({
    render() {
        return (
            <div> 
            <Header title="Repos"/>  
        <Provider store={store}>
           
            <ItemList />
        </Provider>
        </div>        
        )
    }
})


