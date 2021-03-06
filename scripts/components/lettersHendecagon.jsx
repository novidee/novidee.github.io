import React from 'react';
import { store } from '../services/localStorageService';

const LettersHendecagon = ({ lettersSubjects }) => {
  const progressInfo = store.get('progressInfo') || [];

  return (
    <li className="letters">
      <div>
        <img src={`../../USE/images/figure.png`} />
        <h2>Буквы</h2>
        {progressInfo.map(({ letter, name }, index) => {
          const { key, color } = lettersSubjects.filter(letterSubject => letterSubject.key === name)[0];

          return (
            <span key={`${name+index}`} className="letter" style={{ color }} data-subject={key}>{letter}</span>
          );
        })}
      </div>
    </li>
  );
};

export default LettersHendecagon;
