import Link from "next/link";
import { AlertTriangle, Home, Shield, Target, TrendingUp } from "lucide-react";

const swotData = {
  strengths: [
    "Interface intuitiva e fácil de usar",
    "Dashboard com visualizações de dados em tempo real",
    "Sistema de filtros e busca avançada",
    "Organização eficiente de notas fiscais",
    "Relatórios e métricas detalhadas",
    "Design responsivo e moderno",
    "Navegação simplificada entre páginas",
  ],
  weaknesses: [
    "Ausência de integração com sistemas de ERP",
    "Falta de sincronização automática com a Receita Federal",
    "Sem funcionalidade de importação em lote",
    "Ausência de recursos de auditoria avançada",
    "Limitações em personalização de relatórios",
    "Sem aplicativo mobile nativo",
  ],
  opportunities: [
    "Integração com APIs de bancos para conciliação bancária",
    "Desenvolvimento de aplicativo mobile",
    "Implementação de IA para detecção de anomalias",
    "Expansão para gestão de documentos fiscais adicionais",
    "Parcerias com escritórios de contabilidade",
    "Marketplace de integrações com terceiros",
    "Certificação digital integrada",
  ],
  threats: [
    "Concorrência de soluções ERP completas",
    "Mudanças frequentes na legislação fiscal",
    "Sistemas gratuitos oferecidos pelo governo",
    "Necessidade de conformidade com LGPD",
    "Dependência de conectividade constante",
    "Riscos de segurança e proteção de dados",
  ],
};

export default function SWOTPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Análise SWOT</h1>
              <p className="text-sm text-gray-500 mt-1">Análise estratégica do gerenciador de notas fiscais</p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">O que é Análise SWOT?</h2>
              <p className="text-sm text-gray-700">
                A análise SWOT é uma ferramenta estratégica que avalia os pontos fortes (Strengths),
                fracos (Weaknesses), oportunidades (Opportunities) e ameaças (Threats) do projeto.
                Esta análise nos ajuda a identificar áreas de melhoria e oportunidades de crescimento.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SwotCard
            title="Forças"
            subtitle="Strengths - Fatores internos positivos"
            items={swotData.strengths}
            borderClass="border-green-200"
            headerClass="from-green-500 to-green-600"
            icon={<TrendingUp className="w-5 h-5 text-white" />}
            badgeClass="bg-green-100 text-green-700"
            badgeSymbol="✓"
          />
          <SwotCard
            title="Fraquezas"
            subtitle="Weaknesses - Fatores internos negativos"
            items={swotData.weaknesses}
            borderClass="border-red-200"
            headerClass="from-red-500 to-red-600"
            icon={<AlertTriangle className="w-5 h-5 text-white" />}
            badgeClass="bg-red-100 text-red-700"
            badgeSymbol="!"
          />
          <SwotCard
            title="Oportunidades"
            subtitle="Opportunities - Fatores externos positivos"
            items={swotData.opportunities}
            borderClass="border-blue-200"
            headerClass="from-blue-500 to-blue-600"
            icon={<Target className="w-5 h-5 text-white" />}
            badgeClass="bg-blue-100 text-blue-700"
            badgeSymbol="→"
          />
          <SwotCard
            title="Ameaças"
            subtitle="Threats - Fatores externos negativos"
            items={swotData.threats}
            borderClass="border-orange-200"
            headerClass="from-orange-500 to-orange-600"
            icon={<Shield className="w-5 h-5 text-white" />}
            badgeClass="bg-orange-100 text-orange-700"
            badgeSymbol="⚠"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <SummaryCard
            title="Fatores Internos"
            description="Aspectos controlados diretamente pela equipe do projeto, que podem ser melhorados com ações internas."
            primaryValue={swotData.strengths.length}
            primaryLabel="Forças identificadas"
            primaryColor="text-green-600"
            secondaryValue={swotData.weaknesses.length}
            secondaryLabel="Fraquezas identificadas"
            secondaryColor="text-red-600"
            gradientClass="from-purple-50 to-blue-50"
            borderClass="border-purple-200"
          />
          <SummaryCard
            title="Fatores Externos"
            description="Aspectos do ambiente externo que devem ser monitorados e podem impactar o projeto positiva ou negativamente."
            primaryValue={swotData.opportunities.length}
            primaryLabel="Oportunidades mapeadas"
            primaryColor="text-blue-600"
            secondaryValue={swotData.threats.length}
            secondaryLabel="Ameaças identificadas"
            secondaryColor="text-orange-600"
            gradientClass="from-orange-50 to-yellow-50"
            borderClass="border-orange-200"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Plano de Ação Estratégico</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActionItem
              index="1"
              title="Maximizar as Forças"
              titleColor="text-green-700"
              badgeClass="bg-green-100 text-green-700"
              description="Continuar investindo nas funcionalidades de dashboard e visualização de dados, mantendo a interface intuitiva como diferencial competitivo."
            />
            <ActionItem
              index="2"
              title="Minimizar as Fraquezas"
              titleColor="text-red-700"
              badgeClass="bg-red-100 text-red-700"
              description="Priorizar o desenvolvimento de integrações com ERPs e a Receita Federal, além de implementar importação em lote."
            />
            <ActionItem
              index="3"
              title="Aproveitar Oportunidades"
              titleColor="text-blue-700"
              badgeClass="bg-blue-100 text-blue-700"
              description="Explorar parcerias com escritórios de contabilidade e desenvolver recursos de IA para se diferenciar no mercado."
            />
            <ActionItem
              index="4"
              title="Mitigar Ameaças"
              titleColor="text-orange-700"
              badgeClass="bg-orange-100 text-orange-700"
              description="Investir em segurança de dados e conformidade com LGPD, mantendo-se atualizado com mudanças na legislação fiscal."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SwotCard({
  title,
  subtitle,
  items,
  borderClass,
  headerClass,
  icon,
  badgeClass,
  badgeSymbol,
}: {
  title: string;
  subtitle: string;
  items: string[];
  borderClass: string;
  headerClass: string;
  icon: React.ReactNode;
  badgeClass: string;
  badgeSymbol: string;
}) {
  return (
    <div className={`bg-white rounded-xl border-2 ${borderClass} shadow-sm overflow-hidden`}>
      <div className={`bg-gradient-to-r ${headerClass} px-6 py-4`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-xs text-white/80">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${badgeClass}`}>
                <span className="text-xs font-semibold">{badgeSymbol}</span>
              </div>
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  description,
  primaryValue,
  primaryLabel,
  primaryColor,
  secondaryValue,
  secondaryLabel,
  secondaryColor,
  gradientClass,
  borderClass,
}: {
  title: string;
  description: string;
  primaryValue: number;
  primaryLabel: string;
  primaryColor: string;
  secondaryValue: number;
  secondaryLabel: string;
  secondaryColor: string;
  gradientClass: string;
  borderClass: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${gradientClass} rounded-xl p-6 border ${borderClass}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <div className="flex gap-4">
        <div className="flex-1 bg-white rounded-lg p-4 border border-green-200">
          <div className={`text-2xl font-bold mb-1 ${primaryColor}`}>{primaryValue}</div>
          <div className="text-xs text-gray-600">{primaryLabel}</div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-4 border border-red-200">
          <div className={`text-2xl font-bold mb-1 ${secondaryColor}`}>{secondaryValue}</div>
          <div className="text-xs text-gray-600">{secondaryLabel}</div>
        </div>
      </div>
    </div>
  );
}

function ActionItem({
  index,
  title,
  titleColor,
  badgeClass,
  description,
}: {
  index: string;
  title: string;
  titleColor: string;
  badgeClass: string;
  description: string;
}) {
  return (
    <div>
      <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${titleColor}`}>
        <span className={`w-6 h-6 rounded flex items-center justify-center text-xs ${badgeClass}`}>{index}</span>
        {title}
      </h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}