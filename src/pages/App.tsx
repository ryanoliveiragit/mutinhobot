import { ContainerHome } from "../styles/home";
import { NewFeatures } from "../utils/features";
import { bio } from "../utils/bio";

export function App() {
  return (
    <>
      <ContainerHome>
        <div>
          <h1>Mutinho</h1>
          <p>{bio}</p>
          {NewFeatures.map((itens) => {
            return <span key={itens.id}>{itens.title}</span>;
          })}
          <div>
            <button>add to discord</button>
            <button>sea features</button>
          </div>
        </div>
      </ContainerHome>
    </>
  );
}
