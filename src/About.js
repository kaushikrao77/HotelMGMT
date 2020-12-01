import React from 'react'
import './Projindex.css'

function About()
{
  return(
    <>

    <div className="aboutparent">
    <div className="text"><h2>Welcome to DSCE Hotel Management System</h2>
    <h3>Built in 1910 during the Belle Epoque period, this hotel is located in the center of Paris, with easy access to the city’s tourist attractions. It offers tastefully decorated rooms.</h3></div>
    <div className="row2">
    <div><ul className="features">
    <li>Complimentary Daily Breakfast.</li>
    <li>Free Wifi.</li>
    <li>Discount 20% On F&B.</li>
    <li>3 Pcs Laundry Per Day.</li>
    </ul>
    </div>
    <div>
    <img className="uerimg" src="Listing_Image_skazsy.jpg"></img></div>
    </div>


    </div>

    </>
  )
}

export default About
