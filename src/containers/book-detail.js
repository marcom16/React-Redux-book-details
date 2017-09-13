import React,{Component} from 'react';
import { connect } from 'react-redux' /* Esta libreria espara unir las dos librerias*/

class BookDetail extends Component {
    render() {
      if (!this.props.book) {
        return <div></div>
      }

      return (
            <div className="col">
                <div className="card border-dark mb-3">
                  <div className="card-body">
                    <h4 className="card-title">{this.props.book.title}</h4>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Author: {this.props.book.author}</li>
                    <li className="list-group-item">Pages: {this.props.book.pages}</li>
                  </ul>

                  <div className="card-body">
                    <p className="card-text">{this.props.book.desc}</p>
                  </div>
                </div>
            </div>
      );
    }
}

function mapStateToProps(state) {
    return {
      book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)
