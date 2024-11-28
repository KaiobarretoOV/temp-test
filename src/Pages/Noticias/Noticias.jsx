import React from "react";
import "./Noticias.css";



const news = [
  {
    title: "Enchentes no Brasil",
    description: "Chuvas intensas causam alagamentos em diversas cidades brasileiras.",
    image: "https://th.bing.com/th/id/OIP.Pq63Es10zw58jlSi_0tllwHaE7?rs=1&pid=ImgDetMain",
  },
  {
    title: "Nevascas nos EUA",
    description: "Frente fria histórica traz nevascas e temperaturas negativas recordes.",
    image: "https://www.jornaldocomercio.com/_midias/jpg/2022/01/30/000_9xh6xm-9531096.jpg",
  },
  {
    title: "Calor extremo na Europa",
    description: "Onda de calor atinge recordes em diversos países da Europa.",
    image: "https://s2-g1.glbimg.com/L03J5BulVzrUPbBBvGBa6HsFzms=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/i/a/o51YBWQECmNK4JZtFxhQ/3bcce060-21af-11ee-a887-9f9e2f96fb01.jpg",
  },
  {
    title: "Tufão na Ásia",
    description: "Regiões costeiras enfrentam fortes ventos e chuvas devido ao Tufão Lingling.",
    image: "https://th.bing.com/th/id/R.0932b1d19af584dfb611d1be7ac21dff?rik=P11K3Ab9Dx0CWw&riu=http%3a%2f%2fimg.estadao.com.br%2fresources%2fjpg%2f8%2f2%2f1495078567528.jpg&ehk=B8867Oq%2bahstCNHM0mhZxinWA6Gg%2faKpqi76ptixZdE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Seca na África",
    description: "Falta de chuvas afeta milhões de pessoas em áreas áridas do continente.",
    image: "https://imagens.climatempo.com.br/climapress/galeria/2018/07/8b7b04e0bc22a091be5be899daada50a.jpg",
  },
  {
    title: "Incêndios na Austrália",
    description: "Bombeiros lutam contra chamas em florestas no sul do país.",
    image: "https://www.impala.pt/wp-content/uploads/2017/07/22555874.jpg",
  },
  {
    title: "Tempestades no Caribe",
    description: "Região é atingida por tempestades tropicais, causando estragos.",
    image: "https://ogimg.infoglobo.com.br/in/3087037-bcc-9fb/FT1086A/Fortes-ventos-atingem-a-cidade-de-Mahahual-no-Mexico-apos-a-chegada-a-costa-da-tempestade-tropical-Karl.-O-fenomeno-podera-se-transformar-em-furacao-ao-chegar-ao-Golfo-do-Mexico.jpg",
  },
  {
    title: "Degelo no Ártico",
    description: "Mudanças climáticas aceleram o derretimento de calotas polares.",
    image: "https://img.olhardigital.com.br/wp-content/uploads/2021/04/shutterstock_78068128-scaled.jpg",
  },
];

function Noticias() {
  return (
    <div className="news-container">
      {news.map((item, index) => (
        <div key={index} className="news-card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
