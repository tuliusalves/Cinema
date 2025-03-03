import React, { useState } from 'react';
import styled from 'styled-components';
import AindaEstouAqui from '../../assets/Ainda_estou_aqui.webp';
import Nosferatu from '../../assets/Nosferatu.webp';
import Anora from '../../assets/Anora.webp';
import MariaCallas from '../../assets/Maria_callas.webp';
import Mufasa from '../../assets/Mufasa.webp';
import Sonic3 from '../../assets/Sonic3.webp';
const cardsData = [
  { id: 1, title: 'Ainda Estou Aqui', synopsis: 'Rio de Janeiro, início dos anos 1970. O país enfrenta o endurecimento da ditadura militar.', image: AindaEstouAqui },
  { id: 2, title: 'Nosferatu', synopsis: 'Sinopse do filme Nosferatu.', image: Nosferatu },
  { id: 3, title: 'Anora', synopsis: 'Sinopse do filme Angra.', image: Anora} ,
  { id: 4, title: 'Maria Callas', synopsis: 'Sinopse do filme Maria Callas.', image: MariaCallas },
  { id: 5, title: 'Mufasa', synopsis: 'Sinopse do filme Maria Callas.', image: Mufasa },
  { id: 6, title: 'Sonic3', synopsis: 'Sinopse do filme Maria Callas.', image: Sonic3 },
];

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto auto auto 50px;
  border: solid 1px white;
`;

const Card = styled.div`
  width: ${props => props.expanded ? '400px' : '200px'};
  height: ${props => props.expanded ? '300px' : '250px'};
  background-color: #333;
  border-radius: 25px;
  margin: 10px;
  overflow: hidden;
  transition: width 0.3s, height 0.3s;
  cursor: pointer;
`;

const CardImage = styled.div`
  width: 70%;
  height: 203px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius:25px;
  margin:25px auto auto auto;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;

const PageNumber = styled.div`
  margin: 0 5px;
  cursor: pointer;
`;

function Cards() {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const handleCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);
  const currentCards = cardsData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  return (
    <div>
      <CardContainer>
        {currentCards.map(card => (
          <Card key={card.id} expanded={expandedCardId === card.id} onClick={() => handleCardClick(card.id)}>
            <CardImage image={card.image} />
            <CardContent>
              <h3>{card.title}</h3>
              {expandedCardId === card.id && <p>{card.synopsis}</p>}
            </CardContent>
          </Card>
        ))}
      </CardContainer>
      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <PageNumber key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </PageNumber>
        ))}
      </Pagination>
    </div>
  );
}

export default Cards;