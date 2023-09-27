import React, { useState } from 'react';
import { AGRAVANTES, PRIMEIRO_GRAU, SEGUNDO_GRAU, TERCEIRO_GRAU, TRANSITO } from '../../mock/Crimes';
import { CrimesTitlesState } from '../../interfaces/CrimeItem';
import Crimes from '.';
import { CrimesListContainer } from '../Soothes/styles';

const CrimesList: React.FC = () => {
  const [crimesTitles, setCrimesTitles] = useState<CrimesTitlesState>({
    primeiro: false,
    segundo: false,
    terceiro: false,
    agravantes: false,
    transito: false,
  });

  const handleShowCrimes = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget as HTMLButtonElement;
    const id = target.id as keyof CrimesTitlesState;
    setCrimesTitles({ ...crimesTitles, [id]: !crimesTitles[id] });
  }  

  return (
    <CrimesListContainer>
      <div>
        <button id={'primeiro'} onClick={handleShowCrimes}>CRIMES DE PRIMEIRO GRAU</button>
        {crimesTitles.primeiro && <Crimes list={PRIMEIRO_GRAU}/>}
      </div>
      <div>
        <button id={'segundo'} onClick={handleShowCrimes}>CRIMES DE SEGUNDO GRAU</button>
        {crimesTitles.segundo && <Crimes list={SEGUNDO_GRAU}/>}
      </div>
      <div>
        <button id={'terceiro'} onClick={handleShowCrimes}>CRIMES DE TERCEIRO GRAU</button>
        {crimesTitles.terceiro && <Crimes list={TERCEIRO_GRAU}/>}
      </div>
      <div>
        <button id={'transito'} onClick={handleShowCrimes}>CRIMES DE TRANSITO (CTB)</button>
        {crimesTitles.transito && <Crimes list={TRANSITO}/>}
      </div>
      <div>
        <button id={'agravantes'} onClick={handleShowCrimes}>AGRAVANTES</button>
        {crimesTitles.agravantes && <Crimes list={AGRAVANTES}/>}
      </div>
    </CrimesListContainer>
  );
};

export default CrimesList;
