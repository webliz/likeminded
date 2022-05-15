import { render, screen } from '@testing-library/react';
import App from './App';
/**  Snapshots  rendering */
import renderer from 'react-test-renderer';

describe("App component", () => {

  test('renders correctly', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('renders create account button text', () => {
    render(<App />);
    const textElement = screen.getByText(/Create Account/i);
    expect(textElement).toBeInTheDocument();
  });

});