import React from 'react';
import {useStore,useActions} from "./store";
import logo from "./logo.svg";
import Root2 from "./Root2";

function Root() {

    const {loginStatus,books} = useStore(({AuthStore,BooksStore})=>({loginStatus:AuthStore.loginStatus,books:BooksStore.books}));
    const {doLogin,doLogout,getBooks} = useActions(({AuthStore,BooksStore})=>({getBooks:BooksStore.getBooks,doLogout:AuthStore.doLogout,doLogin:AuthStore.doLogin}));

    console.log('loginStatus',loginStatus)
    console.log('books',books)




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
            <div>{loginStatus && <Root2/>}</div>

            <h5>Login Status {loginStatus ? 'true':'false'}</h5>
            <h5>Books : {books.length}</h5>

            {!loginStatus && <button onClick={()=>doLogin()}>login</button>}
            {loginStatus && <button onClick={()=>doLogout()}>do logout</button>}

            <button onClick={()=>getBooks()}>get books</button>


        </header>
    </div>)

}


export default Root