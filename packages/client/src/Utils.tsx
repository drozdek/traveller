import React, { useEffect, useState } from 'react';

export interface IProps {
    id: number,
    name: string,
    country: string,
    visited: boolean,
    wishlist: boolean
}

export const fetchJSON = (url: string) => {
    return fetch(url).
        then(city => {
            return city.json()
        });
}