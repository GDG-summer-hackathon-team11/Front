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

const ButtonContiner = styled.div`
    padding-left:100px;
    align-content:center;
    padding-top:300px;
`

const Button = styled.button`
    text-align:center;
    background-color:#1B431A;
    color:white;
    width:600px;
    height:5em;
    border-radius:1.5em;
`

export default JoinButton;