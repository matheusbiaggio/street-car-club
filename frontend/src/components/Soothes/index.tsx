import React from 'react';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { SoothesContainer } from './styles';

const Soothes: React.FC = () => {
  const { setJailSentence, jailSentence, checkboxStates, setCheckboxStates } = useCalculatorContext();

  const calculateNewSentence = (id: string, checked: boolean) => {
    let factor = 1.0;

    switch (id) {
      case 'adv':
        factor = checked ? 0.8 : 1.25;
        break;
      case 'primario':
        factor = checked ? 0.5 : 2.0;
        break;
      case 'reincidente':
        factor = checked ? 1.1 : 0.9091;
        break;
      case 'condicional':
        factor = checked ? 1.25 : 0.8;
        break;
      default:
        break;
    }

    jailSentence.sentence > 0 && setJailSentence({ ...jailSentence, sentence: parseInt((jailSentence.sentence * factor).toFixed(0)) });
    setCheckboxStates({ ...checkboxStates, [id]: checked });
  };

  return (
    <SoothesContainer>
      <h3>ATENUANTES:</h3>
      <label htmlFor="adv">
        <input type="checkbox" id="adv" onChange={(e) => calculateNewSentence('adv', e.target.checked)} checked={checkboxStates.adv} />
        <p>ADVOGADO CONSTITUÍDO:</p>
        Redução de 20% na pena
      </label>
      <label htmlFor="primario">
        <input type="checkbox" id="primario" onChange={(e) => calculateNewSentence('primario', e.target.checked)} checked={checkboxStates.primario} />
        <p>RÉU PRIMÁRIO:</p>
        Redução de 50% na pena
      </label>
      <label htmlFor="reincidente">
        <input type="checkbox" id="reincidente" onChange={(e) => calculateNewSentence('reincidente', e.target.checked)} checked={checkboxStates.reincidente} />
        <p>RÉU REINCIDENTE:</p>
        Aumento de 10% na pena total.
      </label>
      <label htmlFor="condicional">
        <input type="checkbox" id="condicional" onChange={(e) => calculateNewSentence('condicional', e.target.checked)} checked={checkboxStates.condicional} />
        <p>VIOLAÇÃO DE CONDICIONAL:</p>
        Aumento de 25% na pena.
      </label>
    </SoothesContainer>
  );
};

export default Soothes;
