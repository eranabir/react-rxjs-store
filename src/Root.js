import React from 'react';
import {useStore,useActions} from "./store";
import logo from "./logo.svg";
import Root2 from "./Root2";

function Root() {

    const {loginStatus} = useStore(({AuthStore})=>({loginStatus:AuthStore.loginStatus}));
    const {doLogin,doLogout} = useActions(({AuthStore})=>({doLogout:AuthStore.doLogout,doLogin:AuthStore.doLogin}));


    const test =async()=>{


        try{
            await doLogin();
        }catch (e) {



        }

    };
    return (<div className="App">
        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <p>{loginStatus ? 'true' : 'false'}</p>
            <button onClick={()=>doLogin()}>login</button>
            <button onClick={()=>doLogout()}>do logout</button>


            <div>
                <h1>Root2</h1>
                <Root2/>
            </div>

        </header>
    </div>)

}


export default Root