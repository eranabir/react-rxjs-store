import {useContext,useState,useEffect} from 'react';
import {StoreContext} from "./";

export function useStore(cb){

    const store = useContext(StoreContext);
    const [subStoreValues,setSubStoreValues] = useState({});
    useEffect(()=>{
        const storeValues = cb(store);
        Object.keys(storeValues).forEach((storeValue)=>{
            const value = storeValues[storeValue];
            value.subscribe(data=>{
                setSubStoreValues({...subStoreValues,[storeValue]:data})
            })
        });
    },[]);
    return subStoreValues
}