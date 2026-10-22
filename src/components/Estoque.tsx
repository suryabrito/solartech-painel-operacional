
import { useState } from 'react'

type Material = {
  nome: string
  quantidade: number
}

type Props = {
  materiais: Material[]
  setMateriais: (materiais: Material[]) => void
}

function Estoque({ materiais, setMateriais }: Props) {
  const [nomeMaterial, setNomeMaterial] = useState('')
  const [quantidade, setQuantidade] = useState('')

  function cadastrarMaterial() {
    if (nomeMaterial.trim() === '' || quantidade === '') {
      alert('Preencha o nome e a quantidade do material.')
      return
    }

    if (Number(quantidade) <= 0 || !Number.isFinite(Number(quantidade))) {
      alert('Digite uma quantidade válida.')
      return
    }

    setMateriais([
      ...materiais,
      {
        nome: nomeMaterial.trim(),
        quantidade: Number(quantidade),
      },
    ])

    setNomeMaterial('')
    setQuantidade('')
  }

  return (
    <section className="secao-estoque" id="secao-estoque">
      <h2>Estoque e Insumos</h2>
      <p>Cadastre e consulte os materiais utilizados nas instalações solares.</p>

      <form
        className="formulario-estoque"
        onSubmit={(evento) => {
          evento.preventDefault()
          cadastrarMaterial()
        }}
      >
        <label htmlFor="nome-material">Nome do material</label>
        <input
          id="nome-material"
          type="text"
          placeholder="Ex.: Painel solar"
          value={nomeMaterial}
          onChange={(evento) => setNomeMaterial(evento.target.value)}
        />

        <label htmlFor="quantidade-material">Quantidade disponível</label>
        <input
          id="quantidade-material"
          type="number"
          min="1"
          step="1"
          placeholder="Ex.: 20"
          value={quantidade}
          onChange={(evento) => setQuantidade(evento.target.value)}
        />

        <button type="submit">Cadastrar material</button>
      </form>

      <h3>Materiais cadastrados</h3>

      {materiais.length === 0 ? (
        <p>Nenhum material cadastrado ainda.</p>
      ) : (
        <table className="tabela-estoque">
          <thead>
            <tr>
              <th>Material</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {materiais.map((material, indice) => (
              <tr key={indice}>
                <td>{material.nome}</td>
                <td>{material.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default Estoque
