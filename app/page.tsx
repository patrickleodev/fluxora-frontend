import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Clock, DollarSign, FileText, Target, TrendingUp } from "lucide-react";

type NotaStatus = "paga" | "pendente" | "vencida" | "cancelada";

type Nota = {
  status: NotaStatus;
  valor: number;
};

const notasFiscais: Nota[] = [
  { status: "paga", valor: 15750 },
  { status: "pendente", valor: 28500 },
  { status: "paga", valor: 8900 },
  { status: "vencida", valor: 12400 },
  { status: "paga", valor: 6200 },
  { status: "pendente", valor: 22300 },
  { status: "paga", valor: 18750 },
  { status: "pendente", valor: 31200 },
  { status: "cancelada", valor: 45000 },
  { status: "paga", valor: 9800 },
];

const receitaMensal = [42000, 38500, 51000, 45000, 48200, 53150];
const receitaLabels = ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"];
const topClientes = [
  { nome: "Tech Solutions Ltda", valor: 15750 },
  { nome: "Indústria ABC S.A.", valor: 28500 },
  { nome: "Educação Online Brasil", valor: 22300 },
  { nome: "Agro Tech Brasil S.A.", valor: 31200 },
  { nome: "FinTech Inovação Ltda", valor: 9800 },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  trend,
  color,
}: {
  title: string;
  value: string;
  change?: string;
  icon: React.ElementType;
  trend?: "up" | "down";
  color: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-semibold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-600"}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`${color} rounded-lg p-3`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const totalNotas = notasFiscais.length;
  const notasPagas = notasFiscais.filter((n) => n.status === "paga").length;
  const notasPendentes = notasFiscais.filter((n) => n.status === "pendente").length;
  const notasVencidas = notasFiscais.filter((n) => n.status === "vencida").length;

  const valorTotal = notasFiscais.filter((n) => n.status !== "cancelada").reduce((acc, nota) => acc + nota.valor, 0);
  const valorRecebido = notasFiscais.filter((n) => n.status === "paga").reduce((acc, nota) => acc + nota.valor, 0);
  const valorPendente = notasFiscais.filter((n) => n.status === "pendente").reduce((acc, nota) => acc + nota.valor, 0);
  const valorVencido = notasFiscais.filter((n) => n.status === "vencida").reduce((acc, nota) => acc + nota.valor, 0);

  const maxReceita = Math.max(...receitaMensal);
  const totalTopClientes = topClientes.reduce((acc, cliente) => acc + cliente.valor, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard de Notas Fiscais</h1>
              <p className="text-sm text-gray-500 mt-1">Visão geral do seu gerenciamento fiscal</p>
            </div>
            <div className="flex gap-3">
              <Link href="/swot" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                <Target className="w-4 h-4" />
                Análise SWOT
              </Link>
              <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard title="Total de Notas" value={String(totalNotas)} change={`${notasPagas} pagas, ${notasPendentes} pendentes`} icon={FileText} color="bg-blue-500" />
          <MetricCard title="Valor Total" value={formatCurrency(valorTotal)} change="+12.5% vs mês anterior" icon={DollarSign} trend="up" color="bg-green-500" />
          <MetricCard title="Valor Recebido" value={formatCurrency(valorRecebido)} change={`${((valorRecebido / valorTotal) * 100).toFixed(1)}% do total`} icon={TrendingUp} trend="up" color="bg-emerald-500" />
          <MetricCard title="A Receber" value={formatCurrency(valorPendente)} change={notasVencidas > 0 ? `${notasVencidas} vencidas` : "Nenhuma vencida"} icon={Clock} trend={notasVencidas > 0 ? "down" : undefined} color="bg-amber-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Receita Mensal</h3>
            <div className="h-[300px] flex items-end gap-4">
              {receitaMensal.map((valor, index) => {
                const height = Math.max((valor / maxReceita) * 100, 10);
                return (
                  <div key={receitaLabels[index]} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full flex items-end justify-center h-[260px]">
                      <div className="w-full max-w-[72px] bg-blue-100 rounded-t-lg flex items-end overflow-hidden">
                        <div className="w-full bg-blue-600 rounded-t-lg transition-all" style={{ height: `${height}%` }} />
                      </div>
                    </div>
                    <span className="mt-3 text-sm text-gray-600">{receitaLabels[index]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Status</h3>
            <div className="flex items-center gap-8 h-[300px]">
              <div className="relative w-[220px] h-[220px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(#10b981_0%_37%,#f59e0b_37%_70%,#ef4444_70%_88%,#6b7280_88%_100%)]" />
                <div className="absolute inset-[22px] rounded-full bg-white border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-900">{totalNotas}</div>
                    <div className="text-xs text-gray-500 mt-1">Notas totais</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500" />Pagas: {notasPagas}</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-500" />Pendentes: {notasPendentes}</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" />Vencidas: {notasVencidas}</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gray-500" />Canceladas: {notasFiscais.filter((n) => n.status === "cancelada").length}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-500">Valor Recebido</h4>
              <ArrowUpRight className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">{formatCurrency(valorRecebido)}</p>
            <p className="text-sm text-green-600 mt-1">{notasPagas} notas pagas</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-500">Valor Pendente</h4>
              <Clock className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">{formatCurrency(valorPendente)}</p>
            <p className="text-sm text-yellow-600 mt-1">{notasPendentes} notas pendentes</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-500">Valor Vencido</h4>
              <ArrowDownRight className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">{formatCurrency(valorVencido)}</p>
            <p className="text-sm text-red-600 mt-1">{notasVencidas} notas vencidas</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 5 Clientes</h3>
          <div className="space-y-4">
            {topClientes.map((cliente, index) => {
              const percentage = (cliente.valor / totalTopClientes) * 100;
              return (
                <div key={cliente.nome} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-900">{cliente.nome}</span>
                      <span className="text-sm font-semibold text-gray-900">{formatCurrency(cliente.valor)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{percentage.toFixed(1)}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
