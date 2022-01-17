import React, { useState } from 'react'
import type { FC } from 'react'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import LookupResult from './LookupResult';

const getInuptValue = (e: any) => {
  let res = e.currentTarget.value === "" ? "" : e.currentTarget.value ;
  console.log(res)
  return res;
}

export const Home: FC<any> = () => {
  const [ss, setAa] = useState([]);
  console.log("sss", ss)
  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <InputGroup>
          <Input onChange={(e:any) => setAa(getInuptValue(e))} />
          <InputRightElement children={<IconButton aria-label="" icon={<Search2Icon />} />} />
        </InputGroup>
        <LookupResult name={ss}/>
      </Container>

    </VStack>
  )
}
