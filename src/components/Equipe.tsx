
import { useState } from 'react'

type Colaborador = {
  nome: string
  funcao: string
}

type Props = {
  colaboradores: Colaborador[]
  setColaboradores: (colaboradores: Colaborador[]) => void
}

function Equipe({ colaboradores, setColaboradores }: Props) {
  const [nome, setNome] = useState('')
  const [funcao, setFuncao] = useState('')

  function cadastrarColaborador() {
    if (!nome.trim() || !funcao.trim()) {
      alert('Preencha o nome e a função do colaborador.')
      return
    }

    setColaboradores([
      ...colaboradores,
      { nome: nome.trim(), funcao: funcao.trim() },
    ])

    setNome('')
    setFuncao('')
  }

  return (
    <section className="secao-estoque" id="secao-equipe">
      <h2>Equipe e Escalas</h2>
      <p>Cadastre os colaboradores e suas funções.</p>

      <form
        className="formulario-estoque"
        onSubmit={(evento) => {
          evento.preventDefault()
          cadastrarColaborador()
        }}
      >
        <label htmlFor="nome-colaborador">Nome do colaborador</label>
        <input
          id="nome-colaborador"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite o nome"
        />

        <label htmlFor="funcao-colaborador">Função</label>
        <input
          id="funcao-colaborador"
          value={funcao}
          onChange={(evento) => setFuncao(evento.target.value)}
          placeholder="Ex.: Técnico de instalação"
        />

        <button type="submit">Cadastrar colaborador</button>
      </form>

      <h3>Colaboradores cadastrados</h3>

      {colaboradores.length === 0 ? (
        <p>Nenhum colaborador cadastrado ainda.</p>
      ) : (
        <table className="tabela-estoque">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Função</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colaborador, indice) => (
              <tr key={indice}>
                <td>{colaborador.nome}</td>
                <td>{colaborador.funcao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default Equipe
