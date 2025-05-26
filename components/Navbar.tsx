import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image 
            src="/images/logo.svg" 
            alt="logo" 
            width={46} 
            height={44} 
          />
        </div>
      </Link>
      
      <NavItems />
    </nav>
  )
}

export default Navbar