import React, {Component} from "react";
import "./search.css"
import {connect} from "react-redux";
import {searchProduct} from "../../actions/actions";

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.searchProduct(this.state.value)
  }


  render() {
    return (
      <div className="search d-flex align-items-center">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            className="search_input"/>
        </form>
        <span>
          <button>
            <i className="fal fa-search"/>
          </button>

        </span>
      </div>
    )
  }
}
const mapDispatchToProps = {
  searchProduct
}

export default connect(null, mapDispatchToProps)(Search)