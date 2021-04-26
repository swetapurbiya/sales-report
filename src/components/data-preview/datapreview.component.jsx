import React from 'react';

const DataPreview = ({data}) => (
    
    <div className='data-preview'>
        <div className='Title'>Sales Report</div>
        <div className='header'>
            <table>
                <tr>
                    <th>Region</th>
                    <th>Country</th>
                    <th>Item Type</th>
                    <th>Order Date</th>
                    <th>Order ID</th>
                    {/* <th>Units Sold</th>
                    <th>Unit Price</th>
                    <th>Unit Cost</th>
                    <th>Total Revenue</th>
                    <th>Total Cost</th> */}
                    <th>Total Profit</th>
                </tr>
                <tr>
                    <td>{data.map((item) => (<div>{item.Region}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.Country}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.ItemType}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.OrderDate}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.OrderID}</div>))}</td>
                    {/* <td>{data.map((item) => (<div>{item.UnitsSold}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.UnitPrice}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.UnitCost}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.TotalRevenue}</div>))}</td>
                    <td>{data.map((item) => (<div>{item.TotalCost}</div>))}</td> */}
                    <td>{data.map((item) => (<div>{item.TotalProfit}</div>))}</td>
                </tr>

            </table>
        </div>            
    </div>
)
export default DataPreview;