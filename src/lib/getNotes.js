export const getNotes = () => {
    getDocs(dbInstance)
    .then((data) => {
        setSingleNote(data.docs.map((item) => {
          return { ...item.data(), id: item.id}
        })[0]);
    })
}
  
  