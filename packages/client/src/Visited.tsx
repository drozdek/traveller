import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container, Heading, Text, Center } from '@chakra-ui/react'
import { IProps, fetchJSON } from './Utils';

export const Visited: FC<IProps> = () => {
  const [cities, setCities] = useState([]),
   URL = "http://localhost:4000/rest/cities";

  useEffect(() => {
    fetchJSON(URL).
      then(function (res) {
        setCities(res.cities);
      });
  }, []);

  const cityVisited = (city: IProps) => {
    if (city.visited) {
      return <Text>{city.visited === true ? city.name : false}</Text>
    }
  };

  return (
    <>
      <Heading as="h1">Visited</Heading>
      <Container centerContent maxW="container.md" flexDir="row">
        {
          <span key={Math.random()}>{cities && cities.map(cityVisited)}</span>
        }
      </Container>

    </>
  )
}