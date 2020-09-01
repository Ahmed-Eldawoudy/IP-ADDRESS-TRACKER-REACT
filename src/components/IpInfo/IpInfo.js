import React from 'react'
import './IpInfo.css'

function IpInfo(props) {
    // const location = props.region
    // console.log(location)
    return (
        <>
            <div className='Ip-info'>
                <p className='title'>IP ADDRESS</p>
                <p className='info'>{props.ip}</p>
            </div>
            <div className='Ip-info'>
                <p className='title'>LOCATION</p>
                <p className='info'>{props.location}</p>
            </div>
            <div className='Ip-info'>
                <p className='title'>TIME ZONE</p>
                <p className='info'>{props.timezone}</p>
            </div>
            <div className='Ip-info'>
                <p className='title'>ISP</p>
                <p className='info'>{props.isp}</p>
            </div>
        </>
    )
}

export default IpInfo
