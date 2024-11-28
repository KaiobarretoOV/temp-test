import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [noticias, setNoticias] = useState([]);
  const [indexNoticia, setIndexNoticia] = useState(0);

  // Simulação de carregamento de notícias (pode ser uma chamada API real)
  useEffect(() => {
    setNoticias([
      { id: 1, titulo: 'Tempestade forte chega ao sul do Brasil' },
      { id: 2, titulo: 'Previsão de chuvas intensas para o Nordeste' },
      { id: 3, titulo: 'Novo recorde de temperatura é registrado no Rio' },
      { id: 4, titulo: 'Ondas de calor afetam o centro-oeste do país' },
    ]);

    // Função para mover o carrossel automaticamente
    const interval = setInterval(() => {
      setIndexNoticia((prevIndex) => (prevIndex + 1) % noticias.length);
    }, 3000); // A cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, [noticias]);

  return (
    <header className="menu" aria-label="Cabeçalho de navegação do site OPEN Clima">
      <div className="logo">
        <span>OPEN Clima - Meteorologia</span>
      </div>
      <nav>
        <a href="/" aria-label="Página inicial">Home</a>
        <a href="/Noticias" aria-label="Noticias">Noticias</a>
        <a href="/mapa" aria-label="Mapeamento">Mapa</a>
        <a href="/contatos" aria-label="Página de contatos">Contato</a>
      </nav>

      {/* Barra lateral com carrossel de notícias */}
      
      <div className="sidebar">
        <div className="sidebar-title">Principais Notícias</div>
        <div className="carousel">
          <p>{noticias[indexNoticia]?.titulo}</p>
        </div>
      </div>
       {/* Barra lateral de Anúncio */}
      <div className="sidebar-right">
        <div className="sidebar-title">Anúncio</div>
        <div className="ad-content">
         
        </div>
      </div>
       {/* Barra lateral de Anúncio2 */}
       <div className="sidebar-right2">
        <div className="sidebar-title">Anúncio</div>
        <div className="ad-content">
         
        </div>
      </div> {/* Barra lateral de Anúncio3 */}
      <div className="sidebar-right3">
        <div className="sidebar-title">Anúncio</div>
        <div className="ad-content">
         
        </div>
      </div>
    </header>

  );
}

export default Header;
