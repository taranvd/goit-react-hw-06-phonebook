// import { ButtonStyled } from 'components/ContactsList/ContactsList.style';
import { changeFilter } from 'redux/filterSlice';
import { FilterContainer, Label, Input } from './ContactFilter.style';
import { useDispatch, useSelector } from 'react-redux';

export const ContactFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <Label>Find by contact</Label>
      <Input
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </FilterContainer>
  );
};
