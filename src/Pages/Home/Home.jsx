import React from 'react';
import Card from './Card';
import './Home.css';
import Tempo from '../../Tempo';


function Home() {

  const cards = [
    {
      image: 'https://c.pxhere.com/photos/d4/36/clouds_sky_blue_white_summer_day_sunny_day_sunny_sun-833927.jpg!d',
      title: 'Céu Claro',
      description: 'A previsão é de um dia ensolarado com poucas nuvens.',
    },
    {
      image: 'https://tratamentodeagua.com.br/wp-content/uploads/2022/12/O-que-e-chuva-acida-.jpg',
      title: 'Chuvas Isoladas',
      description: 'Algumas áreas podem esperar chuvas isoladas ao longo do dia.',
    },
    {
      image: 'https://scc10.com.br/wp-content/uploads/2022/09/Tempo-permanece-instavel-com-predominio-de-nuvens-em-SC.png',
      title: 'Nuvens Pesadas',
      description: 'A previsão é de nuvens pesadas e possibilidade de chuva à tarde.',
    },
    {
      image: 'https://wallpapercave.com/wp/wp4521476.jpg',
      title: 'Tempestade',
      description: 'Alerta para "O Devorador de Mentes", coisas estranhas podem acontecer.',
    },
  ];

  return (
    <div className="Home">
      <Tempo />
   
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;