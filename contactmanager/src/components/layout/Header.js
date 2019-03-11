import React from "react";
import PropTypes from "prop-types";

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
                <a class="nav-link" href="/">
                  Home
                </a>
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
