export type EventType = {
  _id: string,
  time: string,
  startPoint: {
    name:string,
    x: number,
    y: number
  },
  member: string[],
  level: number,
  ageCoverage: number
}

export type EventDetailType = {
  _id: string,
  time: string,
  startPoint: {
    name:string,
    x: string,
    y: string
  },
  checkPoint: {
    name:string,
    x: string,
    y: string
  }[],
  member: string[],
  level: number,
  ageCoverage: number
  category: string
}

export type PlaceType = {
  id: string,
  date: string,
  name:string,
  position: kakao.maps.LatLng,
  members: string[],
  level: number,
  ageCoverage: number
}

export type PlaceDetailType = {
  id: string,
  date: string,
  members: string[],
  category: string,
  startPoint: {
    name:string,
    position: kakao.maps.LatLng,
  },
  checkPoint: {
    name: string
    position: kakao.maps.LatLng
  }[],
  level: number,
  ageCoverage: number
}
