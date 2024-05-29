import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()

    return (
        <main className='main-welcome'>
            <div className='div-welcome-title'>
                <h1>Seja bem-vindo ao
                    <br /> Bullet Journal!!</h1>
            </div>
            <section className='section-principal'>
                <section className='section-about'>
                    <article className='article-text'>
                        <h2>Entendendo o projeto:</h2>
                        <p className='par-1'>
                            O Bullet Journal é um método de organização que segue alguns passos para personalizar as folhas de um
                            caderno para planejar melhor suas atividades, além de acompanhar e desenvolver seus hábitos.
                            O Bullet Journal permite que você tenha um registro completo das suas tarefas do dia a dia.
                        </p>
                        <br />
                        <p className='par-1'>
                            Inicialmente vamos traçar um plano, para podermos personalizar o seu Bullet Journal de acordo
                            com suas metas e objetivos.
                        </p>
                        <div className='div-start'>
                            <button type='button' className='button-start' onClick={() => {navigate('/timeline')}}>
                                <h3 >Vamos lá!!</h3>
                            </button>
                        </div>
                    </article>
                    <article className='article-youtube'>
                        <h2>Recomendo:</h2>
                        <iframe width="760" height="455" src="https://www.youtube.com/embed/cRVn3AzMcnI?si=hcUskDBPz83bAJFY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                        </iframe>
                    </article>
                </section>
            </section>

        </main>
    )
}

export default Welcome