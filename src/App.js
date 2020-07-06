import React from 'react';
import styles from './App.module.css';

import { WelcomeMsg, MenuBtn, DetailsBox } from './components';
import { fetchData} from './api';


class App extends React.Component {


    state = {
        dishes: [],
        render: '',
    };

    async componentDidMount() {
        const fetchdata = await fetchData();
        this.setState({ dishes: fetchdata });
    }
    
    showAlert = async (index) => {
        alert(index);
    }

    
    render() {
        const { dishes } = this.state;

    return(
        <div className={styles.container}>
        

            <WelcomeMsg />
            <MenuBtn title="Show Menu">
            <DetailsBox dishes={dishes} showAlert={this.showAlert}/>
            </MenuBtn>
        </div>
    );
    }
}
export default App;

