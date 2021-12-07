import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import RegisterScreen from './screens/RegisterScreen.js';
import LogInScreen from './screens/LogInScreen.js';
import PropCardScreen from './screens/PropCardScreen2.js';

const Routes = () => (
   <Router>
      <Scene key = 'root'>
         <Scene 
            key='register'
            component={RegisterScreen} 
            title='RegisterScreen' 
            initial={true} 
            hideNavBar={true}
            cardStyle={{backgroundColor: '#EEEE'}}
         />
         <Scene 
            key='login' 
            component={LogInScreen} 
            title='LogInScreen' 
            hideNavBar={true}
            cardStyle={{backgroundColor: '#EEEE'}}
         />
         <Scene 
          key='propCard' 
          component={PropCardScreen} 
          title='PropCardScreen' 
          hideNavBar={true}
          cardStyle={{backgroundColor: 'white'}}
        />
      </Scene>
   </Router>
)
export default Routes;
