/*
    El argumento state no es el stado de la aplicacion,
    solo es responsable por el state de este reducer

    El "state = null" funciona de la siguiente manera:
    Sí state = undefined entonces toma el valor de null

    El 'action' es lo que se envia desde actions/index
*/
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    //   break
    // default:
    //   return currentState
  }
  return state
}
