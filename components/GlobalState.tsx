import React  from 'react';
import myList from '../data/sidebardata';

const GlobalState = React.createContext([myList, () => {}]);

export default GlobalState;