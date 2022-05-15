import { render, screen } from '@testing-library/react';
import Input from './Input';
/**  Snapshots  rendering */
import renderer from 'react-test-renderer';

describe('Input component', () => {

  test('renders correctly', () => {
    const component = renderer.create(<Input type='password' name='password' value='' onChange={(e: any) => console.log(e)}/>).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render the component on the screen', () => {
    render(<Input data-testid='form-input' type='password' name='password' value='' onChange={(e: any) => console.log(e)}/>);
    expect(screen.getByTestId('form-input')).toBeInTheDocument();
  });

});