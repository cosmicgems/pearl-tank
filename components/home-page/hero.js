import Image from 'next/image'
import classes from './hero.module.css'

function Hero(){
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/api.png" alt="" width={300} height={300} />
        </div>
        <h1 className={classes.hero}>
            Im Maliek
        </h1>
        <p className={classes.hero}>
            I blog about everything
        </p>
    </section>
}

export default Hero;