import React, {  } from 'react';
import '../styles/TradesPage.css';
import euro from '../components/euro.png';
import usa from '../components/usa.png';
import uk from '../components/uk.png';


const TradesPage = (props) => {
    return(
        <div id='trades'>
            <h1>Trades</h1><br />
            
            <div className="table_container">
                <table class="table">
                    <tr class="table_head">
                        <th className="table_head_col">Instrument</th>
                        <th className="table_head_col">Timestamp</th>
                        <th className="table_head_col">Result</th>
                        <th className="table_head_col">Direction</th>
                        <th className="table_head_col">Return ($)</th>
                        <th className="table_head_col">Return (%)</th>
                        <th className="table_head_col">R2R</th>
                    </tr>
                    <tr className='table_row'>
                        <td className='table_data'>
                            <div className="instrument">
                                <img src={euro} alt="" className="instrument_logo" />
                                <div className="instrument_name">EURUSD</div>
                            </div>
                        </td>
                        <td className='table_data'>
                            <div className="timestamp">
                                <div className="timestamp_date">Monday, 01-04-2023,</div>
                                <div className="timestamp_time">08:35 - 09:05</div>
                            </div>
                        </td>
                        <td className='table_data'>
                            <div style={{background: "#8fd577"}} className="label">
                                PROFIT
                            </div>
                        </td>
                        <td className='table_data'>
                            SHORT
                        </td>
                        <td className='table_data'>
                            +$800
                        </td>
                        <td className='table_data'>
                            +8%
                        </td>
                        <td className='table_data'>
                            +4R
                        </td>
                    </tr>
                    <tr className='table_row'>
                        <td className='table_data'>
                            <div className="instrument">
                                <img src={uk} alt="" className="instrument_logo" />
                                <div className="instrument_name">GBPUSD</div>
                            </div>
                        </td>
                        <td className='table_data'>
                            <div className="timestamp">
                                <div className="timestamp_date">Monday, 01-04-2023,</div>
                                <div className="timestamp_time">08:35 - 09:05</div>
                            </div>
                        </td>
                        <td className='table_data'>
                            <div style={{background: "#f48383"}} className="label">
                                LOSS
                            </div>
                        </td>
                        <td className='table_data'>
                            SHORT
                        </td>
                        <td className='table_data'>
                            -$200
                        </td>
                        <td className='table_data'>
                            -2%
                        </td>
                        <td className='table_data'>
                            -1R
                        </td>
                    </tr>
                    <tr className='table_row'>
                        <td className='table_data'>
                            <div className="instrument">
                                <img src={usa} alt="" className="instrument_logo" />
                                <div className="instrument_name">US30</div>
                            </div>
                        </td>
                        <td className='table_data'>
                            <div className="timestamp">
                                <div className="timestamp_date">Monday, 01-04-2023,</div>
                                <div className="timestamp_time">08:35 - 09:05</div>
                            </div>
                        </td>
                        <td className='table_data'>
                            <div style={{background: "#8da8e0"}} className="label">
                                BREAKEVEN
                            </div>
                        </td>
                        <td className='table_data'>
                            LONG
                        </td>
                        <td className='table_data'>
                            $0
                        </td>
                        <td className='table_data'>
                            0%
                        </td>
                        <td className='table_data'>
                            0R
                        </td>
                    </tr>
                </table>

                <div className="table_controls">
                    <div className="control_btn">Previous</div>
                    <div className="control_btn">Next</div>
                </div>
            </div>
        </div>
    );
}


export default TradesPage;