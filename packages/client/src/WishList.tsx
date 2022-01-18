import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container, Heading, Text, Center } from '@chakra-ui/react'
import { IProps, fetchJSON, URL } from './Utils';

export const WishList: FC<IProps> = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchJSON(URL).
      then(function (res) {
        setCities(res.cities);
      });
  }, []);

  const cityWished = (city: IProps) => {
    if (city.wishlist) {
      return <Text key={city.name}>{city.wishlist === true ? city.name : false}</Text>
    }
  };

  return (
    <>
      <Heading as="h1">Visited</Heading>
      <Container centerContent maxW="container.md" flexDir="row">
        {
          <span key={Math.random()}>{cities && cities.map(cityWished)}</span>
        }
      </Container>

    </>
  )
}
