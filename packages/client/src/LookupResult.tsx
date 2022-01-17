import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container, Heading } from '@chakra-ui/react'




const CityLookup: FC = () => {

    interface IProps {
        id: number,
        name: string,
        country: string,
        visited: boolean,
        wishlist: boolean
    }

    const [cities, setCities] = useState([]);
    useEffect(() => {
        const res = fetch("http://localhost:4000/rest/cities").
            then(city => {
                return city.json()
            }).
            then(function (res) {
                setCities(res.cities);
            });
    }, []);

    const isCityLondon = (city: IProps) => {
        return city.name
    }

    return (
        <Container>
            LookupResult


            {cities && cities.map((city: IProps, index: number) =>
                <p>{isCityLondon(city)}</p>
            )}
            {/* {cities && cities.map((city: IProps, index: number) => {
                if (city.name === "London") 
                return <p key={city.name}>{city.name}{city.id}</p>
            })} */}
        </Container>
    )
}

export default CityLookup