import Service from "../../components/service-page/service";
import Subheader from "../../components/SubheaderComponents/Subheader";
import serviceData from "../../data/service-data";
import { useMediaQuery } from 'react-responsive';
import subheaderData from "../../data/subheader";


function Services() {
    const [{title:titles,slogan:slogans,tagline:taglines}]= subheaderData;

    const isMobile = useMediaQuery({
        query: '(max-width: 1024px)'
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
                <section className="pt-5">
                        <div className='' >
                            <Subheader key={0} title={titles} slogan={slogans} tagline={taglines}/>
                            <div className='ypad-mobile'>
                            {serviceData.map((service) => (
                                <Service key={service.key} name={service.name} tagline={service.tagLine} description={service.description} form={service.form} />
                            ))}
                            </div>
                        </div> 
                </section>
            }
        </div>



        // <section>
        //     <div className={styles.servicePage } >
        //     <div className='xpad' >
        //     <Subheader key={0} title={titles} slogan={slogans} tagline={taglines}/>
        //     <div className='ypad'>
        //     {serviceData.map((service) => (
        //         <Service key={service.key} name={service.name} tagline={service.tagLine} description={service.description} form={service.form} />
        //     ))}
        //     </div>
        //     </div> 
        
           
        // </div>
        // </section>


    )
}

export default Services;