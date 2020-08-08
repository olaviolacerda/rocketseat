import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Login, List, Book } from './pages';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List, 
        Book
    })
)

export default Routes;