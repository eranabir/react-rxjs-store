import {useContext,useState,useEffect} from 'react';
import {StoreContext} from "./";

export function useActions(cb){

    const store = useContext(StoreContext);
    const [subStoreActions,setSubStoreActions] = useState({});
    useEffect(()=>{
        setSubStoreActions(cb(store))
    },[]);
    return subStoreActions


}