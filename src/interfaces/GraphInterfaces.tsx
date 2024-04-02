interface DadosItem {
  regional: string;
  filial: string;
  equipamento: string;
  imposicao: string;
  dias_sem_coletas: number | string;
  data_coleta: string | null;
  atendimento: string;
}

export interface Props {
  dados: DadosItem[];
  filtroRegional: string;
  filtroFilial: string;
}

export interface Dataset {
  label: string;
  backgroundColor: string;
  data: number[];
}
