import format from "date-fns/format";

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

export type PlaceType = {
  id: string,
  date: string,
  name:string,
  position: kakao.maps.LatLng,
  members: string[],
  level: number,
  ageCoverage: number
}
