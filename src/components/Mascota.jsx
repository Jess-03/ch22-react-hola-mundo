import { Edad } from './Edad';
import '../App.css';

const Mascota = ({name, age, show}) => {
    return (
    <>
        <h3 className="Mascota"> Soy una mascota y me llamo {name}</h3> 
        <Edad className="Mascota" edad={age} show={show}/>
    </>
    )
}

export default Mascota;
