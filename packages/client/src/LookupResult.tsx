import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container } from '@chakra-ui/react'

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

    const isCity = (city: IProps) => {        
        if (city.name === props.name) {
            // console.log(JSON.stringify(city));
            return props.name
        }
    }

    return (
        <Container>
            Cities are:
            <p>{cities && cities.map(isCity)}</p>
        </Container>
    )
}

export default CityLookup