import {useContext, useState, useEffect} from 'react';
import {StoreContext} from "./";
import {skip,distinctUntilChanged} from "rxjs/operators";

export function useStore(cb) {

  const store = useContext(StoreContext);
  const storeValues = cb(store);

  function getStateValues() {
    const stateValues = {};
    Object.keys(storeValues).forEach((key) => {
      const subject = storeValues[key];
      stateValues[key] = subject.getValue()
    });
    return stateValues;
  }
  function subscribeToStoreValues (){

    const unsubscribables = [];
    Object.keys(storeValues).forEach((key) => {
      const subject = storeValues[key];
      const unsubscribable = subject.pipe(distinctUntilChanged()).pipe(skip(1)).subscribe(data => {
        console.log(`${key} changed :`,data);
        setSubStoreValues(oldValues=>({...oldValues,[key]: data}));
      });
      unsubscribables.push(unsubscribable)
    });
    return unsubscribables

  }

  const stateValues = getStateValues();
  const [subStoreValues, setSubStoreValues] = useState(stateValues);

  console.log('useStore Hook stateValues : ', stateValues);

  useEffect(() => {

    console.log('useStore Hook : useEffect');

    const unsubscribables = subscribeToStoreValues();

    return function () {
      console.log('unsubscribed');
      unsubscribables.forEach(u => u.unsubscribe())
    }
  }, []);

  return subStoreValues
}