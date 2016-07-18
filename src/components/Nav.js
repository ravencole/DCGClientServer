import React from 'react';

const Nav = (props) => {
    const { Link } = props;

    const styles = {
        navLogoDark: {
            color: 'white',
            backgroundColor: 'black'
        },
        navBtnDark: {
            color: 'white',
            backgroundColor: 'black',
            borderColor: 'black'
        },
        navContainerDark: {
            top: 0
        }
    }

    return (
        <div className="nav--container" style={ props.navDark && styles.navContainerDark || {}} >
            <div className="nav--contact">
                <div className="nav--email">
                    <img src="/images/file.svg" height="20px" />
                    <div>info@discovergcllc.com</div>
                </div>
                <div className="nav--tel">
                    <img src="/images/smartphone-6.svg" height="20px" />
                    <div>(610) 772-3148</div>
                </div>
            </div>
            <Link to="home" smooth={true} spy={true} duration={900} className="nav--logo" style={ props.navDark && styles.navLogoDark || {}}>
                { props.navDark ? <img src="/images/logo_white.svg" height="30px" /> : <img src="/images/logo.svg" height="30px" /> }
                <div>Discover Consulting Group</div>
            </Link>
            <Link to="services" smooth={true} spy={true} offset={-30} duration={900} className="nav--btn" style={ props.navDark && styles.navBtnDark || {}} >Services</Link>
            <Link to="leadership" smooth={true} spy={true} offset={-30} duration={900} className="nav--btn" style={ props.navDark && styles.navBtnDark || {}} >Thought Leadership</Link>
            <Link to="about" smooth={true} spy={true} offset={-30} duration={900} className="nav--btn" style={ props.navDark && styles.navBtnDark || {}} >About</Link>
            <Link to="contact" smooth={true} spy={true} duration={900} className="nav--btn" style={ props.navDark && styles.navBtnDark || {}} >Contact</Link>
        </div> 
    );
}

export default Nav;