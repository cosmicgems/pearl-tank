import { useMediaQuery } from 'react-responsive';

function PortionService(props) {

    const isMobile = useMediaQuery({
        query: '(max-width: 431px)'
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
            <div className='denseServiceDiv-expandable-mobile ' >
                <h1 className='denseServiceH1-mobile'>{service}</h1>
            </div>
        </div>
        }
            {isTablet && !isLaptop &&
            <div>
                <div className='denseServiceDiv-expandable-tablet ' >
                    <h1 className='denseServiceH1-tablet'>{service}</h1>
                </div>
            </div>
            }
            {isLaptop && 
            <div>
                <div className='denseServiceDiv-expandable-laptop ' >
                    <h1 className='denseServiceH1-laptop'>{service}</h1>
                </div>
            </div>
            }
        </div>

  

   )
}

export default PortionService;