import React from 'react'
import './App.css'

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'

const App = () => {

      return (
      <div>
        <ContactForm
          />
          
        <SearchBox
          />
          
        <ContactList
        />
      
    </div>
  );
};

export default App
