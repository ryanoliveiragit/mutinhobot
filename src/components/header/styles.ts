import styled from "styled-components";

export const ContainerHeader = styled.header`
    h1 {
        font-size: 1rem;
    }
    padding: 3rem 10rem;
    display: flex;
    justify-content: flex-end;
    justify-content: space-between;

    color: ${(props) => props.theme.white};
    ul {
        align-items: center;
        justify-content: center;
        display: flex;
        gap: 2rem;

        a {
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
        }
    }
    button {
        border: none;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  :hover {
    cursor: pointer;
    transition: .2s;
    background-color: ${(props) => props.theme.purpleBlack};
  }
  padding: .7rem 2rem;

  display: flex;
  background-color: ${(props) => props.theme.purple};

  color: white;
    }
`