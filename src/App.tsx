import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import styleCl from "./components/Profile/Profile.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = (props: any) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />

                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
                        <Route path="/dialogs"
                               render={() => <Dialogs state={props.state.dialogsPage} />} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


