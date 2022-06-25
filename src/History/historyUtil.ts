export const getHistoryStateById = (id:string) => {
  if(window.history.state) {
    return window.history.state[id]
  }

  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(id)
}
