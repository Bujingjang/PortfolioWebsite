import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
// import FontAwesomeIconBackground from '../FontAwesomeIconBackground';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    };
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a penultimate year Monash University international student from
          Indonesia, taking Bachelor of Computer Science with a minor in Mobile
          App Development and Software Engineer. I'm keen and passionate in
          coding since high school and all of my programming journey including
          university life has taught me a lot of knowledge and skills relating
          to it.
        </p>
        <p>
          I always believe that the best way to learn is from experience.
          Therefore, I always try to find projects, online courses, internships,
          and opportunities relating to my career interest which is Web
          Development or Software Development to fill in my free time.
          Therefore, I am eager to find experience that can gradually improve my
          soft and hard skill as an individual for continuous improvement.
        </p>
        <p>
          I’m the type of person who really likes sceneries and I always feel 
          like going out every time the
          weather is great. Also, I really like to play any kind of sports,
          especially Basketball. I feel like sports helps me not only to improve
          my physical health, but mentally as well. I really like to talk to new
          people in general and I considered myself as an easy going person
          since I’m always interested in understanding people’s perspective. And
          during free time, I usually fill in my time with the things that I’m
          currently interested and passionate with, which is reading
          books, exploring music, playing video games, and programming.
        </p>
      </div>
      {/* <div className="fontawesome-icon-background">
        <FontAwesomeIconBackground />
      </div> */}
      <div className="animation-image">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
