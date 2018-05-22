import React from 'react';
import Header from '../components/Header';

const App = () => <Header title="App"/>
export default React.createClass({
    render() {
        return <div> 
                 <Header/>
                 Hello 
                 </div>
    }
})