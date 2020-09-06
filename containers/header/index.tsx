import React, { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div id="header-container">
      <div className="top">
        <a className="social-link-left" href="https://twitter.com/">
          twitter
        </a>
        <a className="social-link-left" href="https://github.com/">
          github
        </a>
        <a className="social-link-right">this site is open source</a>
      </div>
      <header id="main-header">Blog</header>
    </div>
  );
};
export { Header };
