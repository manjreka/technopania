import { Component } from 'react'
import './index.css'

class Index extends Component {
    render() {
        return (
            <div className='bg-container'>
                <div>
                    <img src='https://res.cloudinary.com/drbbrdppd/image/upload/v1720029701/nts7baldekb2ve5zk9lg.png' alt='invoice' />
                </div>
                <div>
                    <div>
                        <p>INVOICE AMOUNT DETAILS</p>
                        <div className='container'>
                            <p>Currency</p>
                            <p>INR</p>
                        </div>
                        <div className='container'>
                            <p>Inv Basic Amt.</p>
                            <p>15,000.00</p>
                        </div>
                        <div className='container'>
                            <p>Inv Tax Amt</p>
                            <p>1,000.00</p>
                        </div>
                        <div className='container'>
                            <p>Total Inv Amt. [inclu of tax]</p>
                            <p>16,000</p>
                        </div>
                        <div className='container'>
                            <p>Advance Paid</p>
                            <p>0.00</p>
                        </div>
                        <div className='container'>
                            <p>TCS Applicable</p>
                            <div>
                                <input type="radio" name='TCS' id='yes' value='Yes' />
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" name='TCS' id='no' value='No' />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                        <div className='container'>
                            <p>Net Payable Amt [Exclu. of TDS]</p>
                            <p>16,000.00</p>
                        </div>
                    </div>
                    <div>
                        <p>ALTERNATE PAYEE DETAILS</p>
                        <form >
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="payee 1">Alternate Payee 1</label>
                                <input type = 'text' id = 'payee 1' />
                            </div>
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="payee 2">Alternate Payee 2</label>
                                <input type = 'text' id = 'payee 2' />
                            </div>
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="city">City</label>
                                <input type = 'text' id = 'city'  />
                            </div>
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="street">Street</label>
                                <input type = 'text' id = 'street' />
                            </div>
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="country">Country</label>
                                <input type = 'text' id = 'country' />
                            </div>
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="IFSC">Bank Key/ IFSC Code</label>
                                <input type = 'text' id = 'IFSC' />
                            </div>
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="account">Bank Acc No.</label>
                                <input type = 'text' id = 'account' />
                            </div>
                            <div style={{display: 'flex', margin: '15px', alignItems: "center", minWidth: '35vw', flexGrow: 1, justifyContent: "space-around"}}>
                                <label htmlFor="ref">Reference</label>
                                <input type = 'text' id = 'ref' />
                            </div>
                            <button>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index