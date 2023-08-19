import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Mainsection from './component/Mainsection';
import Cardsection from './component/Cardsection';
import Listgrp from './component/Listgrp';
import { ExpenseProvider } from './Context/ExpenseContext';

const App = () => {  
  return (
    <ExpenseProvider>
      <Navbar />
      <Mainsection  />
      <Cardsection  />
      <Listgrp  />
    </ExpenseProvider>
  )
}

export default App;
