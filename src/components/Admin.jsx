import { Link } from 'react-scroll'

import { ReactComponent as Dashboard } from "../assets/svg/10-dashboard.svg"
import { ReactComponent as Admins } from "../assets/svg/11-admin.svg"
import { ReactComponent as Lupa } from "../assets/svg/17-lupa.svg"
import { ReactComponent as Premiada } from "../assets/svg/premiada.svg"
import { ReactComponent as PremiadaF } from "../assets/svg/frutas/bananaMin.svg"

import { ReactComponent as Awards } from "../assets/svg/21-award.svg"

import { ReactComponent as Producer } from "../assets/svg/12-producer.svg"
import { ReactComponent as Users } from "../assets/svg/13-users.svg"
import { ReactComponent as Arrow } from "../assets/svg/14-arrow.svg"
import { ReactComponent as Insta } from "../assets/svg/19-insta.svg"

import { ReactComponent as Charts } from "../assets/svg/15-graficos.svg"
import { ReactComponent as Tables } from "../assets/svg/16-tables.svg"
import { ReactComponent as Remove } from "../assets/svg/18-remove.svg"
import { ReactComponent as Block } from "../assets/svg/20-block.svg"

const Admin = () => {
  const handleUsers = event => {
    event.preventDefault()
  }

  const handleInfluencers = event => {
    event.preventDefault()
  }

  return (
    <section className="dashboard">
      <nav>
        <div className='core'>
          <h2>CORE</h2>

          <span>
            <Dashboard/>
            <p>Dashboard</p>
          </span>
        </div>

        <div className="maybe">
          <h2>INTERFACE</h2>

          <Link activeClass="active"
            to='painel-admin'
            spy={ true }
            smooth={ true }
            offset={ -100 }
            duration={ 500 }
            className='link-scroll'>

            <span>
              <Admins/>
              <p>Admin</p>
              <Arrow/>
            </span>
          </Link>
          
          <Link activeClass="active"
            to='influencers-title'
            spy={ true }
            smooth={ true }
            offset={ -100 }
            duration={ 500 }
            className='link-scroll'>

            <span>
              <Producer/>
              <p>Produtores</p>
              <Arrow/>
            </span>
          </Link>

          <Link activeClass="active"
            to='users-title'
            spy={ true }
            smooth={ true }
            offset={ -100 }
            duration={ 500 }
            className='link-scroll'>
              <span>
                <Users/>
                <p>Usuários</p>
                <Arrow/>
              </span>
          </Link>

          <Link activeClass="active"
            to='lucro-title'
            spy={ true }
            smooth={ true }
            offset={ -100 }
            duration={ 500 }
            className='link-scroll'>
              <span className='premiada'>
                <Premiada/>
                <p>Lucros</p>
                <Arrow/>
              </span>
          </Link>
        </div>

        <div className="maybe">
          <h2>ADDONS</h2>

          <span>
            <Charts/>
            <p>Gráficos</p>
          </span>

          <span>
            <Tables/>
            <p>Tabelas</p>
          </span>
        </div>
      </nav>

      <article className="dados">
        <div className="painel">
          <h1 id='painel-admin'>Painel Admin</h1>

          <span>
            <input type="text" placeholder="pesquise por..."/>
            <button>
              <Lupa/>
            </button>
          </span>
        </div>

        <div className='blocos'>
          <ul>
            <li>Faturamento: R$ 1700</li>
            <li>Detalhes <Arrow/></li>
          </ul>

          <ul>
            <li>Maior depósito: R$ 300</li>
            <li>Detalhes <Arrow/></li>
          </ul>

          <ul>
            <li>Contas inativas: 1000</li>
            <li>Detalhes <Arrow/></li>
          </ul>

          <ul>
            <li>Maior Saque: R$50</li>
            <li>Detalhes <Arrow/></li>
          </ul>
        </div>

        <div className="blocos s2">
          <ul>
            <li>Influencers: 1354</li>
            <li>Detalhes <Arrow/></li>
          </ul>

          <ul>
            <li>Afiliados: 3210</li>
            <li>Detalhes <Arrow/></li>
          </ul>

          <ul>
            <li>Tot. Contas: 33350</li>
            <li>Detalhes <Arrow/></li>
          </ul>

          <ul>
            <li>Bloqueados: 120</li>
            <li>Detalhes <Arrow/></li>
          </ul>
        </div>

        <div className='bonus'>
          <h2>Bônus</h2>

          <form onSubmit={ handleUsers }>
            <p>
              <label htmlFor="nUsers">Usuários: </label>
              <input type="text" id='nUsers' name='nUsers' value='25%' readOnly/>
            </p>

            <ul className='ajusta-pcx'>
              <li>-</li>
              <li>+</li>
            </ul>

            <button type='submit' className='major-button min'>ATUALIZAR</button>
          </form>

          <form onSubmit={ handleInfluencers }>
            <p>
              <label htmlFor="nProdutor">Produtor: </label>
              <input type="text" id='nProdutor' name='nProdutor' value='40%' readOnly/>
            </p>

            <ul className='ajusta-pcx'>
              <li>-</li>
              <li>+</li>
            </ul>

            <button type='submit' className='major-button min'>ATUALIZAR</button>
          </form>
        </div>

        <div className='produtores' id='influencers-title'>
          <h2>Produtores</h2>

          <div>
            <button className="add">+ ADICIONAR</button>
            
            <ul className="indica-tipo">
              <li>
                <strong></strong>
                <strong>Excelente</strong>
              </li>

              <li>
                <strong></strong>
                <strong>Bom</strong>
              </li>

              <li>
                <strong></strong>
                <strong>Moderado</strong>
              </li>

              <li>
                <strong></strong>
                <strong>Abaixo</strong>
              </li>
            </ul>
          </div>

          <table className='table-produtores'>
            <thead>
              <tr>
                <th>Nickname</th>
                <th>Email</th>
                <th>Instagram</th>
                <th>Afiliados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>@exemplo</td>
                <td>exemplo@email.com</td>

                <td>
                  <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                    <Insta/>
                    <p>302.5k</p>
                  </a>
                </td>

                <td className='premium'>2945</td>
                <button><Remove/></button>
              </tr>
              
              <tr>
                <td>@orwell</td>
                <td>orwell@email.com</td>
                
                <td>
                  <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                    <Insta/> <p>278.5k</p>
                  </a>
                </td>

                <td className="moderado">1284</td>
                <button><Remove/></button>
              </tr>

              <tr>
                <td>@jax</td>
                <td>jax@email.com</td>
                
                <td>
                  <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                    <Insta/> <p>222.5k</p> </a>
                </td>

                <td className="excelente">1954</td>
                <button><Remove/></button>
              </tr>

              <tr>
                <td>@verne</td>
                <td>verne@email.com</td>
                
                <td>
                  <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                    <Insta/> <p>100.5k</p> </a>
                </td>

                <td className='abaixo'>376</td>
                <button><Remove/></button>
              </tr>

              <tr>
                <td>@orwell</td>
                <td>orwell@email.com</td>
                
                <td>
                  <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                    <Insta/> <p>80.5k</p> </a>
                </td>

                <td className='abaixo'>66</td>
                <button><Remove/></button>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='usuarios' id='users-title'>
          <h2>Usuários</h2>

          <div>
            <ul className="indica-tipo">
              <li>
                <strong></strong>
                <strong>Excelente</strong>
              </li>

              <li>
                <strong></strong>
                <strong>Moderado</strong>
              </li>

              <li>
                <strong></strong>
                <strong>Abaixo</strong>
              </li>

              <li>
                <strong></strong>
                <strong>Alerta</strong>
              </li>
            </ul>
          </div>

          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Tot. Depósitos</th>
                <th>Tot. Saques</th>
                <th>Bônus</th>
                <th>Afiliados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>exemplo@email.com</td>
                <td>R$ 455</td>

                <td className='moderado'>R$ 150</td>
                <td>R$ 340</td>
                <td>45</td>

                <button className='block'><Block/></button>
              </tr>
              
              <tr>
                <td>orwell@email.com</td>
                <td>R$ 85</td>

                <td className='excelente'>R$ 0</td>
                <td>R$ 20</td>
                <td>0</td>

                <button className='block'><Block/></button>
              </tr>

              <tr>
                <td>jax@email.com</td>
                <td>R$ 20</td>

                <td className='abaixo'>R$ 30</td>
                <td>R$ 0</td>
                <td>3</td>

                <button className='block'><Block/></button>
              </tr>

              <tr className='bloqueado'>
                <td>verne@email.com</td>
                <td>R$ 20</td>

                <td className='alerta'>R$ 300</td>
                <td>R$ 20</td>
                <td>0</td>

                <button className='block active'><Block/></button>
              </tr>

              <tr>
                <td>orwell@email.com</td>
                <td>R$ 10</td>

                <td className='excelente'>R$ 0</td>
                <td>R$ 0</td>
                <td>2</td>

                <button className='block'><Block/></button>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='lucros' id='lucro-title'>
          <h2>Lucros</h2>

          <button className="add">+ ADICIONAR</button>
          
          <span>
            <ul>
              <li>R$ 100 mil</li>
              
              <li>
                <PremiadaF className=''/> 
                <p>100 Frutas Premiadas</p>
              </li>

              <Awards className='awards'/>
              <li className='porcentagem'>0%</li>
            </ul>

            <ul className='carregando'>
              <li className='lucro'>R$ 50 mil</li>
              
              <li>
                <PremiadaF className=''/> 
                <p>50 Frutas Premiadas</p>
              </li>

              <Awards className='awards'/>
              <li className='porcentagem'>41%</li>
            </ul>

            <ul className='conquista'>
              <li>R$ 10 mil</li>
              
              <li>
                <PremiadaF className=''/> 
                <p>10 Frutas Premiadas</p>
              </li>

              <Awards className='awards active'/>
              <li className="porcentagem">100%</li>
            </ul>
          </span>
        </div>

      </article>

      <div className='items-nav'>
        <Link activeClass="active"
          to='painel-admin'
          spy={ true }
          smooth={ true }
          offset={ -100 }
          duration={ 500 }
          className='link-scroll'>

          <Admins/>
        </Link>
        
        <Link activeClass="active"
          to='influencers-title'
          spy={ true }
          smooth={ true }
          offset={ -100 }
          duration={ 500 }
          className='link-scroll'>

          <Producer/>
        </Link>

        <Link activeClass="active"
          to='users-title'
          spy={ true }
          smooth={ true }
          offset={ -100 }
          duration={ 500 }
          className='link-scroll'>
            <Users/>
        </Link>

        <Link activeClass="active"
          to='lucro-title'
          spy={ true }
          smooth={ true }
          offset={ -100 }
          duration={ 500 }
          className='link-scroll'>
            <Premiada className='remove-border'/>
        </Link>

        {/* <Charts/>

        <Tables/> */}
      </div>
    </section>

  )
}

export default Admin
