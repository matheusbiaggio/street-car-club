import React from 'react';
import { CrimeItem } from '../../interfaces/CrimeItem';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { ContainerCrimeInput, CrimesContainer } from './styles';

interface CrimesProps {
  list: CrimeItem[];
}

const Crimes: React.FC<CrimesProps> = ({ list }) => {
  const { jailSentence, setJailSentence } = useCalculatorContext();

  const handleInputChange6 = (value: number) => {
    if (value >= 10000) {
      const increment = Math.floor(value / 10000);
      setJailSentence({
        ...jailSentence,
        sentence: jailSentence.sentence + 5 * increment,
        trafficFine: jailSentence.trafficFine + 5000 * increment,
      });
    } else {
      setJailSentence({
        ...jailSentence,
        sentence: 10,
        trafficFine: 15000,
      });
    }
  };

  const handleInputChange19 = (value: number) => {
    if (value >= 10) {
      const increment = Math.floor(value / 10);
      setJailSentence({
        ...jailSentence,
        sentence: jailSentence.sentence + 5 * increment,
        trafficFine: jailSentence.trafficFine + 1000 * increment,
      });
    } else {
      setJailSentence({
        ...jailSentence,
        sentence: 30,
        trafficFine: 25000,
      });
    }
  };

  const handleInputChange29 = (value: number) => {
    if (value >= 25) {
      const increment = Math.floor(value / 25);
      setJailSentence({
        ...jailSentence,
        sentence: jailSentence.sentence + 5 * increment,
      });
    } else {
      setJailSentence({
        ...jailSentence,
        sentence: 20,
      });
    }
  };

  const handleInputChange43 = (value: number) => {
    if (value >= 6) {
      const increment = Math.floor(value / 6);
      setJailSentence({
        ...jailSentence,
        trafficFine: jailSentence.trafficFine + 15000 * increment,
      });
    } else {
      setJailSentence({
        ...jailSentence,
        trafficFine: 10000,
      });
    }
  };

  const handleInputChange44 = (value: number) => {
    if (value >= 4) {
      const increment = Math.floor(value / 4);
      setJailSentence({
        ...jailSentence,
        trafficFine: jailSentence.trafficFine + 10000 * increment,
      });
    } else {
      setJailSentence({
        ...jailSentence,
        trafficFine: 10000,
      });
    }
  };

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
            <ContainerCrimeInput>
              {element.crime}
              {element.crime === 'Art. 6º Posse de Notas Marcadas' && (
                <input
                type="number"
                placeholder='A cada 10k unidades'
                onChange={(e) => handleInputChange6(parseInt(e.target.value, 10))}
              />
              )}
              {jailSentence.crimes.includes(element.crime) && (
                element.crime === 'Art. 19º Tráfico de entorpecente' && (
                  <input
                    type="number"
                    placeholder='A cada 10 unidades'
                    onChange={(e) => handleInputChange19(parseInt(e.target.value, 10))}
                  />
                )
              )}
              {jailSentence.crimes.includes(element.crime) && (
                element.crime === 'Art. 29º Posse de munição ilegal' && (
                  <input
                    type="number"
                    placeholder='A cada 25 unidades'
                    onChange={(e) => handleInputChange29(parseInt(e.target.value, 10))}
                  />
                )
              )}
              {jailSentence.crimes.includes(element.crime) && (
                element.crime === 'Art. 40º Homicidio doloso' && (
                  <select
                    name="doloso"
                    id="doloso"
                    onChange={(e) => {
                      const selectedValue = parseInt(e.target.value, 10);
                      setJailSentence({
                        ...jailSentence,
                        trafficFine: 20000 * selectedValue,
                      });
                    }}
                  >
                    <option value="" disabled>Selecione</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                )
              )}
              {jailSentence.crimes.includes(element.crime) && (
                element.crime === 'Art. 43º Trafico de armas' && (
                  <input
                    type="number"
                    placeholder='A cada 6 unidades'
                    onChange={(e) => handleInputChange43(parseInt(e.target.value, 10))}
                  />
                )
              )}
              {jailSentence.crimes.includes(element.crime) && (
                element.crime === 'Art. 44º Trafico de colete balistico' && (
                  <input
                    type="number"
                    placeholder='A cada 4 unidades'
                    onChange={(e) => handleInputChange44(parseInt(e.target.value, 10))}
                  />
                )
              )}
            </ContainerCrimeInput>
          </li>
        ))}
      </ul>
    </CrimesContainer>
  );
};

export default Crimes;
