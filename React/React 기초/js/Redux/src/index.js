import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import App from './components/App';


/*
  Action
*/

const INCREMENT = "INCREMENT";

/*
  Reducer
*/

const initialState = {
  value : 0
};


const conuterReducer = (state = initialState , action ) => {
  switch(action.type){
    case INCREMENT :
     return  Object.assign({},state , {
       value : state.value + action.addBy
     });
     default : return state;
  }
}

/*
  Store
*/

const store = createStore(conuterReducer);

const render = () => {

  const appElement = document.getElementById("app");
  ReactDOM.render(<App store={store} />,appElement);
}

store.subscribe(render);
render();
