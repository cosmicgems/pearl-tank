import Link from 'next/link';
import classes from './main-navigation.module.css'

function BlogNavigation() {
    return (
        
        <div className={classes.allHeaderDiv}>
            <header className='header2'>
                <nav>
                    <ul>
                        <li><Link href="/">Science and Technology</Link></li>
                        <li><Link href="/">Health & Fitness</Link></li>
                        <li><Link href="/">Fashion & Beauty</Link></li>
                        <li><Link href="/">Travel</Link></li>
                        <li><Link href="/">Home Improvement and DIY</Link></li>
                        <li><Link href="/">Parenting</Link></li>
                        <li><Link href="/">Marketing and Online Business</Link></li>
                        <li><Link href="/">Science and Technology</Link></li>
                        <li><Link href="/">Outdoor Lifestyle</Link></li>
                        <li><Link href="/">Video Gaming</Link></li>
                        <li><Link href="/">Mental Health</Link></li>
                        <li><Link href="/">Personal Development</Link></li>
                    </ul>
                </nav>
            </header>
        </div>    
    )
}

export default BlogNavigation;