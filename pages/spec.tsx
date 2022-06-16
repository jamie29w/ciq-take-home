import { render } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });

  it.todo('fetches and presents log data');
  it.todo('displays the number of unique usernames in all logs');

  describe('the size filter functionality', () => {
    it('shows the number of logs with uploads larger than the input value');
  });

  describe('the date and user filter functionality', () => {
    it('shows all logs with a give username property for a given date range');
  });
});
