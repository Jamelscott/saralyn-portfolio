import photo from './saralynPhoto.png'
import Image from "next/image";
import './aboutMe.css'
function AboutMe() {
    return ( 
        <div id="about-me" className='aboutMe-container'>
            <Image src={photo} alt='photo headshot'/>
            <div className='aboutMe-text-container'>
                <h1 className='aboutMe-h1'>Hi, I‘m Sara </h1>
                <p className='aboutMe-p'>I&apos;m a passionate UX/UI designer dedicated to crafting seamless and visually captivating digital experiences.</p>
                <p className='aboutMe-p'>My mission? To transform ideas into intuitive designs. Ready to elevate your digital presence? Let&apos;s create something extraordinary!</p>
            </div>
        </div>
     );
}

export default AboutMe;