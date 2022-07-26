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