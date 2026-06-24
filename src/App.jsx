import './App.css'

const menu = [
  'Nossa Família',
  'Orgânico',
  'Produtos',
  'Exportação',
  'Contato',
]

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="navBrand" href="#home">
          <img src={asset('images/crest.png')} alt="Brasão Casa Zampier" />
          <span>CASA ZAMPIER</span>
        </a>

        <div className="navLinks">
          {menu.map((item) => (
            <a key={item} href={`#${slugify(item)}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 14, 8, 0.18), rgba(0, 14, 8, 0.80)), url(${asset('images/hero-mate.jpg')})`,
        }}
      >
        <div className="heroOverlay" />

        <div className="heroContent">
          <img
            className="heroCrest"
            src={asset('images/crest.png')}
            alt="Brasão Família Zampier"
          />

          <p className="location">SÃO MATEUS DO SUL / PR — BRASIL</p>

          <h1>CASA ZAMPIER</h1>
          <h2>Premium Organic Yerba Mate</h2>

          <a href="#nossa-familia" className="heroButton">
            CONHEÇA NOSSA HISTÓRIA
          </a>

          <div className="premiumBox">
            <div>
              <span>♧</span>
              <h3>DA FLORESTA PARA A SUA MELHOR VERSÃO</h3>
            </div>

            <div>
              <span>☘</span>
              <h3>QUALIDADE EXCLUSIVA. SABOR QUE TRANSFORMA.</h3>
            </div>

            <div>
              <span>☕</span>
              <h3>EXPERIÊNCIA ÚNICA, PURO EQUILÍBRIO.</h3>
            </div>
          </div>

          <div className="badges">
            <p>100% ORGÂNICO CERTIFICADO</p>
            <p>PRODUÇÃO SUSTENTÁVEL</p>
            <p>PREMIADA INTERNACIONALMENTE</p>
            <p>SABOR ÚNICO E INCONFUNDÍVEL</p>
          </div>
        </div>
      </section>

      <Section
        id="nossa-familia"
        eyebrow="A Nossa Família"
        title="Um legado cultivado por gerações."
        text="A Casa Zampier nasce de uma história familiar profundamente ligada à terra, à floresta e à erva-mate. Antes de ser uma marca, somos uma família que aprendeu com seus avós e pais a respeitar o tempo da planta, o manejo do campo e a força da natureza."
      />

      <Section
        id="nossa-fazenda"
        eyebrow="Nossa Fazenda"
        title="Fazendas Estiva e Matão. A origem da nossa qualidade."
        text="Desde 1996, a família é responsável pelas Fazendas Estiva e Matão, em São Mateus do Sul, Paraná. Em áreas consorciadas com a Mata Atlântica, a erva-mate cresce em equilíbrio com araucárias, biodiversidade e solo vivo."
      />

      <Section
        id="organico"
        eyebrow="Produção Orgânica"
        title="Orgânico não é detalhe. É princípio."
        text="O cultivo orgânico é um dos pilares da Casa Zampier. Nosso manejo busca extrair o melhor da planta e do ambiente, respeitando seus ciclos naturais e preservando a floresta que dá origem à qualidade do produto."
      />

      <section className="darkSection" id="certificacoes">
        <p className="eyebrow">Certificações</p>
        <h2>Confiança comprovada pela origem.</h2>

        <div className="cards">
          <Card
            title="QIMA IBD"
            text="Certificação orgânica que reforça nosso compromisso com qualidade, rastreabilidade e produção responsável."
          />

          <Card
            title="IG-Mathe São Matheus"
            text="Indicação Geográfica que valoriza a origem, o território e a tradição produtiva de São Mateus do Sul."
          />

          <Card
            title="Mata Atlântica"
            text="Manejo integrado à biodiversidade, com ervais nativos, araucárias e preservação ambiental."
          />
        </div>
      </section>

      <Section
        id="a-ciencia-do-mate"
        eyebrow="A Ciência do Mate"
        title="Natureza, tradição e compostos bioativos."
        text="A erva-mate é reconhecida por seus compostos naturais como cafeína, teobromina, saponinas e antioxidantes. A Casa Zampier valoriza essa riqueza de forma responsável, apresentando o mate como uma bebida natural, energética e sofisticada."
      />

      <section className="awardSection" id="premiacoes">
        <p className="eyebrow">Premiações</p>
        <h2>Reconhecimento internacional.</h2>
        <p>
          No Mundial del Mate, em Buenos Aires, a Zampier conquistou Gran Oro,
          Bronze e Reconocimiento a la Excelencia, validando a qualidade do
          produto por especialistas internacionais em análise sensorial.
        </p>
      </section>

      <section className="darkSection" id="produtos">
        <p className="eyebrow">Produtos</p>
        <h2>Uma linha criada para novas experiências com a erva-mate.</h2>

        <div className="products">
          <Product name="DRIP Verde" desc="Praticidade, energia natural e consumo diário." />
          <Product name="DRIP Tostado" desc="Sabor intenso, elegante e aromático." />
          <Product name="Chimarrão" desc="A tradição em sua forma mais pura." />
          <Product name="Blends" desc="Coleção Expedição Mate com sabores naturais." />
        </div>
      </section>

      <Section
        id="experiencia-sensorial"
        eyebrow="Experiência Sensorial"
        title="Cada lote revela aroma, corpo, amargor e persistência."
        text="Com o MATTECARD sensorial, a Casa Zampier apresenta ao consumidor o perfil completo da erva-mate: sabor, granulometria, aroma, amargor, durabilidade e efeito energético."
      />

      <Section
        id="exportacao"
        eyebrow="Exportação"
        title="Da Mata Atlântica para o mundo."
        text="A Casa Zampier nasce com visão internacional, preparada para apresentar ao mercado global uma erva-mate brasileira orgânica, premium, rastreável e conectada à força da sua origem."
      />

      <section className="contact" id="contato">
        <p className="eyebrow">Contato</p>
        <h2>Vamos construir algo extraordinário juntos.</h2>
        <button>FALAR COM A CASA ZAMPIER</button>
      </section>
    </main>
  )
}

function Section({ id, eyebrow, title, text }) {
  return (
    <section className="section" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}

function Card({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function Product({ name, desc }) {
  return (
    <div className="product">
      <div className="productMockup">
        <span>Z</span>
      </div>
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  )
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
}

export default App
