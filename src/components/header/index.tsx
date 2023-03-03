

import { ContainerHeader } from "./styles";

export function Header() {
  return (
    <div>
      <ContainerHeader>
        <h1>mutinho</h1>
        <ul>
          <button onClick={() => alert('Contate um dos desenvolvedores: ryanvs#2113 / diegorosa#1546')}>Suporte</button>
        </ul>
      </ContainerHeader>
    </div>
  );
}
