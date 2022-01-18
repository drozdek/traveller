import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { screen } from '@testing-library/react'
import { render } from './test-utils'
import { URL } from './Utils';

describe('shouls URL', () => {
    it('test url against localhost', ()=> {
        expect(URL).toContain('localhost');
    })
})