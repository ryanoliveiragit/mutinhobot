import {
  ContainerHome,
  ContainerButton,
  ButtonPrimary,
  Button,
} from "../styles/home";
import { NewFeatures } from "../utils/features";
import { bio } from "../utils/bio";

import { IoIosCheckmark } from "react-icons/io";

export function App() {
  return (
    <>
      <ContainerHome>
        <div>
          <h1>Mutinho</h1>
          <p>{bio}</p>
          {NewFeatures.map((itens) => {
            return (
              <li key={itens.id}>
                <IoIosCheckmark size={25}/>
                {itens.title}
              </li>
            );
          })}
        </div>
        <ContainerButton>
          <Button>Add to discord</Button>
          <ButtonPrimary>see features</ButtonPrimary>
        </ContainerButton>
      </ContainerHome>
    </>
  );
}
