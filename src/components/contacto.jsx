import PropTypes from 'prop-types';
import { Contactos } from '../models/contactos';


const Contacto = ({contact,changes,remove}) => {

    function activesIcons(){
        if(contact.estado){
            return( <i onClick={()=>changes(contact)} className='bi bi-toggle-on text-success'></i>)
        }else{
            return(<i  onClick={()=>changes(contact)} className='bi bi-toggle-off text-danger'></i>)
        }
    }


    return (
        <tr>
            <td >{contact.nombre}</td>
            <td >{contact.apellido}</td>
            <td >{contact.telefono}</td>
            <td >{contact.email}</td>
            <td  >{activesIcons()}
            <i onClick={()=>remove(contact)} className='bi bi-trash text-danger'></i></td>
        </tr>
    );
};


Contacto.propTypes = {
    contact:PropTypes.instanceOf(Contactos).isRequired,
    changes:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};


export default Contacto;
