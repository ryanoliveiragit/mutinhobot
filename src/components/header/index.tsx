import { navLinks } from "../../utils/navLinks";
import { Link } from "react-scroll";

import { ContainerHeader } from "./styles";

export function Header() {
  return (
    <div>
      <ContainerHeader>
        <h1>mutinho</h1>
        <ul>
          {navLinks.map((itens) => {
            return (
              <Link
                key={itens.id}
                to={itens.title}
                smooth={true}
                offset={200}
                duration={500}
              >
                {itens.title}
              </Link>
            );
          })}
        </ul>
      </ContainerHeader>
    </div>
  );
}
