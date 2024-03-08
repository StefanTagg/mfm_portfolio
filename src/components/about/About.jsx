import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Marina Marbella, designer from London, United Kingdom. I have rich experience in design etc etc</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Product Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage product__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Graphics Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage graphics__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UX/UI Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About