import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'shared/components/drawer/drawer';
import NavItem from 'shared/components/nav/navItem/navItem';
import logo from 'images/logos/small-white-logo.png';
import styles from './sideNav.css';

class SideNav extends Component {

  handleCloseClick = (e) => {
    e.preventDefault();
    this.props.onClose();
  };

  renderNavItems = () => {
    const { signedIn, mentor } = this.props;
    if (signedIn) {
      if (mentor) {
        return (
          <span>
            <NavItem to="/mentor-request" text="Request Help" onClick={this.handleCloseClick} />
            <NavItem to="/mentors" text="Mentors" onClick={this.handleCloseClick} />
            <NavItem to="/requests" text="Requests" onClick={this.handleCloseClick} />
            <NavItem to="/squads" text="Squads" onClick={this.handleCloseClick} />
            <button
              className={styles.navButton}
              onClick={() => this.props.onLogOutClick()}
            >
              Logout
            </button>
          </span>
        );
      }
      return (
        <span>
          <NavItem to="/mentor-request" text="Request Help" onClick={this.handleCloseClick} />
          <NavItem to="/mentors" text="Mentors" onClick={this.handleCloseClick} />
          <NavItem to="/squads" text="Squads" onClick={this.handleCloseClick} />
          <button
            className={styles.navButton}
            onClick={() => this.props.onLogOutClick()}
          >
            Logout
          </button>
        </span>
      );
    }
    return (
      <NavItem
        to="/join"
        text="Join"
        onClick={this.handleCloseClick}
      />
    );
  }

  render() {
    const { isVisible } = this.props;
    return (
      <Drawer isVisible={isVisible}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              <a className={styles.close} href="/" onClick={this.handleCloseClick}>&#10006;</a>
            </div>
            <a className={styles.logoWrapper} href="/">
              <img className={styles.logo} src={logo} alt="Operation Code logo" />
            </a>
          </div>
          <div className={styles.list}>
            {this.renderNavItems()}
            <NavItem
              to="code_schools"
              text="Code Schools"
              onClick={this.handleCloseClick}
            />
            <NavItem
              to="https://donorbox.org/operationcode"
              text="Donate"
              isExternal
              onClick={this.handleCloseClick}
            />
            <NavItem
              to="about"
              text="About"
              onClick={this.handleCloseClick}
            />
            <NavItem
              to="programs"
              text="Programs"
              onClick={this.handleCloseClick}
              notClickable
            />
            <NavItem
              to="involved"
              text="Get Involved"
              onClick={this.handleCloseClick}
              notClickable
            />
            <NavItem
              to="blog"
              text="Blog"
              onClick={this.handleCloseClick}
              notClickable
            />
          </div>
        </div>
      </Drawer>
    );
  }
}

SideNav.propTypes = {
  isVisible: PropTypes.bool,
  mentor: PropTypes.bool,
  onLogOutClick: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  signedIn: PropTypes.bool
};

SideNav.defaultProps = {
  isVisible: false,
  mentor: false,
  signedIn: false,
  onLogOutClick: () => {},
  onClose: () => {},
};

export default SideNav;
