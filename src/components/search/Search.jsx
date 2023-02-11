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
        <div>
            <SearchIcon />
            <form action="#" method="get" className={styles.searchform}>
                <input type="search" />
            </form>
        </div>
    );

}