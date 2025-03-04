import React, { useState } from 'react';
import styled from 'styled-components';
import AindaEstouAqui from '../../assets/Ainda_estou_aqui.webp';
import Nosferatu from '../../assets/Nosferatu.webp';
import Anora from '../../assets/Anora.webp';
import MariaCallas from '../../assets/Maria_callas.webp';
import Mufasa from '../../assets/Mufasa.webp';
import Sonic3 from '../../assets/Sonic3.webp';
import Mickey17 from '../../assets/capa-mickey-17.jpg';
import Flow from '../../assets/flow.jpeg';

const cardsData = [
  { id: 1, title: 'Ainda Estou Aqui', synopsis: 'Rio de Janeiro, início dos anos 1970. O país enfrenta o endurecimento da ditadura militar.', image: AindaEstouAqui },
  { id: 2, title: 'Nosferatu', synopsis: 'Sinopse do filme Nosferatu.', image: Nosferatu },
  { id: 3, title: 'Anora', synopsis: 'Sinopse do filme Anora.', image: Anora },
  { id: 4, title: 'Maria Callas', synopsis: 'Sinopse do filme Maria Callas.', image: MariaCallas },
  { id: 5, title: 'Mickey17', synopsis: 'Sinopse do filme Mickey 17.', image: Mickey17 },
  { id: 6, title: 'Sonic3', synopsis: 'Sinopse do filme Sonic 3.', image: Sonic3 },
  { id: 7, title: 'Flow', synopsis: 'Sinopse do filme Flow.', image: Flow },
  { id: 8, title: 'Mufasa', synopsis: 'Sinopse do filme Mufasa.', image: Mufasa },
];

const CardContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  flex-wrap: wrap; 
  margin-left:65px;

  a{
  color:white;
  text-decoration:none;
  margin-top:5px;
  font-weight:bold;
  }
`;

const Card = styled.div`
  width: ${props => props.expanded ? '400px' : '180px'};
  height: ${props => props.expanded ? '300px' : '273px'};
  background-color: #333;
  border-radius: 25px;
  margin: 10px;
  overflow: hidden;
  transition: width 0.3s, height 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: ${props => props.expanded ? 'row' : 'column'}; /* Altera a direção do flex */
`;

const CardImage = styled.div`
  width: ${props => props.expanded ? '150px' : '156px'}; /* Ajusta a largura */
  height: ${props => props.expanded ? '273px' : '273px'}; /* Ajusta a altura */
  background-image: url(${props => props.image});
  background-size: ${props => props.expanded ?'cover':'cover'};
  margin:${props => props.expanded ? '20px auto auto 20px': '20px auto auto auto'};
  background-position: center;
  border-radius: ${props => props.expanded ? '25px' : '25px'}; /* Ajusta o border-radius */
`;

const CardContent = styled.div`
  padding: 10px;
  width: ${props => props.expanded ? '250px' : '100%'}; /* Ajusta a largura */
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.expanded ? 'flex-start' : 'center'}; /* Ajusta o alinhamento */
`;

const Pagination = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
  font-weight:bold;
`;

const PageNumber = styled.div`
  margin: 0 5px;
  cursor: pointer;
`;

const ExpandedContent = styled.div`
  margin-top: 10px;
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
            <CardImage image={card.image} expanded={expandedCardId === card.id} />
            <CardContent expanded={expandedCardId === card.id}>
              {expandedCardId === card.id && (
                <ExpandedContent>
                  <h3>{card.title}</h3>
                  <p>{card.synopsis}</p>
                  <a href="#">Mais...</a>
                  <ul>
                    <li><a href='/filmes/cinemas'>Cinemas disponíveis</a></li>
                    <li><a href='/filmes/criticas'>Críticas dos usuários</a></li>
                  </ul>
                </ExpandedContent>
              )}
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