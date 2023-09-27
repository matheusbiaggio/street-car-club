import React from 'react';
import { CrimeItem } from '../../interfaces/CrimeItem';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { CrimesContainer } from './styles';

interface CrimesProps {
  list: CrimeItem[];
}

const Crimes: React.FC<CrimesProps> = ({ list }) => {
  const { jailSentence, setJailSentence } = useCalculatorContext();

  const handleCheckboxClick = (crime: string, crimeObject: CrimeItem) => {
    if (jailSentence.crimes.includes(crime)) {
      const updatedCrimes = jailSentence.crimes.filter((c) => c !== crime);
      setJailSentence((prevJailSentence) => ({
        ...prevJailSentence,
        sentence: jailSentence.sentence - crimeObject.servico,
        trafficFine: jailSentence.trafficFine - crimeObject.multa,
        bail: jailSentence.bail - crimeObject.fianca,
        conditional: jailSentence.conditional - crimeObject.fianca,
        crimes: updatedCrimes,
      }));
    } else {
      const updatedCrimes = [...jailSentence.crimes, crime];
      setJailSentence((prevJailSentence) => ({
        ...prevJailSentence,
        sentence: jailSentence.sentence + crimeObject.servico,
        trafficFine: jailSentence.trafficFine + crimeObject.multa,
        bail: jailSentence.bail + crimeObject.fianca,
        conditional: jailSentence.conditional + crimeObject.fianca,
        crimes: updatedCrimes,
      }));
    }
  };

  return (
    <CrimesContainer>
      <ul>
        {list && list.map((element) => (
          <li key={element.id}>
            <input
              type="checkbox"
              checked={jailSentence.crimes.includes(element.crime)}
              onClick={() => handleCheckboxClick(element.crime, element)}
            />
            {element.crime}
          </li>
        ))}
      </ul>
    </CrimesContainer>
  );
};

export default Crimes;
