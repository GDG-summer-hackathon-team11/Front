import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { useMemo } from 'react'
import {getHistoryStateById} from "./historyUtil";

export interface HistoryStateType {
  id: string
}

const historyState = atom<HistoryStateType>({
  key: 'GLOBAL/HISTORY',
  default: {
    id: getHistoryStateById('id'),
  },
})

export const useHistoryState = () => {
  return useRecoilValue(historyState)
}

export const useHistoryActions = () => {
  const setter = useSetRecoilState(historyState)

  return useMemo(
    () => ({
      setSelectedId: (id: string) =>
        setter({
          id: id
        }),
      resetId: () =>
        setter({
          id: '',
        }),
    }),
    [setter]
  )
}
