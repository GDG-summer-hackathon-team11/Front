import {ReactNode, useEffect, useState} from "react";
import Loading from "../Remote/Loading";

interface KakaoMapScriptLoaderProps {
  children: ReactNode
  onLoadSuccessful?: () => void
  onFailedToLoad?: () => void
}

const KAKAO_MAP_KEY = process.env.REACT_APP_KAKAO_MAP_KEY

const KakaoMapScriptLoader = (props:KakaoMapScriptLoaderProps) => {
  const [mapScriptLoaded, setMapScriptLoaded] = useState(false)

  useEffect(() => {
    const mapScriptId = 'kakao-map-script'
    const mapScript = document.getElementById(mapScriptId)
    if (mapScript && !window.kakao) {
      props.onFailedToLoad?.()
      return
    }

    const script = document.createElement('script')
    script.id = mapScriptId
    // 서비스는 지도 검색을 위해, autoload는 수동으로 로드 타임을 설정하기 위해
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&libraries=services&autoload=false`
    script.onload = () => {
      window.kakao.maps.load(() => {
        setMapScriptLoaded(true)
        props.onLoadSuccessful?.()
      })
    }
    script.onerror = () => {
      props.onFailedToLoad?.()
    }
    document.getElementById('root')?.appendChild(script)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {
        mapScriptLoaded ? props.children : <Loading/>
      }
    </>
  )
}

export default KakaoMapScriptLoader
