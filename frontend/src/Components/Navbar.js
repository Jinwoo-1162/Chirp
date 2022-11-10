import React from 'react';
import '../CSS/Navbar.css';
import HiveIcon from '@mui/icons-material/Hive';

function Navbar() {
    return (
        <div className='navbar'>
            { /* logo icon */ }
            <HiveIcon/>

            { /* home */ }
            { /* explore */ }
            { /* notifications */ }
            { /* messages */ }
            { /* bookmarks */ }
            { /* lists */ }
            { /* profile */ }
            { /* more */ }

            { /* tweet button */ }
        </div>
    );
}

export default Navbar;