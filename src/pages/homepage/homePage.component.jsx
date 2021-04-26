import React from 'react';

import ReportPage from '../report/reportPage.component';
import DataFilter from '../../components/data-filter/datafilter.component';


import './homePage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='row'>
      <div className='column left'>
        <div className='card'><DataFilter /></div>      
      </div>
      <div className='column right'>
      <div className='card'><ReportPage /></div> 
      </div>
    </div>    
  </div>
);

export default HomePage;