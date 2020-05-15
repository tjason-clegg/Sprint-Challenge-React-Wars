import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// Write your Character component here

const Cards = props => {
    let {data} = props;

    return (

       <div>

            { data.map(character => {
                return (

                    <StyledDiv>
                        <StyledCard>

                        <h3>Name: {character.name}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Birth Year: {character.birth_year}</h3>
                        <h3>Hair Color: {character.hair_color}</h3>
                        <h3>Eye Color: {character.eye_color}</h3>

                        </StyledCard>
                    </StyledDiv>

                )

            })}
            
       
       </div>

    )

}

const StyledDiv = styled.div`
padding:2rem;
`;

const StyledCard = styled.div`
background-color:tan;
width:20%;
margin:0 auto;
border:5px inset saddlebrown;
display:flex;
flex-direction:column;
`;

export default Cards