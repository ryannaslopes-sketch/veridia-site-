export default function Home() {
  const domain = "veridia.com.br";
  const cnpj = "XX.XXX.XXX/0001-XX";

  const planos = [
    {
      nome: "Starter",
      preco: "R$ 299",
      periodo: "/mês",
      desc: "Pra bancas pequenas",
      features: ["Site + IA + WhatsApp"]
    }
  ]

  return (
    <main>
      <h1>Veridia - Site no ar 🚀</h1>
      <p>Domínio: {domain}</p>
    </main>
  )
}