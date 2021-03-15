import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' 
                    render={ () => <DialogsContainer /> }/>

                <Route path='/Profile' 
                    render={ () => <Profile /> }/>

                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>
    );
};

export default App;
