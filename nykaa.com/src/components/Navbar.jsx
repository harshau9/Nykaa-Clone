import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  let activeStyle = 
   { color: 'black',
    fontWeight: "bold",
    fontSize:"30px",
    width:"200px",
    textDecorationLine:"none",
    cursor:"pointer"
}
  
  let normalStyle = { color: 'white',
  fontWeight: "30px",
  width:"200px",
  borderRadius:"10px",
  textDecorationLine:"none"} 
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "space-around",height:"100px",paddingTop:"25px",boxShadow: '1px 2px 9px #F4AAB9',position:"sticky",top:"0",backgroundColor:"rgb(233, 68, 70)",paddingBottom:"20px"}}>
        
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/Login"
        end
      >
        Login
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/categories"
      >
      Categories
      </NavLink>
      <NavLink
         style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/luxe"
      >
        Luxe
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/nykaa"
      >
        Nykaa
      </NavLink>

      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/fashion"
      >
        Fashion
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/beauty"
      >
        Beauty
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/advice"
      >
        Advice
      </NavLink>

    </div>
  );
}