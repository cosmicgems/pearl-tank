import Service from "../../components/service-page/service";
import Subheader from "../../components/SubheaderComponents/Subheader";
import serviceData from "../../data/service-data";
import { useMediaQuery } from 'react-responsive';
import subheaderData from "../../data/subheader";


function Services() {
    const [{title:titles,slogan:slogans,tagline:taglines}]= subheaderData;

    const isMobile = useMediaQuery({
        query: '(max-width: 431px)'
    })
    const isTablet = useMediaQuery({
        query: '(min-width: 767px)'
    })
    const isLaptop = useMediaQuery({
        query: '(min-width: 1200px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1920px)'
    })

    return (
        
        <div>
        {isMobile && 
            <section className="pt-5">
                    <div className='' >
                    <div style={{paddingInline: "7vw"}}>
                        <Subheader key={0} title={titles} slogan={slogans} tagline={taglines}/>
                    </div>
                        
                        <div className='ypad-mobile'>
                        {serviceData.map((service) => (
                            <Service key={service.key} name={service.name} tagline={service.tagLine} description={service.description} form={service.form} />
                        ))}
                        </div>
                    </div> 
            </section>
        }
        
        {isTablet && !isLaptop && 
                <section className="pt-5">
                        <div className='' >
                        <div style={{paddingInline: "21vw", paddingBlockEnd: '5vh', paddingBlockStart: '2.5vh'}}>
                            <Subheader key={0} title={titles} slogan={slogans} tagline={taglines}/>
                        </div>
                            <div style={{paddingInline: '14vw'}}>
                            {serviceData.map((service) => (
                                <Service key={service.key} name={service.name} tagline={service.tagLine} description={service.description} form={service.form} />
                            ))}
                            </div>
                        </div> 
                </section>
            }

            
            {isLaptop && 
                <section className="">
                        <div className='' >
                        <div style={{paddingInline: '25vw'}}>
                            <Subheader key={0} title={titles} slogan={slogans} tagline={taglines}/>
                        </div>
                            <div style={{paddingInline: '14vw', paddingBlock: '5vh'}}>
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