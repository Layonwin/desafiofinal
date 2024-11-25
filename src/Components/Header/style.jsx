import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header`
//display: flex;
//justify-content: space-between;
//align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  background-color: #FFFFFF;
  box-shadow: 0 1px 10px rgba(30, 57, 50, 0.7);
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`

export const StyleLink =styled(Link)`
text-decoration: none;
color: #1e3932;
&:hover{
color: blue;
}
`

export const Ul = styled.ul`
display: flex;
width: 40vw;
justify-content: space-around;
list-style: none;
font-size: 24px  
`

