export interface CrimeItem {
  id: number;
  crime: string;
  multa: number;
  fianca: number;
  servico: number;
  descricao: string;
}

export interface CrimesTitlesState {
  primeiro: boolean;
  segundo: boolean;
  terceiro: boolean;
  agravantes: boolean;
  transito: boolean;
}

export interface JailSentence {
  sentence: number;
  trafficFine: number;
  bail: number;
  conditional: number;
  crimes: string[];
}

export interface CheckboxStates {
  adv: boolean;
  primario: boolean;
  reincidente: boolean;
  condicional: boolean;
}

export interface InputsValues {
  notas: number;
  entorpecente: number;
  municao: number;
  homicidio: number;
  armas: number;
  colete: number;
}
