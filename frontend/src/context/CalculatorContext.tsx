import { createContext, ReactNode, useContext, useState } from 'react';
import { CheckboxStates, InputsValues, JailSentence } from '../interfaces/CrimeItem';

interface CalculatorContextType {
  jailSentence: JailSentence;
  setJailSentence: React.Dispatch<React.SetStateAction<JailSentence>>;
  checkboxStates: CheckboxStates;
  setCheckboxStates: React.Dispatch<React.SetStateAction<CheckboxStates>>;
  inputsValues: InputsValues;
  setInputsValues: React.Dispatch<React.SetStateAction<InputsValues>>;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  // Inicialize o objeto jailSentence com os valores iniciais desejados
  const initialJailSentence: JailSentence = {
    sentence: 0,
    trafficFine: 0,
    bail: 0,
    conditional: 0,
    crimes: [],
  };

  const initialCheckboxStates: CheckboxStates = {
    adv: false,
    primario: false,
    reincidente: false,
    condicional: false,
  }

  const initialInputsValues : InputsValues = {
    notas: 0,
    entorpecente: 0,
    municao: 0,
    homicidio: 1,
    armas: 0,
    colete: 0,
  }

  const [jailSentence, setJailSentence] = useState<JailSentence>(initialJailSentence);
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>(initialCheckboxStates);
  const [inputsValues, setInputsValues] = useState<InputsValues>(initialInputsValues);

  const contextValue: CalculatorContextType = {
    jailSentence,
    setJailSentence,
    checkboxStates,
    setCheckboxStates,
    inputsValues,
    setInputsValues
    // Outras propriedades do contexto, se necessário
  };

  return <CalculatorContext.Provider value={contextValue}>{children}</CalculatorContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculatorContext must be used within a CalculatorProvider');
  }
  return context;
};

