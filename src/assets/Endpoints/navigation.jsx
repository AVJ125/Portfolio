import { Link } from 'react-router-dom'
import Sidebar from './sidebar.jsx'
import logo from '/letter-a.png' 
import '../cssfiles/Navigation.css'
import CardNav from '../components/CardNav'

function Navigations(props){
    const items = [
    {
      label: "About",
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Tech Stack", ariaLabel: "About Company" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "Projects Company" }
        
      ]
    },
    {
      label: "Experience",
      bgColor: "#000000ff", 
      textColor: "#fff",
      links: [
        { label: "Experience", ariaLabel: "Experience Company" }
        
      ]
    }
  ];

    return (
    <div>
      <div>

      <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonTextColor="#ffffffff"
      ease="power3.out"
    />
      </div>
      <Sidebar />
    
    </div>
    )
}


export default Navigations