import Lottie from 'lottie-react';
import animationData from '../../public/assets/imgs/Animation - 1694495106741.json'; 

const About = () => {
  return (
    <>
    <p className="title text-3xl md:text-4xl" id='about'>ABOUT</p>
    <div className="container flex flex-col items-center px-10 gap-9 font-bold text-center md:text-left md:flex-row">
      <div className="card-one flex-1 order-3 md:-order-3 ">
          <p className="main-description text-2xl  lg:text-4xl text-maincolor-85">A dedicated Front-end</p>
          <p className="main-description text-2xl lg:text-4xl text-maincolor-85">Developer based in Algeria</p>
          <p className="description text-base lg:text-xl text-maincolor-71 mt-3">As a Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, Tailwind, and SCSS, I bring a blend of technical skills and a growing understanding of UI/UX principles to my work. I specialize in creating and maintaining responsive websites that provide users with a seamless and enjoyable experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code while leveraging cutting-edge development tools and techniques. I am dedicated to delivering outstanding web applications with a strong focus on quality and user experience.</p>
      </div>
      <div className="card-two ">
      <Lottie animationData={animationData} />
      </div>
    </div>
    </>
  )
}

export default About