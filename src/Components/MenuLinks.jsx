import React from 'react'

function MenuLinks(props) {
  return (

    <div>
  <div class="p-3 m-2 hover:bg-red-600 hover:text-white rounded-3xl">
    <a href={props.url}  >{props.linkname}</a>
    
   </div>
    </div>
  )
}

export default MenuLinks
