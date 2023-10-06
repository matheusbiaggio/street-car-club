import React from 'react';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { Money } from '../../utils/ConvertMoney';
import { CalculatorContainer } from './styles';

const Calculator: React.FC = () => {
  const { jailSentence, setJailSentence, setCheckboxStates, setInputsValues } = useCalculatorContext();

  const handleCopyClick = async () => {
    try {
      const crimesText = jailSentence.crimes.join(', ');
      await navigator.clipboard.writeText(crimesText);
      alert('Texto copiado para a área de transferência!');
    } catch (error) {
      console.error('Erro ao copiar texto: ', error);
    }
  };

  const handleClear = () => {
    setJailSentence({
      sentence: 0,
      trafficFine: 0,
      bail: 0,
      conditional: 0,
      crimes: [],
    });
    setCheckboxStates({
      adv: false,
      primario: false,
      reincidente: false,
      condicional: false,
    });
    setInputsValues({
      notas: 0,
      entorpecente: 0,
      municao: 0,
      homicidio: 1,
      armas: 0,
      colete: 0,
    })
  }

  return (
    <CalculatorContainer>
      <label htmlFor="sentence">
        PENA (MÁXIMO 120 MESES)
        <input value={jailSentence.sentence <= 120 ? jailSentence.sentence : 120} id="sentence" disabled />
      </label>
      <label htmlFor="trafficFine">
        MULTA
        <input value={Money(jailSentence.trafficFine)} id="trafficFine" disabled />
      </label>
      <label htmlFor="bail">
        FIANÇA
        <input value={Money(jailSentence.bail)} id="bail" disabled />
      </label>
      {/* <label htmlFor="bail">
        CONDICIONAL
        <input value={jailSentence.conditional} id="conditional" disabled />
      </label> */}
      <label htmlFor="crimes">
        CRIMES (ARTIGOS SELECIONADOS)
        <textarea value={jailSentence.crimes.join(', ')} id="crimes" disabled />
      </label>
      <div>
        <button onClick={handleCopyClick}>Copiar</button>
        <button className="clear-button" onClick={handleClear}>Limpar</button>
      </div>
    </CalculatorContainer>
  );
};

export default Calculator;
