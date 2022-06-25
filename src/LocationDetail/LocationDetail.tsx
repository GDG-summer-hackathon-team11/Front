import ReactDom from "react-dom";
import { useLayoutEffect, useMemo, useRef} from "react";
import styled from "@emotion/styled";
import {getHistoryStateById} from "../History/historyUtil";
import axios from "axios";
import RunningDifficulty from "../Running/RunningDifficulty";
import RunningMembers from "../Running/RunningMembers";
import JoinButton from "../Button/join";

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
                <h6>이마트 24</h6>
            </Details>
            <Details>
                체크포인트
                <h6>세븐 일레븐</h6>
                <h6>GS25</h6>
                <h6>서브웨이</h6>
            </Details>
            <Details>
                난이도
                <RunningDifficulty difficult={1}/>
                <h6>가벼운 운동</h6>
            </Details>
            <Details>
                인원
                <RunningMembers count = {2}/>
            </Details>
            <Details>
                시간
                <h6>18:30</h6>
            </Details>
            <Details>
                나이대
                <h6>20대</h6>
            </Details>
            <JoinButton/>
        </Containers>
    );
}

const Containers = styled.div`
    width: 100rem;
    height:50rem;
    padding-top:500px;
    padding-left:50px;
    padding-bottom:0.6em;
    font-weight:bold;`

const Details = styled.div`
    font-size:1.6rem;
    padding-bottom:0.4em;
    margin:auto;
`
export default LocationDetail;