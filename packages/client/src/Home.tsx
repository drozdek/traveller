import React, { useState } from 'react'
import type { FC } from 'react'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack, Checkbox, CheckboxGroup, useCheckbox } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import LookupResult from './LookupResult';

const getInuptValue = (e: any) => {
  if (e) {
    let res = e.currentTarget.value
    return res;
  }
}

export const Home: FC<any> = () => {
  const [valueInput, setValueInput] = useState([]);
  const [checkboxWish, setCheckboxWish] = useState(false);
  const [checkboxVisit, setCheckboxVisit] = useState(true);
  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <InputGroup>
          <Input onChange={(e: any) => setValueInput(getInuptValue(e))} />
          <InputRightElement children={<IconButton aria-label="" icon={<Search2Icon />} />} />
        </InputGroup>
        <LookupResult name={valueInput} />
        <CheckboxGroup>
          <Checkbox isChecked={checkboxWish} onChange={e => setCheckboxWish(e.target.checked)}>Wish?</Checkbox>
          <Checkbox isChecked={checkboxVisit} onChange={e => setCheckboxVisit(e.target.checked)}>Visited?</Checkbox>
        </CheckboxGroup>
      </Container>

    </VStack>
  )
}
