import {
  ContainerHome,
  ContainerButton,
  ButtonPrimary,
  Button,
  Container,
  Image,
  ContainerFunctions,
  Default,
  Funcionalidades,
  ImageMutinho,
  DefaultTemplate,
} from "../styles/home";
import { NewFeatures } from "../utils/features";
import { bio } from "../utils/bio";
import { FunctionsBot } from "../utils/features";

import { IoIosCheckmark } from "react-icons/io";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

import { GiTicket } from "react-icons/gi";

import video from "../assets/teste.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

export function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function Pausa() {
    const text = "/pausa";
    navigator.clipboard.writeText(text); // Copia o texto para a área de transferência
    alert("Comando copiado!"); // Exibe um alerta de que o texto foi copiado
  }

  function Templates() {
    const text = "/templates";
    navigator.clipboard.writeText(text); // Copia o texto para a área de transferência
    alert("Comando copiado!"); // Exibe um alerta de que o texto foi copiado
  }
  return (
    <>
      <Header />
      <Container data-aos="fade-up">
        <ContainerHome data-aos="fade-up">
          <div>
            <h1>Mutinho</h1>
            <p>{bio}</p>
            {NewFeatures.map((itens) => {
              return (
                <li key={itens.id}>
                  <IoIosCheckmark size={25} />
                  {itens.title}
                </li>
              );
            })}
          </div>
          <ContainerButton data-aos="fade-up">
            <Link to="Chamado">
              <Button>Funcionalidades</Button>
            </Link>
          </ContainerButton>
        </ContainerHome>
        <Image data-aos="fade-up">
          <img
            src="https://media.discordapp.net/attachments/1035363337015394316/1081045388578005033/chave.png?width=655&height=675"
            alt=""
          />
        </Image>
      </Container>
      <Funcionalidades data-aos="fade-up">
        <h1>Funcionalidades</h1>
      </Funcionalidades>
      <ContainerFunctions>
        {FunctionsBot.map((itens) => {
          return (
            <Link key={itens.title} to={itens.title} data-aos="fade-up">
              <GiTicket size={25} />
              {itens.title}
            </Link>
          );
        })}
      </ContainerFunctions>
      <Default data-aos="fade-up" id="Chamado">
        <div>
          <h1>Criar novo chamado</h1>
          <p>
            essa funcionalidade pode estar relacionada a um sistema de suporte,
            onde os usuários podem criar um chamado para reportar um problema ou
            solicitar ajuda.
          </p>
        </div>
        <ImageMutinho data-aos="fade-up" id="Templates">
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
        </ImageMutinho>
      </Default>
      <DefaultTemplate data-aos="fade-up">
        <div>
          <h1>/Templates</h1>
          <p>
            essa funcionalidade pode estar relacionada a um sistema de suporte,
            onde os usuários podem criar um chamado para reportar um problema ou
            solicitar ajuda.
          </p>
          <Button onClick={Templates}>Comandos</Button>
        </div>
        <ImageMutinho data-aos="fade-up" id="Pausa">
          <img
            src="https://cdn.discordapp.com/attachments/1035363337015394316/1081050723954995250/Frame_3.png"
            alt=""
          />
        </ImageMutinho>
      </DefaultTemplate>
      <Default data-aos="fade-up">
        <div>
          <h1>/Pausa</h1>
          <p>
            essa funcionalidade pode estar relacionada a um sistema de suporte,
            onde os usuários podem criar um chamado para reportar um problema ou
            solicitar ajuda.
          </p>
          <Button onClick={Pausa}>Comandos</Button>
        </div>
        <ImageMutinho>
          <img
            src="https://cdn.discordapp.com/attachments/1035363337015394316/1081047972785168464/Frame_2.png"
            alt=""
          />
        </ImageMutinho>
      </Default>
      <Footer />
    </>
  );
}
