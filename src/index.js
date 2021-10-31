//importing react library
import React, {Component} from "react";
//import react dom to be able to render required node doms
import reactDom from "react-dom";
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
//import redux
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'
import {database} from './database/config'
//create store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
//second arg for props third arg for text/context
//const tasks = ["Take out the trash", "Showel the driveway", "Walk the dog"];
//element rendering
//const element = React.createElement("ol", null, tasks.map((task, index) => React.createElement("li", { key: index}, task))
//);

//JSX rendering
//div tag contains sub elements of main JSX element
/*const element = 
    <div>
    <h1>Our List</h1>
<ol>{tasks.map((task, index) => <li key = {index}>{task}</li>)}</ol>
    </div>*/


//createElement
reactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById("root"));