import ReactDom from "react-dom";
import { useLayoutEffect, useMemo, useRef} from "react";
import styled from "@emotion/styled";
import {getHistoryStateById} from "../History/historyUtil";
import axios from "axios";

const LocationDetail =  () => {
     
    return(
        <Containers>
            <Details>

            </Details>
        </Containers>
    );
}

const Containers = styled.div`
    width: 200rem;
    height:50rem;


`

const Details = styled.div`
    font-size:1.6rem;
    font-weight:bold;


`
export default LocationDetail;