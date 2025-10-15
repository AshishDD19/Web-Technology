import React, { useState } from 'react'

function CheckedBox() {
    const [txt,setTxt] = useState('Subscribe')

  return (
    <div>
        <h1>Subscribe box</h1>
      <form>
        <input type="checkbox" onChange={(e) => setTxt(e.target.checked)} />
        {txt}
      </form>
    </div>
  )
}

export default CheckedBox
