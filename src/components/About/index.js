import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
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
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quitely confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If i need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
    </div>
  );
};

export default About;
