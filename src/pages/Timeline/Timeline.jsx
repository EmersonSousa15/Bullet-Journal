import { useState } from "react"

const Timeline = () => {
  const [objectives, setObjectives] = useState([])
  const [otherObjective, setOtherObjective] = useState('');

  const handleAdding = () => {
    if (otherObjective != '') {
      setObjectives(prev => [...prev, { title: otherObjective, status: true }])
      setOtherObjective('')
    }
  }

  const handleChange = (currentObjective) => {
    currentObjective.status = !currentObjective.status

    setObjectives(objectives.filter(objective => objective !== currentObjective))
  }

  return (
    <main>
      <h1>Criando sua Timeline</h1>
      <section>
        <section>
          <form onSubmit={(e) => {e.preventDefault(), console.log(objectives);}}>
            <div>
              <label htmlFor="prazo">Prazo: </label>
              <input type="number" id="prazo" placeholder="Ex: 5 anos..." />
            </div>
            <div>
              <label htmlFor="areas">Áreas do objetivos: </label>
              <div id="areas">
                <div>
                  <label htmlFor="outros">Outros</label>
                  <input type="text" className="areas" id="outros" onChange={(e) => setOtherObjective(e.target.value)} />
                  <button onClick={() => handleAdding()}>Adicionar</button>
                </div>
                {
                  objectives.map((objective, i) => {
                    return (
                      <div key={i}>
                        <input type="checkbox" className="areas" id={objective.title} checked={objective.status} onChange={() => handleChange(objective)} />
                        <label htmlFor={objective.title}>{objective.title}</label>
                      </div>)
                  })
                }
              </div>

            </div>
          </form>
        </section>
        <section>
          <div>
            <ul>

            </ul>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Timeline