import { Link } from 'react-router-dom';
import Carrito from '../img/Carrito.png'

const CartWidget = ()=>{
    return(
        <>  
            <li><Link to={'/'}><img className='carrito' src={Carrito} alt="botón carrito"/></Link></li>
            
            <p className='carritoBtn'>1</p>
        </>
        
    )
};

export default CartWidget;