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
            O Chamado do Discord é uma função que permite aos membros de uma
            equipe criar um canal no aplicativo Discord para acompanhar o
            progresso de uma tarefa ou projeto quando o Jira, uma ferramenta
            comumente usada para gerenciamento de projetos, estiver offline ou
            enfrentando problemas. Com essa funcionalidade, os membros da equipe
            podem colaborar em tempo real, compartilhando atualizações,
            informações e arquivos relevantes para a tarefa ou projeto em
            questão.
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
          <h1>/Template</h1>
          <p>
          No contexto do Jira, o template pode ser utilizado para padronizar a criação de chamados e outros tipos de tarefas, com informações já pré-definidas como nome, descrição, campos obrigatórios, etc. Para acionar um template, é possível utilizar um comando específico, como "/template", por exemplo.
          </p>
          <Button onClick={Templates}>Comandos</Button>
        </div>
        <ImageMutinho data-aos="fade-up" id="Pausa">
          <img
            src="https://media.discordapp.net/attachments/1035363337015394316/1081094875656765490/Frame_2.png?width=1350&height=490"
            alt=""
          />
        </ImageMutinho>
      </DefaultTemplate>
      <Default data-aos="fade-up">
        <div>
          <h1>/Pausa</h1>
          <p>
            O comando "/pausa", é uma funcionalidade disponível em alguns
            sistemas de gerenciamento de projetos, que permite aos usuários
            registrar o tempo em que estão em pausa. Ao acionar o comando, o
            sistema começa a contar o tempo em que a pessoa está afastada das
            atividades, e quando ela retorna, é possível encerrar a pausa,
            clicando em um botão de "encerrar" ou "finalizar" a pausa.
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
