import React from 'react';
import Link from "../../assets/small/commercial/linkedin.png";
import Github from "../../assets/small/commercial/Github.png";


function Footer() {   
    return (
        <footer className="">
            <div className = "center">
               
                    <a href="https://github.com/boddiegoat7"><img src={Github} alt="Github" className="icon" /></a>
                    
                    <a href="www.linkedin.com/in/victor-boddie-484917239"><img src={Link} alt="link" className="icon" /></a>
                    
                
                
            
            </div>
        
        </footer>
    
    )
}

export default Footer;