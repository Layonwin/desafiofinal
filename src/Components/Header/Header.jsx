import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import { HeaderStyle, StyleLink, Nav, Ul } from "./style"

export default function Header() {
    return (
        <HeaderStyle>
            <img src={logo} alt="logomarca" />
            <Nav>
             <Ul>
                <li>
                    <StyleLink to="/">Home</StyleLink>
                </li>
                <li>
                    <StyleLink to="/novidades">Novidades</StyleLink>
                </li>
                <li>
                    <StyleLink to="/sobre">Sobre</StyleLink>
                </li>
            </Ul>   
            </Nav>
        </HeaderStyle>
    )
}