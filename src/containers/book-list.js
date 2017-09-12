import React,{Component} from 'react'
import { connect } from 'react-redux' /* Esta libreria espara unir las dos librerias*/
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux' /* */
/*
  Container:
    Es un componente ("component") de react que tiene una conexion
    directa con el manejo de estados ("states") producidos por redux.
*/

class BookList extends Component {
    renderList(){
      return this.props.books.map((book) => { /* Aqui se guardara state.book*/
        return(
          <li
              key={book.title}
              onClick ={() => this.props.selectBook(book)} 
              className="list-group-item">
              {book.title}
          </li>
        )
      })
    }

    render() {
        return (
          <ul className="list-group col-sm-4">
            {this.renderList()}
          </ul>
        )
    }
}

function mapStateToProps(state) {
  /*
      El mapStateToProps(state) pasara el estado (books, activeBook)
      y los convertira en propiedades.
      Whatever is returned will show up as props inside of BookList
  */
    return {
      books: state.books
    }
    /*
        Retornara los libros dentro de books (que estan en el reducer_books)
        y los guardara en this.props.books para que cuando se haga un map()
        vayan cargando los datos ahi
    */
}

/* Cualquier cosa que retorne esta funcion terminara
como props en BookList container*/
function  mapDispatchToProps(dispatch) {
  /*En cualquier momento que selectBook sea llamado, el resultado
    deberia pasar por todos los reducers*/
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

/*
    promueve a BookList de un component a un container - necesita saber
    sobre este nuevo metodo dispatch, selectBook. Make it availiable
    as a prop
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
/*
    Aqui se conecta mapStateToProps y BookList para poder pasarse informacion
    Combina una function (mapStateToProps) con un component (BookList) y crea
    un Container (book-list.js)

    A su vez tambien se conecta mapDispatchToProps
*/
