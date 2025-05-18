// import PropTypes from 'prop-types';
import data from '../data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Statistics data={data} />
    </>
  );
};
