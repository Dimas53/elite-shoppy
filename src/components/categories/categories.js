import React from "react";
import {connect} from "react-redux"
import {getCategories} from "../../selectors";
import {Link} from "react-router-dom";
import "./categories.css"

const Categories = ({categories}) => {
  const renderCategory =(category, index) => {
    return (
      <Link
        to={`/categories/${category.id}`}
        className="categories_item"
        key={index}
      >
        {/*<i className="fa fa-caret-right"></i>*/}
        <span> > </span>
        {category.name}

      </Link>
    )
  }
  return (
    <div className="categories">
      <div className="categories_name card_btn">
        <h4>All Categories</h4>
      </div>
      <div className="categories_list">
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: getCategories(state)
})

export default connect(mapStateToProps, null)(Categories)