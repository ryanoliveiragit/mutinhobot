import styled from "styled-components";

export const ContainerHome = styled.div`
> div {
  margin-top: 2.5rem;
}
  div > h1 {
    margin-bottom: 2rem;

    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 3.5rem;

    line-height: 4rem;
  }
  div > p {
    max-width: 40rem;
    font-size: 0.9rem;
    --tw-text-opacity: 1;
    color: rgb(145 149 171 / var(--tw-text-opacity));

    margin-bottom: 1rem;
  }
  div > li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    font-size: 0.9rem;
    margin-bottom: 6px;
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
  width: 100%;
  display: flex;
`;
export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  :hover {
    cursor: pointer;
    transition: .2s;
    background-color: ${(props) => props.theme.purpleBlack};
  }
  padding: 1rem 2.5rem;

  display: flex;
  background-color: ${(props) => props.theme.purple};

  color: white;
`;
export const ButtonPrimary = styled(Button)`
  --tw-text-opacity: 0.2;
  color: white;
  background-color: rgb(145 149 171 / var(--tw-text-opacity));
`;

export const Container = styled.div`
  display: flex;
  padding: 7rem 15rem;
  gap: 15rem;
  justify-content: space-between;

  .floating { 
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}
 
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}
  div>img{
    border-radius: 12px;
    margin-bottom: 2rem;
    width: 75%;
    animation: floating 3s ease-in-out infinite;
    --r-onboarding-step-arrow-size: 14px;
    text-align: var(--bs-body-text-align);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    font-weight: 500;
    font-family: Open Sans,Vazirmatn,sans-serif;
    font-size: 14px;
    font-style: normal;
    line-height: 1.5;
    color: #fff;
    direction: ltr!important;
    box-sizing: border-box;
    vertical-align: baseline;
    border-style: none;
    max-width: fit-content!important;
    
  }
`;
export const Image = styled.div`

  display: flex;
  flex-direction: column;
  animation: floating 3s ease-in-out infinite;
  align-items: center;
`
export const ContainerFunctions = styled.div`
padding: 2rem 15rem;
  --tw-text-opacity: 0.2;
  color: white;
  background-color: rgb(23, 24, 30);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 4rem;

  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    color: white;
    font-size: 1rem;
    list-style: none;
    background-color: ${(props) => props.theme.purple};
    transition: .2s;
    :hover {
      background-color: ${(props) => props.theme.purpleBlack};
      transition: .2s;
    }
  }
  li>p{
    font-size: .8rem;
  }
`
export const Funcionalidades = styled.div`
  display: flex;
  justify-content: center;
  --tw-text-opacity: 0.2;
  color: white;
  background-color: rgb(23, 24, 30);
  color: white;
  h1 {
    padding-top: 3rem;
  }
`

export const Default = styled.div`
  > div {
    flex-direction: column;
    display: flex;
    gap: 1.5rem;
    button {
      max-width: 9rem;
    }
    p {
      font-size: 0.9rem;
    --tw-text-opacity: 1;
    color: rgb(145 149 171 / var(--tw-text-opacity));
    }
  }
  padding: 5rem 20rem;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: row-reverse;
  align-items: center;

  color: white;
`
export const DefaultTemplate = styled.div`
> div {
    flex-direction: column;
    display: flex;
    gap: 1.5rem;
    > img {
    margin-left: 3rem!important;
  }
    button {
      max-width: 9rem;

    }
    p {
      font-size: 0.9rem;
    --tw-text-opacity: 1;
    color: rgb(145 149 171 / var(--tw-text-opacity));
    }
  }
  padding: 5rem 20rem;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: row;
  align-items: center;

  color: white;
`
export const ImageMutinho = styled.div`
  width: 50%;
  margin-right: 4rem;
`