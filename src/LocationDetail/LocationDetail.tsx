import ReactDom from "react-dom";
import { useLayoutEffect, useMemo, useRef} from "react";
import styled from "@emotion/styled";
import {getHistoryStateById} from "../History/historyUtil";
import axios from "axios";
import { useQueries } from "react-query";

const LocationDetail = () => {
    const locationinfo = async(id:any) =>{
        const {data} = await axios.get(
            `url/${id}`,
        );
        return data
     }
    return(
        <Containers>
            <Details>
                시작점 위치(주소)
            </Details>
            <Details>
                체크포인트
            </Details>
            <Details>
                난이도
            </Details>
            <Details>
                인원
            </Details>
            <Details>
                시간
            </Details>
            <Details>
                관심사
            </Details>
        </Containers>
    );
}

const Containers = styled.div`
    width: 100rem;
    height:50rem;
    padding-top:500px;
    padding-left:50px;
    padding-bottom:20px;
`

const Details = styled.div`
    font-size:1.6rem;
    font-weight:bold;
    padding-bottom:50px;

`
export default LocationDetail;