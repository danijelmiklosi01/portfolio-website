import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const sectionIds = ['#home', '#about', '#experience', '#contact'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionIds.forEach(id => {
      const target = document.querySelector(id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <a href='#home' className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;
