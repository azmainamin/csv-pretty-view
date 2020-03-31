import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import CSVReaderContainer from "./components/CSVReader/CSVReaderContainer";
function render() {
  return shallow(<App />);
}

test('renders CSVReader component', () => {
  const rendered = render();
  const csvReader = rendered.find(CSVReaderContainer);

  expect(csvReader.length).toBe(1);
});