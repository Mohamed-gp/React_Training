
const Home = () => {
  return (
    <>
        <div className="container flex items-center flex-col font-bold gap-y-5 text-center  px-10 py-16 leading-tight md:text-left  md:gap-0 md:flex-row md:justify-center">
            <div className="card-one flex-1 order-last md:-order-1">
                <p className="text-2xl md:text-3xl text-maincolor-85">Hello !</p>
                <p className="text-maincolor-71 md:text-3xl md:py-1">I'm <span className="text-maincolor-100 text-3xl md:text-4xl lg:text-5xl ">Outerbah Mohamed</span></p>
                
                <p className="text-maincolor-71 text-2xl md:text-3xl md:py-1">a <span className="text-maincolor-100 text-3xl md:text-4xl lg:text-5xl">React Front-End Developer</span></p>
                <p className="text-maincolor-71 text-2xl md:text-3xl"> and I'm here to transform your ideas into captivating web experiences.</p>
            </div>
            <div className="card-two ">
                <div className="profile-img">
                <img src="../../public/assets/imgs/my-picture.svg" alt="profile-picture" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home