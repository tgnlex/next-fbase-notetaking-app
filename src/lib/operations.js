export const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
      noteDesc: noteDesc
    }).then((docRef) => {
        setNoteTitle('');
        setNoteDesc('');
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
}

export const editNote = (id) => {
  const collectionById = doc(database, 'notes', id)

  updateDoc(collectionById, {
    noteTitle: noteTitle, 
    noteDesc: noteDesc,
  })
  .then(() => {
    window.location.reload();
  })
}

export const deleteNote = (id) => { 
  const collectionById = doc(database, 'notes', id)

  deleteDoc(collectionById)
  .then(() => {
    window.location.reload();
  })
}
