import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const openingArray = ['H', 'i', ',', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's'];
    const nameArray = ['F', 'i', 'd', 'e', 'l', 'i', 'o', ' ', 'T', 'a', 'n', 'd', 'y'];
    const closingArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'm', 'y', ' ', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'i', 'n', 'g', ' ', 'j', 'o', 'u', 'r', 'n', 'e', 'y'];

    useEffect(() => {
        return () => {
          setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 4000);
        };
    }, []);

    return (
      <>
        <div className="home-page">
          <div className="text-zone">
            <h2>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={openingArray}
                idx={0}
              />
            </h2>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={14}
              />
            </h1>
            <h2>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={closingArray}
                idx={27}
              />
            </h2>
            <h3 className="role">Student / Web Developer / Software Engineer</h3>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
      </>
    );
}

export default Home;