import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container, Heading, Text, Center } from '@chakra-ui/react'

interface IProps {
  id: number,
  name: string,
  country: string,
  visited: boolean,
  wishlist: boolean
}


export const WishList: FC<IProps> = () => {
  const [cities, setCities] = useState([]);

  const URL = "http://localhost:4000/rest/cities";
  useEffect(() => {
    const res = fetch(URL).
      then(city => {
        return city.json()
      }).
      then(function (res) {
        setCities(res.cities);
      });
  }, []);

  const cityWished = (city: IProps) => {
    if (city.wishlist) {
      return <Text>{city.wishlist === true ? city.name : false}</Text>
    }
  };

  return (
    <>
      <Heading as="h1">Visited</Heading>
      <Container centerContent maxW="container.md" flexDir="row">
        {
          <span>{cities && cities.map(cityWished)}</span>
        }
      </Container>

    </>
  )
}
