import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    body{
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgb(224, 244, 244);
    }
`

export const Wrapper = styled.div`

    min-height: 250px;
    padding: 10px;

    border: 1px solid black;
    border-radius: 5px;
    background-color: white;

    .feedbackOption{
        margin-top: 10px;

        button{
            width: calc((100%/3) - 7px);
            padding: 5px;

            margin-left: 10px;
            &:first-child{ margin-left: 0px; }

            text-transform: capitalize;
        }
    }

    .section{
        margin-top: 10px;
        &:first-child { margin-top: 0px; }
        
        h3{
            margin-top: 10px;
        }

        ul{
            margin-top: 10px;
            
            list-style: none;
        }
    }
`