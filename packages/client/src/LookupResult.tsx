import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container, Heading } from '@chakra-ui/react'

interface IProps {
    id: number,
    name: string,
    country: string,
    visited: boolean,
    wishlist: boolean
}

const CityLookup: FC<IProps> = (props: IProps) => {
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

    const isCityLondon = (city: IProps) => {
        if (city.name === props.name) {
            return <p key={city.name}>{props.name} {JSON.stringify(city)}</p>
        }
    }

    return (
        <Container>
            Cities are:
            {cities && cities.map(isCityLondon)}
        </Container>
    )
}

export default CityLookup