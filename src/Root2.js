import React from 'react';
import {useStore} from "./store";

function Root2() {

    const {loginStatus} = useStore(({AuthStore}) => ({loginStatus: AuthStore.loginStatus}));

    return (

        <p>{loginStatus ? 'true' : 'false'}</p>

    )

}


export default Root2