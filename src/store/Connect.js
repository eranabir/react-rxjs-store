import React, {useState, useContext, useEffect} from 'react';
import StoreContext from "./StoreContext";

export function Connect(Component, subStore, subActions) {
    return function WrapComponent() {
        const mainStore = useContext(StoreContext);
        const [state, setState] = useState({});
        const [actions, setActions] = useState({});
        useEffect(() => {
            subStore.forEach((storeItem) => {
                const selectStore = mainStore[storeItem.storeName];
                storeItem.values.forEach((value, index) => {
                    selectStore[value].subscribe(data => {
                        setState({...state,[value]:data});
                    })
                });
            });
            subActions.forEach((actionItem) => {
                const actionsData = {};
                const selectStore = mainStore[actionItem.storeName];
                actionItem.actions.forEach((action) => {
                    actionsData[action] = selectStore[action]
                });
                setActions(actionsData)
            });
        }, []);
        console.log('HOC data',state);
        return <Component {...state} {...actions}/>
    }
}