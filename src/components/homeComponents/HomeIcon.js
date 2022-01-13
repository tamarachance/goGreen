import {FaHome} from 'react-icons/fa';

const HomeIcon = () => {
    const home = FaHome;
    return ( 
        <div className='home-icon'>
            <img width={48} height={43} { ...home } alt=' '/>
        </div>
     );
}
 
export default HomeIcon;