import Link from 'next/link'
import Image from "next/image";

const Header = () =>{
    return(
        <div className="fixed-top">
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" alt="inicio" width="60" height="60"/>
                </Link>
            </div>
            <div className="navbar">
                <ul id="nav-lists">
                    <li><Link href="login">Login</Link></li>
                    <li><Link href="cadastro">Cadastro</Link></li> 
                    <li><Link href="perfil">Perfil</Link></li>  
                </ul>
            </div>
        </div>
    )
}

export default Header;