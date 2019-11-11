import {useContext,useState,useEffect} from 'react';
import {StoreContext} from "./";
import {skip} from "rxjs/operators";

export function useStore(cb){

    const store = useContext(StoreContext);
    const storeValues = cb(store);
    const initValues = {};

    Object.keys(storeValues).forEach((key)=>{
        const subject = storeValues[key];
        initValues[key] = subject.getValue()
    });

    console.log('initValues',initValues);
    const [subStoreValues,setSubStoreValues] = useState(initValues);

    useEffect(()=>{

        const unsubscribables = [];
        console.log('use Effect');
        Object.keys(storeValues).forEach((key)=>{
            const subject = storeValues[key];
            const unsubscribable = subject.pipe(skip(1)).subscribe(data=>{
                console.log('value changed',data);


                Object.keys(storeValues).forEach((key)=>{
                    const subject = storeValues[key];
                    initValues[key] = subject.getValue()
                });


                setSubStoreValues({...initValues,[key]:data})
            });
            unsubscribables.push(unsubscribable)
        });

        return function () {
            console.log('unsubscribed');
            unsubscribables.forEach(u=>u.unsubscribe())
        }
    },[]);

    return subStoreValues
}