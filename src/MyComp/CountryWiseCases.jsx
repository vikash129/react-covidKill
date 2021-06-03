import DateTime from './Date';
import React from 'react'
import './style.css'

export default function CountryWiseCases({ totalData }) {



  return (
    <>
     <div className='text-center'>
      <h1>India Covid Data Report</h1>
      <h3>Live</h3>

      <DateTime/>

      {/* <div className="d-flex justify-content-center"> */}
      <div className="card-deck mx-3 my-3">

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Active Cases</h3>
            <p className="card-text">{totalData.active}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Confirmed Cases</h3>
            <p className="card-text">{totalData.confirmed}</p>
          </div>
        </div>

     

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Deaths</h3>
            <p className="card-text">{totalData.deaths}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Delta Confirmed</h3>
            <p className="card-text">{totalData.deltaconfirmed}</p>
          </div>
        </div>
</div>

<div className="card-deck mx-3 my-3">

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Delta Recovered</h3>
            <p className="card-text">{totalData.deltarecovered}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Recovered</h3>
            <p className="card-text">{totalData.recovered}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">migrate dother</h3>
            <p className="card-text">{totalData.migratedother}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Laste Updated</h3>
            <p className="card-text">{totalData.lastupdatedtime}</p>
          </div>
        </div>


</div>


    </div>
    </>
  )
}


// active: "2422665"
// confirmed: "27359751"
// deaths: "315000"
// deltaconfirmed: "203091"
// deltadeaths: "3578"
// deltarecovered: "268099"
// lastupdatedtime: "26/5/2021 21:34:06"
// migratedother: "10897"
// recovered: "24611189"
// state: "Total"
// statecode: "TT"
// statenotes: ""