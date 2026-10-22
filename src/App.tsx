
import { useState } from 'react'
import './App.css'

import Estoque from './components/Estoque'
import Equipe from './components/Equipe'
import Qualidade from './components/Qualidade'

type Material = {
  nome: string
  quantidade: number
}

type Colaborador = {
  nome: string
  funcao: string
}

type Inspecao = {
  nome: string
  concluida: boolean
}

function App() {
  const [materiais, setMateriais] = useState<Material[]>([])
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([])
  const [inspecoes, setInspecoes] = useState<Inspecao[]>([])

  const inspecoesPendentes = inspecoes.filter(
    (inspecao) => !inspecao.concluida
  ).length

  return (
    <div className="painel">
      <aside className="menu-lateral">
        <h2>☀️ SolarTech</h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#estoque">Estoque e Insumos</a>
          <a href="#equipe">Equipe e Escalas</a>
          <a href="#qualidade">Qualidade e Inspeção</a>
        </nav>
      </aside>

      <main className="conteudo">
        <header className="cabecalho">
          <h1>Painel Operacional</h1>
          <p>Gestão de Energia Solar Residencial</p>
        </header>

        <section id="inicio" className="resumo">
          <h2>Bem-vindo ao painel!</h2>
          <p>
            Gerencie os materiais, organize sua equipe
            e acompanhe a qualidade das instalações.
          </p>
        </section>

        <section className="indicadores">
          <article className="indicador">
            <h3>Materiais cadastrados</h3>
            <p>{materiais.length}</p>
          </article>

          <article className="indicador">
            <h3>Colaboradores</h3>
            <p>{colaboradores.length}</p>
          </article>

          <article className="indicador">
            <h3>Inspeções pendentes</h3>
            <p>{inspecoesPendentes}</p>
          </article>
        </section>

        <section className="cartoes">
          <article className="cartao" id="estoque">
            <h3>Estoque e Insumos</h3>
            <p>Controle os materiais e suas quantidades.</p>
            <button
              onClick={() =>
                document.getElementById('secao-estoque')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              Acessar módulo
            </button>
          </article>

          <article className="cartao" id="equipe">
            <h3>Equipe e Escalas</h3>
            <p>Organize os colaboradores e suas atividades.</p>
            <button
              onClick={() =>
                document.getElementById('secao-equipe')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              Acessar módulo
            </button>
          </article>

          <article className="cartao" id="qualidade">
            <h3>Qualidade e Inspeção</h3>
            <p>Confira os itens e acompanhe as inspeções.</p>
            <button
              onClick={() =>
                document.getElementById('secao-qualidade')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              Acessar módulo
            </button>
          </article>
        </section>

        <Estoque
          materiais={materiais}
          setMateriais={setMateriais}
        />

        <Equipe
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
        />

        <Qualidade
          inspecoes={inspecoes}
          setInspecoes={setInspecoes}
        />
      </main>
    </div>
  )
}

export default App
