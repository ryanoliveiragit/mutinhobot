import styled from "styled-components";

export const ContainerHome = styled.div`
  h1 {
    margin-bottom: 2rem;

    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 3.5rem;

    line-height: 4rem;
  }
  p {
    font-size: 0.9rem;
    --tw-text-opacity: 1;
    color: rgb(145 149 171 / var(--tw-text-opacity));

    margin-bottom: 2rem;
  }
  li {
    display: flex;
    align-items: center;
    gap: .5rem;
    list-style: none;
    font-size: 0.9rem;
    margin-bottom: 16px;
    --tw-text-opacity: 1 !important;
    color: rgb(145 149 171 / var(--tw-text-opacity));
  }
  svg {
    color: ${(props) => props.theme.green};
  }
`;

export const ContainerButton = styled.div`
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
`;
export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  font-size: 0.85rem;

  padding: 1rem 2.5rem;

  display: flex;
  background-color: ${(props) => props.theme.purple};

  color: white;
`;
export const ButtonPrimary = styled(Button)`
  --tw-text-opacity: .2;
  color: white;
    background-color: rgb(145 149 171 / var(--tw-text-opacity));
`;
