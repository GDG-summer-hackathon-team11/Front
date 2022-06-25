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
    display:flex;
    margin:auto;
    text-align:center;
    background-color:#1B431A;
    color:white;
    width:90vw;
    border-radius:1.5em;
    cursor:pointer;
    padding-left:23em;
    padding-top:0.3em;
    height:5vh;
    border-radius:1.5em;
    cursor:pointer;
    
`

export default JoinButton;