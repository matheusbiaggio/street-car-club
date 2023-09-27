import { createContext, ReactNode, useContext, useState } from 'react';
import { JailSentence } from '../interfaces/CrimeItem';

interface CalculatorContextType {
  jailSentence: JailSentence;
  setJailSentence: React.Dispatch<React.SetStateAction<JailSentence>>;
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

  const [jailSentence, setJailSentence] = useState<JailSentence>(initialJailSentence);

  const contextValue: CalculatorContextType = {
    jailSentence,
    setJailSentence,
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

