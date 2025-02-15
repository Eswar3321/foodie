import Restaurant, {withPromotedLabel} from "../Restaurant";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from '../mocks/restCardMock.json'

it('Should render Restaurant card', ()=> {
  render(<Restaurant resdata={MOCK_DATA}/>);
  const name = screen.getByText('Cheesecake & Co.');
  expect(name).toBeInTheDocument();
});

it('Should check is promoted Restaurant card', ()=> {
  const RestaurantPromoted = withPromotedLabel(Restaurant);
  render(<RestaurantPromoted resdata={MOCK_DATA}/>);
  const promotionText = screen.getByText('Promoted');
  expect(promotionText).toBeInTheDocument();
});