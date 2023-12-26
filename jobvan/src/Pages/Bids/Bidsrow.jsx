import React from 'react'

const Bidsrow = ({bids}) => {
    console.log(bids)
  return (
    <div>
       <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-36 h-12">
                <img src={bids.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bids.category}</div>
              <div className="text-sm opacity-50">{bids.Email}</div>
            </div>
          </div>
        </td>
        <td className='text-xl'>
          {bids.bidemail}  
        </td>
        <td>
            {bids.dedline}
        </td>
        <td className='text-xl'>
          {bids.price}  
        </td>
        <td className='text-xl'>
          {bids.jobtitle}  
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">Reject</button>
        </th>
      </tr>
    </div>
  )
}

export default Bidsrow
