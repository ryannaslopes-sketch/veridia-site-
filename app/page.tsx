import { MessageSquare, ShieldCheck, Zap, FileText, Calendar, Languages, Check } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const whatsappLink = "https://wa.me/55SEUNUMERO?text=Olá%20Veridia,%20quero%20testar%20a%20IA%20no%20meu%20escritório";
  const domain = "veridia.com.br";
  const cnpj = "XX.XXX.XXX/0001-XX";

  const planos = [
    {
      nome: "Starter",
      preco: "R$ 297",
      periodo: "/mês",
      desc: "Pra bancas de até 3 advogados",
      features: ["Até 300 tri
