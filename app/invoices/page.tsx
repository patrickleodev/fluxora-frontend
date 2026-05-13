"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Download, Filter, Home, Plus, Search } from "lucide-react";
import { InvoiceTable } from "../components/InvoiceTable";
import { notasFiscais } from "../data/mockData";

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "paga" | "pendente" | "vencida" | "cancelada">("all");

  const filteredNotas = useMemo(() => {
    return notasFiscais.filter((nota) => {
      const matchesSearch =
        nota.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nota.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nota.cnpj.includes(searchTerm);

      const matchesStatus = statusFilter === "all" || nota.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const statusCounts = {
    all: notasFiscais.length,
    paga: notasFiscais.filter((n) => n.status === "paga").length,
    pendente: notasFiscais.filter((n) => n.status === "pendente").length,
    vencida: notasFiscais.filter((n) => n.status === "vencida").length,
    cancelada: notasFiscais.filter((n) => n.status === "cancelada").length,
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Notas Fiscais</h1>
              <p className="text-sm text-gray-500 mt-1">Gerencie todas as suas notas fiscais</p>
            </div>
            <div className="flex gap-3">
              <Link href="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Home className="w-4 h-4" />
                Dashboard
              </Link>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Nova Nota
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por número, cliente ou CNPJ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button onClick={() => setStatusFilter("all")} className={`px-4 py-2 rounded-lg transition-colors ${statusFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Todas ({statusCounts.all})
              </button>
              <button onClick={() => setStatusFilter("paga")} className={`px-4 py-2 rounded-lg transition-colors ${statusFilter === "paga" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Pagas ({statusCounts.paga})
              </button>
              <button onClick={() => setStatusFilter("pendente")} className={`px-4 py-2 rounded-lg transition-colors ${statusFilter === "pendente" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Pendentes ({statusCounts.pendente})
              </button>
              <button onClick={() => setStatusFilter("vencida")} className={`px-4 py-2 rounded-lg transition-colors ${statusFilter === "vencida" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Vencidas ({statusCounts.vencida})
              </button>
            </div>

            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>

        {filteredNotas.length > 0 ? (
          <InvoiceTable notas={filteredNotas} />
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma nota encontrada</h3>
            <p className="text-gray-500">Tente ajustar seus filtros ou termo de busca</p>
          </div>
        )}

        {filteredNotas.length > 0 && (
          <div className="mt-4 text-sm text-gray-500 text-center">
            Mostrando {filteredNotas.length} de {notasFiscais.length} notas fiscais
          </div>
        )}
      </div>
    </div>
  );
}
