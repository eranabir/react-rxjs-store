import {useContext} from 'react';
import {StoreContext} from "./";

export function useActions(cb){
    const store = useContext(StoreContext);
    return cb(store)
}