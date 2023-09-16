
const Skills = () => {
  return (
    <>

    <p className="title text-3xl md:text-4xl">SKILLS</p>
    <div className="skills-container container flex justify-center flex-wrap gap-10 px-10">
        <div className="card">
            <img src="../../public/assets/imgs/icons8-html.svg" alt="skill-1" />
            <p className="skill-name">HTML</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-css3 (1).svg" alt="skill-2" />
            <p className="skill-name">CSS</p>
        </div>
        <div className="card js">
            <img src="../../public/assets/imgs/icons8-javascript.svg" alt="skill-3" />
            <p className="skill-name">JS</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-tailwind-css.svg" alt="skill-4" />
            <p className="skill-name">TAILWIND</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-sass.svg" alt="skill-5" />
            <p className="skill-name">SASS</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-react.svg" alt="skill-6" />
            <p className="skill-name">REACT</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-redux.svg" alt="skill-7" />
            <p className="skill-name">REDUX</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-git.svg" alt="skill-8" />
            <p className="skill-name">GIT</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-c-programming.svg" alt="skill-9" />
            <p className="skill-name">C</p>
        </div>
        <div className="card">
            <img src="../../public/assets/imgs/icons8-figma.svg" alt="skill-10" />
            <p className="skill-name">FIGMA</p>
        </div>
    </div>
    </>
  )
}

export default Skills