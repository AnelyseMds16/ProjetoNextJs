import Head from 'next/head'
import Image from "next/image";
import GlobalStyle from '../styles/GlobalStyle'
import {Header} from '../components'

export default function Home() {
  return (
    <>
        <Header />
        <header>
        <h1>Local Jobs</h1>
        <h3> Bem vindo ao Local Jobs. Esse é um site dediado a te ajudar a procurar ou a oferecer algum tipo de serviço. 
            Nós vamos te mostrar todos as pessoas dísponiveis pra te ajudar em sua região, e se você deseja oferecer um serviço, 
            nós vamos te indicar!! Cadastre-se e torne sua vida mais prática!
        </h3>
        </header>
        <div className="grid-container">
            <>
                <div className="grid-item">
                    <Image src="/img1.jpeg" className="imagem_menu" alt="inicio" width="400%" height="350%"></Image>
                    <figcaption>Contrate sem sair de casa!</figcaption>
                </div>
                <div className="grid-item">
                    <Image src="/img2.jpeg" className="imagem_menu" alt="inicio" width="400%" height="350%"></Image>
                    <figcaption>Garanta seus serviços sem grande esforço para divulgaçao!</figcaption>
                </div>
            </>
        </div>            
       
        <script src="js/script.js"></script>
    </>
  )
}