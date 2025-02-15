import Body from '../Body';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/mockRestList.json'
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from '../../utilities/UserContext'
import appStore from '../../utilities/appStore'

import { Provider } from 'react-redux'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for cake", async () => {
  await act(async () => render (
    <Provider store={appStore}>
      <UserContext.Provider value={'Eswar'} >
        <BrowserRouter >
          <Body/>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  ));  

  const searchButton = screen.getByRole('button', {name: "Search"});
  const searchInput = screen.getByTestId('searchInput');
  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  
  fireEvent.change(searchInput, {target: {value: "cake"}});
  fireEvent.click(searchButton);
  const cards = screen.getAllByTestId('resCard');
  
  expect(cardsBeforeSearch.length).toBe(9);
  expect(cards.length).toBe(2);
});

it("Should filter top rated res list", async () => {
  await act(async () => render (
    <Provider store={appStore}>
      <UserContext.Provider value={'Eswar'}>
        <BrowserRouter >
          <Body/>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  ));

  const topRatedButton = screen.getByRole('button', {name: "Top Rated"});
  fireEvent.click(topRatedButton);
  const cardsTopRated = screen.getAllByTestId('resCard');
  expect(cardsTopRated.length).toBe(3);
});
