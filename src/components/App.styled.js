import styled from 'styled-components';

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