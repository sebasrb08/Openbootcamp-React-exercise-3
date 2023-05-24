import React, {useState,useRef} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Contactos } from '../../models/contactos';

const Formulario = () => {
   const location=useLocation()
   const navigate=useNavigate()
  const objeto= location.state

  const nombre=useRef()
  const apellido=useRef()
  const telefono=useRef()
  const email=useRef()

    const [add, setAdd] = useState(objeto);
    const [loading, setLoading] = useState(false);


    function addEvent(e){
        e.preventDefault()
    }

    function addData(){
        const lista = new Contactos(
            nombre.current.value,
            apellido.current.value,
            telefono.current.value,
            email.current.value,
            false
          );
        const temp=[...add,lista]
        setAdd(temp)
        changeLoad() 
    }

    function changeLoad(){
        setLoading(true)
    }

     React.useEffect(()=>{
        if(loading){
            navigate('/',{
                state:add
            })
        }
     })
    return (
        <div className=' container-lg bg-white rounded-1 p-3' >
            <form onSubmit={addEvent} className='row d-flex justify-content-center'>
                    <div className='mb-2'>
                        <h2>Formulario</h2>
                    </div>

                    <div>
                        <input type='text' ref={nombre} placeholder='Nombre' className='col-5 mx-1'  />
                        <input type='text' ref={apellido} placeholder='Apellido' className='col-5' />
                    </div>

                    <div>
                        <input type='text' ref={telefono} placeholder='Telefono' className='mt-3 col-5 mx-1'  />
                        <input type='text' ref={email} placeholder='Email'  className='mt-3 col-5' />
                    </div>

                    <div>
                        <button onClick={addData} type='submit' className='bg-success mt-3 col-2 text-white ' >Enviar</button>
                    </div>
            </form>
        </div>
    );
}



export default Formulario;
