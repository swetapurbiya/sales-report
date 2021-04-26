import React from "react";
import ReactDOM from "react-dom";
import SALES_DATA from '../../pages/report/sales.data';

// const DataFilter = ({data}) => (
    
//     <div className='data-filter'>
//         <div className='Title'>Filters</div>           
//     </div>
// )

class DataFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
            data: SALES_DATA 
        }
        this.handleSubmitRegion = this.handleSubmitRegion.bind(this);
    }
   
    handleSubmitRegion(event) {
        //alert("Your selected value is: " + this.state.country);
        event.preventDefault();
      }

    handleChangeRegion = event => {
    this.setState({ region: event.target.value });
    };
}


export default DataFilter;