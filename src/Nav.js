import React,  { useState, useEffect } from 'react'
import './Nav.css';


function Nav() {
    const [show,handleshow]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleshow(true);
            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black" }`}>
            <img className="nav__logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix logo"
            />

             <img className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo"
            />
                       
        </div>
    )
}

export default Nav;
