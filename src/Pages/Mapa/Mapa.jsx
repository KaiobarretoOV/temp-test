import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Mapa.css';

// Componente para exibir o radar meteorológico
const RadarMeteorologico = () => {
  const [radarImage, setRadarImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para obter os dados do radar
    const fetchRadarData = async () => {
      try {
        // A URL da API do INMET para o radar meteorológico (exemplo)
        const radarUrl = 'https://www.sentinel-hub.com/'; 

        const response = await axios.get(radarUrl);

        console.log('Resposta da API:', response);
        
        // Suponhamos que a resposta seja uma URL para a imagem do radar
        // Ajuste isso conforme o formato da resposta da API
        const radarImageUrl = response.data.url; // Substitua com o caminho correto da URL

        setRadarImage(radarImageUrl);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar a imagem:', err);
        setError('Erro ao carregar a imagem do radar');
        setLoading(false);
      }
    };

    fetchRadarData();
  }, []);

  if (loading) {
    return <p>Carregando radar meteorológico...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Radar Meteorológico</h2>
      {radarImage ? (
        <img src={radarImage} alt="Radar Meteorológico" style={{ width: '100%', height: 'auto' }} />
      ) : (
        <p>Não foi possível carregar o radar no momento.</p>
      )}
    </div>
  );
};

export default RadarMeteorologico;
