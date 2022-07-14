import styled from "styled-components";

const PosterImage = styled.img`
    height: auto;
    width: 300px;
`;

const CardWrapper = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
border: 1px solid gray;
box-shadow: 0px 4px 8px gray;
border-radius: 10px;
padding: 10px;
width: 300px;
height: auto;
min-height: 500px;
margin: 10px;
background-color: #ffffff;
`;

const CardHeader = styled.div`
font-weight: 600;
margin-top: 10px;
`;

export default function MovieCard(props) {
    console.log(props);
    return (
        <CardWrapper>
            <PosterImage src={props.Poster}></PosterImage>
            <CardHeader>{props.Title}</CardHeader>
            <CardHeader>Year: {props.Year}</CardHeader>
        </CardWrapper>
    )
}