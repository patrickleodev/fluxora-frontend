"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../providers/AuthProvider';
import { FileText, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      router.push('/');
    } catch (err) {
      setError('Email ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#ffffff_0%,#f3f8ff_48%,#eaf2ff_100%)] flex items-center justify-center p-4 text-ink">
      <div className="w-full max-w-[430px]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] mb-4 bg-brand-600 shadow-soft">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-[2.05rem] leading-tight font-semibold tracking-[-0.03em] text-ink mb-2">Bem-vindo de volta</h1>
          <p className="text-[1.03rem] text-muted">Entre na sua conta para continuar</p>
        </div>

        <div className="bg-surface rounded-[1.5rem] shadow-card border border-borderSoft p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all placeholder:text-slate-400"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all placeholder:text-slate-400"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500" />
                <span className="ml-2 text-sm text-slate-600">Lembrar-me</span>
              </label>
              <a href="#" className="text-sm text-brand-600 hover:text-brand-700 transition-colors">Esqueceu a senha?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-600 text-white py-3.5 rounded-xl hover:bg-brand-700 transition-colors font-semibold flex items-center justify-center gap-2 disabled:bg-brand-300 disabled:cursor-not-allowed shadow-soft"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-surface text-slate-500">ou</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-600">
              Não tem uma conta?{' '}
              <Link href="/signup" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">Cadastre-se gratuitamente</Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">Ao entrar, você concorda com nossos <a href="#" className="text-slate-700 hover:text-slate-900 underline">Termos de Serviço</a> e <a href="#" className="text-slate-700 hover:text-slate-900 underline">Política de Privacidade</a></p>
        </div>
      </div>
    </div>
  );
}
