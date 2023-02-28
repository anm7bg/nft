import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames';
import styles from './Search.module.scss'

export default function Search() {
 
    return(
        <div className={styles.search}>
            <SearchIcon className={styles.searchIcon} />
            <form action="#" method="get" className={styles.searchForm}>
                <input type="search" defaultValue="Find items, users and activities" />
            </form>
        </div>
    );

}