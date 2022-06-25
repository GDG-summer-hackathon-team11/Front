export const getHistoryStateById = (id:string) => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(id) ?? ''
}
