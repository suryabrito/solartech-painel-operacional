
import { useState } from 'react'

type Inspecao = {
  nome: string
  concluida: boolean
}

type Props = {
  inspecoes: Inspecao[]
  setInspecoes: (inspecoes: Inspecao[]) => void
}

function Qualidade({ inspecoes, setInspecoes }: Props) {
  const [nomeInspecao, setNomeInspecao] = useState('')

  function cadastrarInspecao() {
    if (!nomeInspecao.trim()) {
      alert('Digite o nome da inspeção.')
      return
    }

    setInspecoes([
      ...inspecoes,
      { nome: nomeInspecao.trim(), concluida: false },
    ])

    setNomeInspecao('')
  }

  function concluirInspecao(indiceSelecionado: number) {
    setInspecoes(
      inspecoes.map((inspecao, indice) =>
        indice === indiceSelecionado
          ? { ...inspecao, concluida: !inspecao.concluida }
          : inspecao
      )
    )
  }

  return (
    <section className="secao-estoque" id="secao-qualidade">
      <h2>Qualidade e Inspeção</h2>
      <p>Cadastre as inspeções e acompanhe sua conclusão.</p>

      <form
        className="formulario-estoque"
        onSubmit={(evento) => {
          evento.preventDefault()
          cadastrarInspecao()
        }}
      >
        <label htmlFor="nome-inspecao">Nome da inspeção</label>
        <input
          id="nome-inspecao"
          value={nomeInspecao}
          onChange={(evento) => setNomeInspecao(evento.target.value)}
          placeholder="Ex.: Verificação dos painéis solares"
        />

        <button type="submit">Cadastrar inspeção</button>
      </form>

      <h3>Inspeções cadastradas</h3>

      {inspecoes.length === 0 ? (
        <p>Nenhuma inspeção cadastrada ainda.</p>
      ) : (
        <table className="tabela-estoque">
          <thead>
            <tr>
              <th>Inspeção</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {inspecoes.map((inspecao, indice) => (
              <tr key={indice}>
                <td>{inspecao.nome}</td>
                <td>{inspecao.concluida ? 'Concluída' : 'Pendente'}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => concluirInspecao(indice)}
                  >
                    {inspecao.concluida ? 'Reabrir' : 'Concluir'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default Qualidade
