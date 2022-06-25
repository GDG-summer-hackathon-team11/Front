import {ReactNode, useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";

const JoinButton = () => {
    const ClickJoin = () =>{

    }
    return(
        <Button>
            참여하기
        </Button>
    );
}


const Button = styled.button`
    text-align:center;
    background-color:#1B431A;
    color:white;
    width:50em;
    height:5em;
    border-radius:1.5em;
    cursor:pointer;
    
`

export default JoinButton;