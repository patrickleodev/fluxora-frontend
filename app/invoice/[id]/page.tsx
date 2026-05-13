import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Calendar, CreditCard, Download, FileText, Mail, Printer } from "lucide-react";
import { notasFiscais } from "../../data/mockData";

export default async function InvoiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const nota = notasFiscais.find((item) => item.id === id);

  if (!nota) {
    notFound();
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  const statusConfig = {
    paga: { label: "Paga", color: "bg-green-100 text-green-800", icon: "✓" },
    pendente: { label: "Pendente", color: "bg-yellow-100 text-yellow-800", icon: "⏱" },
    vencida: { label: "Vencida", color: "bg-red-100 text-red-800", icon: "!" },
    cancelada: { label: "Cancelada", color: "bg-gray-100 text-gray-800", icon: "✕" },
  } as const;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link href="/invoices" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar para Notas Fiscais
            </Link>
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Enviar
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Imprimir
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Baixar PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex justify-between items-start mb-6 gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">{nota.numero}</h1>
              <p className="text-gray-500">{nota.descricao}</p>
            </div>
            <span className={`px-4 py-2 inline-flex text-sm font-semibold rounded-full ${statusConfig[nota.status].color}`}>
              {statusConfig[nota.status].icon} {statusConfig[nota.status].label}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <DetailInfo icon={<Building2 className="w-5 h-5 text-blue-600" />} label="Cliente" value={nota.cliente} subvalue={nota.cnpj} iconBg="bg-blue-100" />
            <DetailInfo icon={<Calendar className="w-5 h-5 text-green-600" />} label="Data de Emissão" value={formatDate(nota.dataEmissao)} iconBg="bg-green-100" />
            <DetailInfo icon={<Calendar className="w-5 h-5 text-amber-600" />} label="Data de Vencimento" value={formatDate(nota.dataVencimento)} iconBg="bg-amber-100" />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center gap-4 flex-wrap">
              <div>
                <p className="text-sm text-gray-500 mb-1">Valor Total</p>
                <p className="text-4xl font-semibold text-gray-900">{formatCurrency(nota.valor)}</p>
              </div>
              {nota.status === "pendente" && (
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Marcar como Paga
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-8 py-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Itens da Nota Fiscal
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-8 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                  <th className="text-center px-8 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                  <th className="text-right px-8 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Valor Unitário</th>
                  <th className="text-right px-8 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Valor Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {nota.itens.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-4 text-sm text-gray-900">{item.descricao}</td>
                    <td className="px-8 py-4 text-sm text-gray-900 text-center">{item.quantidade}</td>
                    <td className="px-8 py-4 text-sm text-gray-900 text-right">{formatCurrency(item.valorUnitario)}</td>
                    <td className="px-8 py-4 text-sm font-medium text-gray-900 text-right">{formatCurrency(item.valorTotal)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50 border-t-2 border-gray-300">
                <tr>
                  <td colSpan={3} className="px-8 py-4 text-right text-sm font-semibold text-gray-900">Total Geral:</td>
                  <td className="px-8 py-4 text-right text-lg font-semibold text-gray-900">{formatCurrency(nota.valor)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
          <h3 className="font-medium text-blue-900 mb-2">Informações Adicionais</h3>
          <p className="text-sm text-blue-800">
            Esta nota fiscal foi emitida em conformidade com a legislação vigente. Em caso de dúvidas, entre em contato com nosso departamento financeiro.
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailInfo({
  icon,
  label,
  value,
  subvalue,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subvalue?: string;
  iconBg: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`${iconBg} rounded-lg p-2`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
        {subvalue && <p className="text-sm text-gray-500">{subvalue}</p>}
      </div>
    </div>
  );
}
