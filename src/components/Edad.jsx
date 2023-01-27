import React from 'react';
import '../App.css'
import PropTypes from 'prop-types';

const myStyle = {
    ocultar:{
        display: "none"
    },
    mostrar:{
        display: "block",
        color: "rgb(57, 87, 107)",
        backgroundColor: "rgb(238, 193, 141)"
    }
}


export const Edad = ({edad, show=true }) => { 
    return (
    <> {/*React.fragment*/}
        <p 
            className="App"
            style={ show ? myStyle.mostrar: myStyle.ocultar}
        > 
        tengo {edad} años 
        </p>
    </>
    )
}

Edad.propTypes = {
    edad: PropTypes.number.isRequired
};

