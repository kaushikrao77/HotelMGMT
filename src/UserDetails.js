import React from 'react'
import './Projindex.css'
import './mycss.css'
import {Link} from 'react-router-dom'

function UserDetails()
{
  return(
    <>

    <section className="head">
    <h1>Thank You for choosing to stay at our hotel!</h1>
    <h3>Please Enter your details.</h3>
    </section>

    <div className="parent">

    <div className="img"></div>

    <div className="details">

    <div className="name">
    <div><input type="text" placeholder="First Name"></input></div>
    <div><input type="text" placeholder="Last Name"></input></div>
    </div>
    <div className="email">
      <input placeholder="Email Address"></input>
    </div>
    <div className="rooms">
    <select>
    <option>Premium King Room</option>
    <option>Deluxe Room</option>
    <option>Double Room</option>
    <option>Luxury Room</option>
    <option>Room With View</option>
    <option>Small View</option>
    </select>
    </div>
    <label>Check-in date.</label>
    <div className="dates">
    <select>
    <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option>
    <option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option>
    <option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option>
    <option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
    </select>
    <select>
    <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option>
    <option>08</option><option>09</option><option>10</option><option>11</option><option>12</option>
    </select>
    <select>
    <option>2020</option>
    </select>
    </div>
    <label>Check-out date.</label>
    <div className="dates">
    <select>
    <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option>
    <option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option>
    <option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option>
    <option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
    </select>
    <select>
    <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option>
    <option>08</option><option>09</option><option>10</option><option>11</option><option>12</option>
    </select>
    <select>
    <option>2020</option>
    </select>
    </div>

    <Link to="/availability"><button> Check Availability! </button></Link>

    </div>
    </div>

    </>
  );
}

export default UserDetails
