import React from 'react'
import { useEffect, useState } from 'react'


export default function HomeSearch() {


    const [adult,setAdult] = useState(0)

    const [children,setChildren] = useState(0)

    const [rooms,setRooms] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('yes')
    }

    const toggleDropdown = (event) => {

        document.querySelector('.tourist-dropdown').classList.add('active')
        event.stopPropagation()
    }

    const removeDropdown = (event) => {

        document.body.addEventListener('click',(event) => {

            
            
                const dropdown = document.querySelector('.tourist-dropdown')
                dropdown.classList.remove('active')
            
        })
    }

    

    useEffect(() => {
        handleDatePickers()
        
        removeDropdown()

        
    },[])
  return (
    
    // <!-- serch-area-start -->
        <div className="wpo-select-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-select-wrap">
                            <div className="wpo-select-area">
                                <form onSubmit={handleSubmit} className="clearfix">
                                    <div className="select-sub">
                                        {/* <!-- Datepicker as text field --> */}
                                        <div className="input-group date">
                                            <input autocomplete="off" type="text" id="datepicker" placeholder="Check in" />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        {/* <!-- Datepicker as text field --> */}
                                        <div className="input-group date">
                                            <input autocomplete="off" type="text" id="datepicker2" placeholder="Check Out" />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <div className="form-group tourist-group" onClick={toggleDropdown}>
                                            <div className="tourist-group-wrap">
                                                <div className="tourist-inner">
                                                    <i className="fi flaticon-user"></i>
                                                    <ul>
                                                        <li>
                                                            <input type="text" id="adults" value={adult} />Adults
                                                        </li>
                                                        <li>
                                                            <input type="text" id="children" value={children} />
                                                            Children
                                                        </li>
                                                        <li>
                                                            <input type="text" id="rooms" value={rooms} /> Room
                                                        </li>
                                                    </ul>
                                                    <i className="ti-angle-down"></i>
                                                </div>
                                                <div className="tt tourist-dropdown">
                                                    <div className="tourist-item">
                                                        <span>Adults</span>
                                                        <div className="tourist-item-group">
                                                            <button className="tt" onClick={() => adult !== 0 ? setAdult(adult - 1) : ''} type="button" id="adults_dec">-</button>
                                                            <input className="tt" disabled id="adults_val" value={adult} type="text" />
                                                            <button className="tt" onClick={() => setAdult(adult + 1)} type="button" id="adults_inc">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="tt tourist-item">
                                                        <span>Children</span>
                                                        <div className="tt tourist-item-group">
                                                            <button className="tt" onClick={() => children !== 0 ? setChildren(children - 1) : ''} type="button" id="children_dec">-</button>
                                                            <input className="tt" disabled id="children_val" value={children} type="text" />
                                                            <button className="tt" onClick={() => setChildren(children + 1)} type="button" id="children_inc">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="tt tourist-item">
                                                        <span>Rooms</span>
                                                        <div className="tt tourist-item-group">
                                                            <button className="tt" onClick={() => rooms !== 0 ? setRooms(rooms - 1) : ''} type="button" id="rooms_dec">-</button>
                                                            <input className="tt" disabled id="rooms_val" value={rooms} type="text" />
                                                            <button className="tt" onClick={() => setRooms(rooms + 1)} type="button" id="rooms_inc">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <button className="theme-btn" type="submit">Check Availability</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- serch-area-end --> 

  )
}
