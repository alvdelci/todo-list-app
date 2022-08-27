import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
       font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
       font-style: normal;
    }
`;

export const Title = styled.h1`
    text-align: center;
    text-decoration: underline;
    color: green;
`;

export const Container = styled.div`
    width: 60vw;
    height: max-content;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;

    justify-content: center;

    border-radius: 10px;
    align-items: center;

    background-color: lightgreen;
`;

export const Card = styled.div`
    height: 80px;
    max-width: 40vw;

    margin: 5px;
    padding: 5px;
    border-radius: 10px;

    background-color: orange;
    
    .header-card {
        display: flex;
        justify-content: space-between;
    }

    label {
        font-weight: bold;
        color: green;
    }

    span {
        color: white;
    }
`;

export const Button = styled.button`
    margin-right: 5px;
    margin-left: 5px;
    padding: 5px;

    border-radius: 5px;
    border: 1px solid white;

    font-weight: bold;
    background-color: ${props => props.color};
    color: white;

    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

export const AddSection = styled.div`
    height: 100px;
    width: 100px;
    float: right;
    
    border-radius: 5px;
    
    text-align: center;
    background-color: green;

    label {
        font-weight: bold;
        color: white;
    }


`;