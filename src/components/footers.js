import React from 'react'


export default function Footers() {
  return (
    <>
    <div>

    <div className="container-fluid email_update p-5 mt-5">
        <div className="mailItem d-flex justify-content-center">
        <i className="fa-regular fa-envelope emailicon mx-5"></i>

            <div className="content">
              <h3>Get Updates & More</h3>
              <text>Thoughtful thoughts to your inbox</text>
            </div>

            <div className="emails mx-5">
              <form className="mx-5">
              <input type="email" placeholder="Your Email" className="p-3 textarea border-0"/>
              <button type="submit" className="bg-primary text-white border-0 p-3">SUBSCRIBE</button>
              </form>
            </div>
        </div>
    </div>
        
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <p className="py-3 border-bottom border-2 w-50">NEED HELP?</p>

            <div className="call mb-5">
            <text className="px-2">Call Us</text>
            <h4  className="px-2">+91 9163720198</h4>
            </div>

            <div className="call">
            <text className="px-2">Email for Us</text>
            <h4  className="px-2">support@attravels.in</h4>
            </div>
        </div>

        <div className="col-md-3">
        <p className="py-3 border-bottom border-2 w-50">ATRASKI TRAVELS</p>

        
        </div>
        
        <div className="col-md-3">
          <p className="py-3 border-bottom border-2 w-50">TERMS & POLICY</p>
          <h6>Terms and Conditions new</h6>
          <h6 className="mt-4">Privacy Policy New</h6>
          <h6 className="mt-4">Cancellation and Refunds New</h6>
          <h6 className="mt-4">FAQs new</h6>
        </div>
      
        <div className="col-md-3">
          <p className="py-3 border-bottom border-2 w-50">FOLLOW US</p>
          <div className="call">
            <text className="px-2">Follow Us</text>
            <br />
            <i class="fa-brands fa-facebook px-3"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      
      </div>
    </div>
    </div>

    
    </>
  )
}
