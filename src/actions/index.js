export function selectBook(book) {
    /*selectBook es un ACtionCreator, necesita retornar una accion,
      un onjeto con un tipo de propiedad*/
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
