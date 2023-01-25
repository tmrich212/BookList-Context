import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {

    render() { 

        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => { 
                    const { isAuthenticated, toggleAuth } = authContext
                    const {isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                    <nav style={{color: theme.syntax, background: theme.ui}}>
                        <h1>Context App</h1> 
                        <div onClick={toggleAuth}>
                        {isAuthenticated ? 'Logged in' : 'Logged out'}
                        </div>
                        <ul>
                            <li style={{background: theme.ui}}>Home</li>
                            <li style={{background: theme.ui}}>About</li>
                            <li style={{background: theme.ui}}>Contact</li>
                        </ul>
                    </nav>
                )
                }}</ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
    }
}
 
export default Navbar;
