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
  ImageMutinho
} from "../styles/home";
import { NewFeatures } from "../utils/features";
import { bio } from "../utils/bio";
import { FunctionsBot } from "../utils/features";

import { IoIosCheckmark } from "react-icons/io";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

import { GiTicket } from "react-icons/gi";

import video from '../assets/teste.mp4'

export function App() {
  return (
    <>
      <Header />
      <Container>
        <ContainerHome>
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
          <ContainerButton>
            <Button>Comandos</Button>
            <ButtonPrimary>Funcionalidades</ButtonPrimary>
          </ContainerButton>
        </ContainerHome>
        <Image>
          <img src="https://probot.io/static/navimg.webp" alt="" />
        </Image>
      </Container>
      <Funcionalidades>
        <h1>Funcionalidades</h1>
      </Funcionalidades>
      <ContainerFunctions>
        {FunctionsBot.map((itens) => {
          return (
            <li key={itens.title}>
              <GiTicket size={25} />
              {itens.title}
            </li>
          );
        })}
      </ContainerFunctions>
      <Default>
        <div>
          <h1>Criar novo chamado</h1>
          <p>
            essa funcionalidade pode estar relacionada a um sistema de suporte,
            onde os usuários podem criar um chamado para reportar um problema ou
            solicitar ajuda.
          </p>
          <Button>Comandos</Button>
        </div>
        <ImageMutinho>
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
        </ImageMutinho>
      </Default>
      <Default>
        <div>
          <h1>/Templates</h1>
          <p>
            essa funcionalidade pode estar relacionada a um sistema de suporte,
            onde os usuários podem criar um chamado para reportar um problema ou
            solicitar ajuda.
          </p>
          <Button>Comandos</Button>
        </div>
        <ImageMutinho>
          <img
            src="https://mee6.xyz/assets/reaction_roles.be10081b.webp"
            alt=""
          />
        </ImageMutinho>
      </Default>
      <Default>
        <div>
          <h1>/Pausa</h1>
          <p>
            essa funcionalidade pode estar relacionada a um sistema de suporte,
            onde os usuários podem criar um chamado para reportar um problema ou
            solicitar ajuda.
          </p>
          <Button>Comandos</Button>
        </div>
        <ImageMutinho>
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
        </ImageMutinho>
      </Default>
      <Footer />
    </>
  );
}
