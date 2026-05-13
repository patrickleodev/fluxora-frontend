export interface NotaFiscal {
  id: string;
  numero: string;
  cliente: string;
  cnpj: string;
  valor: number;
  status: 'paga' | 'pendente' | 'vencida' | 'cancelada';
  dataEmissao: string;
  dataVencimento: string;
  descricao: string;
  itens: ItemNotaFiscal[];
}

export interface ItemNotaFiscal {
  id: string;
  descricao: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

export const notasFiscais: NotaFiscal[] = [
  {
    id: '1',
    numero: 'NF-2026-001',
    cliente: 'Tech Solutions Ltda',
    cnpj: '12.345.678/0001-90',
    valor: 15750.0,
    status: 'paga',
    dataEmissao: '2026-03-15',
    dataVencimento: '2026-04-15',
    descricao: 'Serviços de desenvolvimento de software',
    itens: [
      {
        id: '1',
        descricao: 'Desenvolvimento de aplicação web',
        quantidade: 80,
        valorUnitario: 150.0,
        valorTotal: 12000.0,
      },
      {
        id: '2',
        descricao: 'Consultoria técnica',
        quantidade: 25,
        valorUnitario: 150.0,
        valorTotal: 3750.0,
      },
    ],
  },
  {
    id: '2',
    numero: 'NF-2026-002',
    cliente: 'Indústria ABC S.A.',
    cnpj: '23.456.789/0001-01',
    valor: 28500.0,
    status: 'pendente',
    dataEmissao: '2026-03-20',
    dataVencimento: '2026-04-20',
    descricao: 'Implementação de sistema ERP',
    itens: [
      {
        id: '1',
        descricao: 'Módulo de controle de estoque',
        quantidade: 1,
        valorUnitario: 15000.0,
        valorTotal: 15000.0,
      },
      {
        id: '2',
        descricao: 'Módulo financeiro',
        quantidade: 1,
        valorUnitario: 13500.0,
        valorTotal: 13500.0,
      },
    ],
  },
  {
    id: '3',
    numero: 'NF-2026-003',
    cliente: 'Varejo Digital LTDA',
    cnpj: '34.567.890/0001-12',
    valor: 8900.0,
    status: 'paga',
    dataEmissao: '2026-03-10',
    dataVencimento: '2026-04-10',
    descricao: 'Manutenção e suporte técnico',
    itens: [
      {
        id: '1',
        descricao: 'Suporte técnico mensal',
        quantidade: 1,
        valorUnitario: 5900.0,
        valorTotal: 5900.0,
      },
      {
        id: '2',
        descricao: 'Hospedagem de servidores',
        quantidade: 1,
        valorUnitario: 3000.0,
        valorTotal: 3000.0,
      },
    ],
  },
  {
    id: '4',
    numero: 'NF-2026-004',
    cliente: 'Logística Express Ltda',
    cnpj: '45.678.901/0001-23',
    valor: 12400.0,
    status: 'vencida',
    dataEmissao: '2026-02-28',
    dataVencimento: '2026-03-28',
    descricao: 'Sistema de rastreamento de frotas',
    itens: [
      {
        id: '1',
        descricao: 'Desenvolvimento de aplicativo mobile',
        quantidade: 60,
        valorUnitario: 180.0,
        valorTotal: 10800.0,
      },
      {
        id: '2',
        descricao: 'Integração com GPS',
        quantidade: 1,
        valorUnitario: 1600.0,
        valorTotal: 1600.0,
      },
    ],
  },
  {
    id: '5',
    numero: 'NF-2026-005',
    cliente: 'Consultoria Empresarial ME',
    cnpj: '56.789.012/0001-34',
    valor: 6200.0,
    status: 'paga',
    dataEmissao: '2026-03-25',
    dataVencimento: '2026-04-25',
    descricao: 'Website institucional',
    itens: [
      {
        id: '1',
        descricao: 'Design e desenvolvimento de site',
        quantidade: 1,
        valorUnitario: 4500.0,
        valorTotal: 4500.0,
      },
      {
        id: '2',
        descricao: 'SEO e otimização',
        quantidade: 1,
        valorUnitario: 1700.0,
        valorTotal: 1700.0,
      },
    ],
  },
  {
    id: '6',
    numero: 'NF-2026-006',
    cliente: 'Educação Online Brasil',
    cnpj: '67.890.123/0001-45',
    valor: 22300.0,
    status: 'pendente',
    dataEmissao: '2026-03-28',
    dataVencimento: '2026-04-28',
    descricao: 'Plataforma de ensino à distância',
    itens: [
      {
        id: '1',
        descricao: 'Desenvolvimento da plataforma',
        quantidade: 120,
        valorUnitario: 165.0,
        valorTotal: 19800.0,
      },
      {
        id: '2',
        descricao: 'Sistema de vídeos',
        quantidade: 1,
        valorUnitario: 2500.0,
        valorTotal: 2500.0,
      },
    ],
  },
  {
    id: '7',
    numero: 'NF-2026-007',
    cliente: 'Saúde Conectada Ltda',
    cnpj: '78.901.234/0001-56',
    valor: 18750.0,
    status: 'paga',
    dataEmissao: '2026-03-18',
    dataVencimento: '2026-04-18',
    descricao: 'Sistema de gestão hospitalar',
    itens: [
      {
        id: '1',
        descricao: 'Módulo de prontuário eletrônico',
        quantidade: 1,
        valorUnitario: 12000.0,
        valorTotal: 12000.0,
      },
      {
        id: '2',
        descricao: 'Integração com laboratórios',
        quantidade: 1,
        valorUnitario: 6750.0,
        valorTotal: 6750.0,
      },
    ],
  },
  {
    id: '8',
    numero: 'NF-2026-008',
    cliente: 'Agro Tech Brasil S.A.',
    cnpj: '89.012.345/0001-67',
    valor: 31200.0,
    status: 'pendente',
    dataEmissao: '2026-03-30',
    dataVencimento: '2026-04-30',
    descricao: 'Sistema de gestão agrícola',
    itens: [
      {
        id: '1',
        descricao: 'Software de gestão de plantio',
        quantidade: 1,
        valorUnitario: 20000.0,
        valorTotal: 20000.0,
      },
      {
        id: '2',
        descricao: 'App mobile para campo',
        quantidade: 1,
        valorUnitario: 11200.0,
        valorTotal: 11200.0,
      },
    ],
  },
  {
    id: '9',
    numero: 'NF-2026-009',
    cliente: 'FinTech Inovação Ltda',
    cnpj: '90.123.456/0001-78',
    valor: 45000.0,
    status: 'cancelada',
    dataEmissao: '2026-03-05',
    dataVencimento: '2026-04-05',
    descricao: 'Aplicativo de pagamentos',
    itens: [
      {
        id: '1',
        descricao: 'Desenvolvimento do aplicativo',
        quantidade: 200,
        valorUnitario: 200.0,
        valorTotal: 40000.0,
      },
      {
        id: '2',
        descricao: 'Integração bancária',
        quantidade: 1,
        valorUnitario: 5000.0,
        valorTotal: 5000.0,
      },
    ],
  },
  {
    id: '10',
    numero: 'NF-2026-010',
    cliente: 'Imobiliária Prime',
    cnpj: '01.234.567/0001-89',
    valor: 9800.0,
    status: 'paga',
    dataEmissao: '2026-03-22',
    dataVencimento: '2026-04-22',
    descricao: 'Portal de imóveis',
    itens: [
      {
        id: '1',
        descricao: 'Website com busca avançada',
        quantidade: 1,
        valorUnitario: 7800.0,
        valorTotal: 7800.0,
      },
      {
        id: '2',
        descricao: 'Integração com redes sociais',
        quantidade: 1,
        valorUnitario: 2000.0,
        valorTotal: 2000.0,
      },
    ],
  },
];
