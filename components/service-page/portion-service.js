import { useMediaQuery } from 'react-responsive';
import styles from './service-page.module.css';

function PortionService(props) {

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

    const service = props.service;

    return (

        <div>
            {isMobile && 
            <div>
                <div className='denseServiceDiv-expandable-mobile' >
                    <h1 className='denseServiceH1-mobile'>{service}</h1>
                </div>
            </div>
            }
        </div>

        
// <div className='denseServiceDiv' >
// <h1 className='denseServiceH1'>{service}</h1>
// </div>


   )
}

export default PortionService;