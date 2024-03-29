import { GridLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return <GridLoader className={css.span} color="#000" size={'30px'} margin={'4px'} />;
};
