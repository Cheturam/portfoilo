import React from 'react';
import { ImageAsset } from '../../asset/images';
import styles from './Header.module.css';
import { IconButton, Radio, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface IHeaderProps {
    handleChangeTheme: () => void;
    isDarkTheme: boolean;
}

const Header: React.FC<IHeaderProps> = ({ handleChangeTheme, isDarkTheme }) => {
    return (
        <div className={styles['header-sticky']}>
            <header>
                <div className={styles['header-logo']}>
                    <img src={ImageAsset.Logo} alt="log" />
                </div>
                <ul className={styles['header-nav']}>
                    <li>
                        <a>ABOUT</a>
                    </li>
                    <li>
                        <a>EXPERIENCE</a>
                    </li>
                    <li>
                        <a>PROJECTS</a>
                    </li>
                    <li>
                        <a>CONTACT</a>
                    </li>
                </ul>
                <div className={styles['header-mobilemenu']}>
                    <IconButton>
                        <MenuIcon fontSize={'large'} />
                    </IconButton>
                </div>
            </header>
            <div className={styles['header-toggle']}>
                <Switch
                    checked={isDarkTheme}
                    onChange={handleChangeTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
        </div>
    );
};

export default Header;
