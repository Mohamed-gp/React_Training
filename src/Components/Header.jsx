import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <>
        <header className='bg-headercolor relative'>
            <div className="container flex justify-between py-6 px-2 md:px-0 items-center">
                <a href="/" className='font-fira font-bold text-xl text-white hover:text-hovercolor duration-500'>{`<MOHAMED/>`}</a>
                <RxHamburgerMenu className='md:hidden text-white cursor-pointer text-3xl'/>
                <nav className="absolute top-full left-0 flex-col">
                    <ul className="flex-col md:flex-row md:relative flex gap-x-7 font-fira text-white">
                        <li><a href="#" className='hover:text-hovercolor text-xl font-bold duration-500 relative'>Home</a></li>
                        <li><a href="#" className='hover:text-hovercolor text-xl font-bold duration-500 relative'>About</a></li>
                        <li><a href="#" className='hover:text-hovercolor text-xl font-bold duration-500 relative'>Skills</a></li>
                        <li><a href="#" className='hover:text-hovercolor text-xl font-bold duration-500 relative'>Projects</a></li>
                        <li><a href="#" className='md:px-6 md:py-2 bg-hovercolor rounded-2xl text-xl font-bold hover:bg-white hover:text-hovercolor duration-500'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header