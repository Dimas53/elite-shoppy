import React from "react";
import {connect} from "react-redux"
import {getCategories} from "../../selectors";

const Categories = () => {
  return (
    <div>categories</div>
  )
}

const mapStateToProps = state => ({
  categories: getCategories(state)
})

export default connect(mapStateToProps, null)(Categories)