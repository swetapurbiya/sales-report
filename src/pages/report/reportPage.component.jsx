import React from 'react';

import SALES_DATA from './sales.data';
import DataPreview from '../../components/data-preview/datapreview.component';


class ReportPage extends React.Component {
    constructor(props) {
        super(props);

        this.state= { 
            data: SALES_DATA 
        }
    }

    render() {
        const {data} = this.state;
        return (
            <DataPreview data={data} />   
        )
           
    }
}
export default ReportPage;