import React from 'react';
import '../App.css'
import { Edad } from './Edad';

export const NombreCompleto = (props) => {
    console.log("props", props);
    return (
    <React.Fragment> {/*React.fragment*/}
        <h3 className="App">Me llamo {props.name}</h3> 
        {/*<p className="App">Cosi cosi {props.mood} jeje </p> */}
        <Edad edad={props.age} show={props.show}/>
    </React.Fragment>
    );
};

//export default NombreCompleto;
