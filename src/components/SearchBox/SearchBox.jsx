import css from './SearchBox.module.css';
import { useDispatch } from "react-redux";
import { changeFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';


const SearchBox = () => {
    const search = useSelector((state) => state.filter.filters.name);
    console.log(search);
    const dispatch = useDispatch();

    const handleOnChange= (evt) => dispatch(changeFilter(evt));

    // const handleOnChange = (value) => { handleSearch(value) };

    return (
    <div className={css.search}>
        <p >Find contacts by name.</p>
            <input
                type='text'
                onChange={(e) =>  handleOnChange(e.target.value)}  
             className={css.inputSearch} />
    </div>
 )}
export default SearchBox;
