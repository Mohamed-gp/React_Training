import { useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    const menu = useRef(null)
    const menufun = () => {
        if (menu.current.classList.contains("bottom-full")) {
            menu.current.classList.remove("bottom-full")
            menu.current.classList.add("top-full")
        }
        else{
            menu.current.classList.remove("top-full")
            menu.current.classList.add("bottom-full")
        }
    }
  return (
    <>
    <header className='bg-headerc relative'>
        <div className="container flex justify-between items-center px-8 py-6 font-bold text-white text-xl">
            <a href="../" className="logo font-fira text-2xl ">{'<MOHAMED/>'}</a>
            <RxHamburgerMenu className='text-4xl cursor-pointer md:hidden' onClick={menufun}/>
            <nav ref={menu} className="bg-red-300 duration-1000  p-5 leading-10 absolute bottom-full -z-10 left-0 w-full md:p-0 md:leading-none md:relative md:w-auto md:bg-transparent">
                <ul className='relative flex flex-col duration-1000  justify-center  items-center md:relative md:flex-row md:gap-x-10'>
                    
                    <li className='hover:text-maincolor-100 hover:border-b-maincolor-100 duration-1000 border-b-4 w-full text-center md:border-none '><a href='#home'>Home</a></li>
                    <li className='hover:text-maincolor-100 hover:border-b-maincolor-100 duration-1000 border-b-4 w-full text-center my-2 md:border-none '><a href='#about'>About</a></li>
                    <li className='hover:text-maincolor-100 hover:border-b-maincolor-100 duration-1000 border-b-4 w-full text-center my-2 md:border-none '><a href='#project'>Projects</a></li>
                    <li className='hover:text-maincolor-100 hover:border-b-maincolor-100 duration-1000 border-b-4 w-full text-center md:border-none md:bg-maincolor-100 md:py-3 md:px-6 md:rounded-3xl md:hover:text-maincolor-100 md:hover:bg-white'><a href='#contact'>Contact</a></li>
                </ul>
                    <div className='absolute-triangle absolute  top-full left-1/2 -translate-x-1/2 border-30 border-transparent  border-t-red-300 md:hidden'></div>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header
