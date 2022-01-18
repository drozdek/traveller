import React, { useEffect, useState, useRef } from 'react'
import type { FC } from 'react'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack, Checkbox, CheckboxGroup, useCheckbox } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import LookupResult from './LookupResult';

const createCityURL = (id: number) => {
  return `http://localhost:4000/rest/cities/${id}`
}

const getInuptValue = (e: any) => {
  if (e) {
    let res = e.currentTarget.value
    return res;
  }
}

export const Home: FC<any> = () => {
  const [valueInput, setValueInput] = useState([]);
  const [checkboxWish, setCheckboxWish] = useState(false);
  const [checkboxVisit, setCheckboxVisit] = useState(false);
  const [compareValue, setCompareValue] = useState([]);
  const ref = useRef();

  const fetchInst = () => {
    fetch(createCityURL(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        Object.assign({}, { "wishlist": wishlistVal })
      )
    })
  }

  const changeCityWish = (id: number, wishlistVal: boolean | string) => {
    fetch(createCityURL(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        Object.assign({}, { "wishlist": wishlistVal })
      )
    })
  }

  const changeCityVisit = (id: number, visitedVal: boolean | string) => {
    fetch(createCityURL(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        Object.assign({}, { "visited": visitedVal })
      )
    })
  }

  useEffect(() => {
    const URL = "http://localhost:4000/rest/cities";
    const res = fetch(URL).
      then(city => {
        return city.json()
      }).
      then(function (res) {
        setCompareValue(res.cities);
      });
  }, [valueInput]);

  const getID = () => {
    compareValue.map(city => {
      if (city.name === valueInput) {
        ref.current = city.id;
      }
    })
  }

  getID();

  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <InputGroup>
          <Input onChange={(e: any) => setValueInput(getInuptValue(e))} />
          <InputRightElement children={<IconButton aria-label="" icon={<Search2Icon />} />} />
        </InputGroup>
        <LookupResult name={valueInput} />
        <Checkbox onChange={(e) => { setCheckboxWish(e.target.checked); changeCityWish(ref.current, !checkboxWish) }}>Wish?</Checkbox>
        <Checkbox onChange={e => { setCheckboxVisit(e.target.checked); changeCityVisit(ref.current, !checkboxVisit) }}>Visited?</Checkbox>
      </Container>
    </VStack>
  )
}
