import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelector';
import { FilterList } from '@mui/icons-material';
import { Input } from '@mui/joy';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  //filter name based on the the search keyword
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <label className={css.filterList}>
      <Input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <FilterList className={css.filter} />
      </label>
    </div>
  );
};
