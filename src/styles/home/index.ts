import styled from "styled-components";

export const ContainerHome = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }
  h1 {
    margin-bottom: 2rem;

    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 3.5rem;

    line-height: 4rem;
  }
  p {
    font-size: .9rem;
    --tw-text-opacity: 1;
    color: rgb(145 149 171/var(--tw-text-opacity));

    margin-bottom: 2rem;
  }
  span {
    font-size: .9rem;
    margin-bottom: 16px;
    --tw-text-opacity: 1 !important;
    color: rgb(145 149 171/var(--tw-text-opacity));
  }
`;
