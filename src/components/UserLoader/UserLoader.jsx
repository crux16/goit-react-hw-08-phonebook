import css from './UserLoader.module.css';

export const UserLoader = () => {
  return <span className={css.loader}>Refreshing user...</span>;
};