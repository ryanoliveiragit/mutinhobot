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

        li {
            font-size: 1rem;
        }
    }
`