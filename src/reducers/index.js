import { combineReducers } from 'redux'
import BooksReducer from './reducer_books' //Retorna el valor del reducer

/*aqui en el index se combinan los reducers*/
const rootReducer = combineReducers({
  books: BooksReducer /*Se guarda lo retornado en reducer_books
                        El reducer se llama de manera "capitalize"
                        Mayusculas al principio siempre*/
})

export default rootReducer
