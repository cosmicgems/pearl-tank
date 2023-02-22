import classes from './logo.module.css'
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

function Logo(){

    const isMobile = useMediaQuery({
        query: '(max-width: 424px)'
    })
    const isTablet = useMediaQuery({
        query: '(min-width: 767px)'
    })
    const isLaptop = useMediaQuery({
        query: '(min-width: 1366px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1920px)'
    })


    return (
        <div>
            {isMobile &&
            <div>
                <Image className='image-header ' src="/images/site/cosmic-logo.png" alt="" width={75} height={10} />
            </div>
            }
        </div>




    // <div className='logo2' >
    // <div className='row  pic me-1'>
    // <Image className='image-header ' src="/images/site/cosmic-logo.png" alt="" width={75} height={10} />
    // </div>
    // <div className='logo'>

    // </div>
    // </div>


    )
}

export default Logo;