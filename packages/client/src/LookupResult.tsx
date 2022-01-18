import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container } from '@chakra-ui/react'
import { IProps, fetchJSON, URL } from './Utils';

const CityLookup: FC<IProps> = (props: IProps) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchJSON(URL).
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