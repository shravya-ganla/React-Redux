import React from 'react';
import './App.css';
import CakeContainer from './ReduxComponents/cakeContainer'
import {Provider} from 'react-redux';
import store from './ReduxComponents/Redux/store';
import IceCreamCotainer from './ReduxComponents/iceCreamCotainer';
import NewCakeContainer from './ReduxComponents/Redux/NewCakeContainer';
import ItemContainer from './ReduxComponents/itemContainer';
import UserContainer from './ReduxComponents/UserContainer';


function App() { 
  return (
      <Provider store={store}>
        <div className="App">
          {/* <NewCakeContainer/>    
          <CakeContainer/>
          <IceCreamCotainer/>
          <ItemContainer cake/>
          <ItemContainer/> */}
          <UserContainer/>
       </div>
      </Provider>
  );
}

export default App;
