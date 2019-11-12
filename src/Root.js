import React from 'react';
import {Button} from "@material-ui/core";
import BaseModal from "./store/BaseModal";

function Root() {


  return (<div className="App">
    <header className="App-header">
            <BaseModal
                trigger={<Button variant='contained' color='primary'>open modal</Button>}
            />
    </header>
  </div>)

}

export default Root