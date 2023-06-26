import "./App.css";
import img1 from "../public/img1.svg";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";

function App() {
  return (
    <div className="container">
     <div className="section1"><p>Contato: emersonmv27@gmail.com</p>
     <h1>Olá! Meu nome é Emerson Melo e sou desenvolvedor Front-End</h1>

      <p className="illustration">
        <img src={img1} alt="illustration" />
        Possuo experiência desenvolvendo aplicações utilizando tecnologias como
        HTML, CSS, JavaScript, TypeScript, React, GitHub, Sass e Styled
        Components
      </p>
      
      <p>Estes são alguns dos projetos que desenvolvi:</p>
      </div> 
      
      <div className="images">
      
        <p>
          Personal Finance - Website que permite gerenciar finanças pessoais a
          partir do cadastro de despesas e receitas por mês
        </p>
        <p>Tecnologias utilizadas: TypeScript, React, Styled Components</p>
        <a href="https://personalfinancezx.netlify.app/">
          <img src={img2} alt="Project 1" />
        </a>
        
        
        <p>
          Project Manager - Website que permite gerenciar projetos,
          possibilitando estabelecer orçamento e outros detalhes
        </p>
        <p>Tecnologias utilizadas: JavaScript, React, CSS</p>
        <a href="https://projectmanagerzx.netlify.app/">
          <img src={img3} alt="Project 2" />
        </a>
        
        
        <p>
          Movies Discover - Website de catálogo de filmes que permite descobrir
          filmes
        </p>
        <p>Tecnologias utilizadas: JavaScript, React, CSS</p>
        <a href="https://moviesdiscoverzx.netlify.app/">
          <img src={img4} alt="Project 3" />
        </a>
        
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
