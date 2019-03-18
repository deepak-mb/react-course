import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a class="navbar-brand" href="/">
            {branding}
          </a>
          <div>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link d-inline">
                  <i className="fas fa-home" /> Home
                </Link>
                <Link to="/contact/add" class="nav-link d-inline">
                  <i className="fas fa-plus" /> 
                  Add
                </Link>
                <Link to="/about" class="nav-link d-inline">
                  <i className="fas fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
