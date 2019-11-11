import React from 'react';
import {useStore} from "./store";

function Root2() {

    const {loginStatus} = useStore(({AuthStore,BooksStore})=>({loginStatus:AuthStore.loginStatus,books:BooksStore.books}));

    console.log('root2 render',loginStatus);


    return (<div >
        Root2
    </div>)

}


export default Root2