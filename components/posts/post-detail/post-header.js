import Image from "next/image";
import classes from "./post-header.module.css"

function PostHeader (props){
    const {title, image} = props;
    return <header className={classes.header}>
        <h1 className={classes.h1}>{title}</h1>
        <Image src={image} width={200} height={150} alt={title} />
    </header>
}

export default PostHeader;