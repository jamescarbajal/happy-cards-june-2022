import styled from "styled-components";

export const HeaderLink = styled.div`
    align-self: center;
    margin: 18px 24px;
`;

export const ClickableText = styled.button`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => props.theme.primary};
    text-decoration: none;
    border: none;
    background: none;
    color: steelblue;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  `;

  export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.15);
  `;

  export const HomeContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;