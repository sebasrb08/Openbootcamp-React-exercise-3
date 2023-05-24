import React, {useState,useEffect} from 'react';
import { Contactos } from '../models/contactos';
import Contacto from './contacto';
import {useNavigate,useLocation} from 'react-router-dom';
const ContactoList = () => {
    const contacto=new Contactos('sebas','rueda','3133473052','sebasr1268@gmail.com',true)
    const contacto2=new Contactos('sebastian','bedoya','3133473052','sebasr1268@gmail.com',false)

    const [listaContactos, setListaContactos] = useState([contacto,contacto2]);
    const [loading, setLoading] = useState(false);

    const location =useLocation()
    const objet= location.state

    
    useEffect(() => {
        if(objet!=null){
            moreObject()
        }
        
    }, [objet]);
    function moreObject(){
        setListaContactos(objet)
    }


    function changeActive(contact){
        const index= listaContactos.indexOf(contact)
        const tempContact=[...listaContactos]
        tempContact[index].estado = !tempContact[index].estado
        setListaContactos(tempContact)
    }


    function deleteList(contact){
        const index= listaContactos.indexOf(contact)
        const tempContact=[...listaContactos]
        tempContact.splice(index,1)
        setListaContactos(tempContact)
    }


    const navigate  = useNavigate()
    React.useEffect(()=>{
        if(loading){
            navigate('/formulario',{state:listaContactos})
        }
    },[loading, listaContactos, navigate])


    function changest(){
        setLoading(true)
    }
    return (
        <div className='bg-white rounded-2 container-lg '>

            <div>
            <button onClick={changest}  type="button" className="btn btn-success "><i className="bi bi-plus-lg px-3"></i>Agregar</button>


            </div>
       

            <table className='table'>
                <thead>
                    <tr >
                        <th scope="col">nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">telefono</th>
                        <th scope="col">email</th>
                        <th scope="col">estado</th>
                    </tr>
                </thead>
                <tbody>
                {listaContactos.map((contactos,index)=>{
                        return(
                            <Contacto 
                            key={index} 
                            contact={contactos}
                            changes={changeActive}
                            remove={deleteList}
                            ></Contacto>
                        )
                
                })}
                </tbody>
            </table>

            
        </div>
    );
}
export default ContactoList;
