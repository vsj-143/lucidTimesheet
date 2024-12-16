import React from 'react'
import ssLogo from '../ssLogo.jpg'
function Invoice() {
    return (
        <>
         <div className='invoiceContainer'>
            <div className='invoiceImageLeft'>
                <img src={ssLogo} alt='error' className='invoiceLogo'/>
                <h3>s&s constructions</h3>
            </div>
            <div className='invoiceRight'>
                <div className='contactInfo'>
                     <ul>
                        <li className='headings'>contact</li>
                        <li>info@s-sconstructions.com</li>
                        <li>231-435-9823</li>
                        <li>s&sconstructions.com</li>
                    </ul>
                </div>
                <div className='Address'>
                  <ul>
                        <li className='headings'>Address</li>
                        <li>8600 Freeport Pkwy,STE</li>
                        <li>300,Irving,TX-75063</li>
                       
                    </ul>
                </div>

            </div>

         </div>
         
         <hr/>
         <br/>

            <div className='invoiceSecond'>
                <div className='bill'>
                <div className='invoiceButton'>
                    <strong>Bill to:</strong><br/>
                    USPS<br/>
                    4956 N O'Connor Rd,<br/>
                    Suite 105, Irving, TX 75062<br/>
                     United States
                </div>
                <div className='billRight'>
                    <div className='billRightButton'>
                   <h2>Invoice</h2>
                   <button className='redButton'>Due on Aug 15,2024</button>
                   </div>
                   <br/>
                   <div className='invoiceDown'>
                        <div className='invoiceNo'>
                        <span className='headings'>Invoice No</span><br/>
                        <span>LRIN-005667</span>
                        </div>
                        <div className='date'>
                        <span className='headings'>Date</span><br/>
                        <span>18 Aug, 2024</span>
                         </div>
                         <div className='totalAmount'>
                         <span className='headings'>Total Amount</span><br/>
                         <span>$5,519.38</span>
                        </div>
                     </div>
                    </div>
                  

                </div>

            </div>
            <br/>
            < hr className='hr'/>
    <br/>
  <div class="table-container">
    <table className='invoiceTable'>
      <thead className='invoiceHead'>
        <tr>
          <th>#</th>
          <th>Contract ID</th>
          <th>Description</th>
          <th>Hours</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody className='invoiceBody'>
        <tr>
          <td>1.</td>
          <td>SS98234</td>
          <td>Additional notes</td>
          <td>35</td>
          <td>$65.00</td>
          <td>$2,275.00</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>SS98232</td>
          <td>Additional notes</td>
          <td>35</td>
          <td>$65.00</td>
          <td>$2,275.00</td>
        </tr>
      </tbody>
    </table>
  </div>

<br/>
< hr className='hr'/>
<br/>
    <div class="invoice-container">
  
     <div class="invoice-notes">
      <strong class="notes-title">NOTES:</strong>
     All accounts are to be paid within 7 days
     from receipt of invoice. To be paid by cheque or credit card or 
     direct payment online. If the account is not paid within 7 days
       , the credits details supplied as confirmation of work.
        </div>

    
       <div class="invoice-summary">
      <div class="summary-row">
        <span class="summary-label">Sub Total:</span><br/><br/>
        <span class="summary-label">Estimated Tax (12.5%):</span><br/><br/>
        <span class="summary-label">Discount:</span><br/><br/>
       <span class="summary-label grand-label">Grand Total:</span><br/><br/>
      </div>
      <div class="summary-row">
      <span class="summary-value">$4,995.00</span><br/><br/>
        <span class="summary-value">$624.38</span><br/><br/>
        <span class="summary-value">$100.00</span><br/><br/>
        <span class="summary-value grand-value">$5,519.38</span><br/>
      </div>
      
      
     
      </div>
  </div>




         

        </>
    )
}

export default Invoice
