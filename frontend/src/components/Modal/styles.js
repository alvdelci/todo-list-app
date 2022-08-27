import styled from "styled-components";

export const Modal = styled.div`
    z-index: 1001;
    display: ${props => props.show ? "block" : "none"};
    
    position: absolute;
    top: 20vh;
    left: 30vw;
    
    width: 40vw;
    height: 45vh;

    border-radius: 10px;
    padding: 10px;
    
    background-color: green;
    text-align: center;

    .inputs {
        label {
            color: white;
        }

        input {
            min-width: 250px;
            border-radius: 5px;
            border: solid 1px #fff;
            margin-bottom: 20px;
        }

        textarea {
            min-width: 300px;
            min-height: 100px;

            border-radius: 5px;
        }
    }

    .buttons {
        margin-top: 20px;
    }
`;

export const CloseSection = styled.div`
    z-index: 1000;
    display: ${props => props.show ? "block" : "none"};

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .3);
`;

export const Title = styled.h2`
    color: orange;
    text-align: center;
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