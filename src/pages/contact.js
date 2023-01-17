import React from 'react'
const contactInfo = {
  phone: '+216 23 510 920',
  email: 'omartrabelsi21589333@gmail.com',
  address: 'Av. manzel chaker km 5.5 Sfax Tunisie'
}
function Contact() {
  return (
    <div>
      <div className='contact-item'>
        <i class="bi bi-telephone-fill"></i>
        <p>{contactInfo.phone}</p>
      </div>
      <div className='contact-item'>
        <i class="bi bi-envelope"></i>
        <p>{contactInfo.email}</p>
      </div>
      <div className='contact-item'>
        <i class="bi bi-geo-alt-fill"></i>
        <p>{contactInfo.address}</p>
      </div>
    </div>
  )
}

export default Contact