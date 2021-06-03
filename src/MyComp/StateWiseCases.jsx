import React from 'react'

export default function StateWiseCases({stateWiseData}) {


    return (
        <div>
            <table className="table mx-3 my-3">
                <thead className = 'text-white'>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>LastUpdated</th>
                    </tr>
                </thead>
                <tbody >
                    {stateWiseData.map((elm, idx) => {
                    
                        return(
                        <tr key={idx}>
                            <td className ='text-primary'>{elm.state}</td>
                            <td className ='text-secondary'>{elm.confirmed}</td>
                            <td className ='text-success'>{elm.recovered}</td>
                            <td className ='text-danger'>{elm.deaths}</td>
                            <td className ='text-warning'>{elm.active}</td>
                            <td className ='text-info'>{elm.lastupdatedtime}</td>
                        </tr> )
                    })}
                </tbody>

               

            </table>
        </div>
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