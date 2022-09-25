import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image, Space, Typography } from 'antd'
import "./product.css"
import { ProductCall } from '../../../server/service/product'
const Products = () => {
  const [data,setData] = useState<Array<any>>([{name:"ravi",price: 50,color:"blue",category:"beg"}])
  let amount = data.length>0 && data?.map((item:any)=>(item?.price)).reduce((pre:any,nxt:any)=>pre + nxt)
  console.log(amount)

  useEffect(()=>{
    ProductCall().then((r)=>{

      setData([...r.data])
    })
  },[])

  return (
    <div>
        
        <div className='cart-page-container'>
         <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Color</th>
          <th>Categoty</th>
        </tr>
        {data?.map((val:any, key:any) => {
          console.log(val)
          return (
            <tr key={key} className="table-border">
              <td><Image src={val.photo} alt="image" /></td>
              <td>
                <Space style={{flexDirection: "column"}}>
                

                <div>

                <Typography.Title className='title-warp'>{val.name}</Typography.Title>
                </div>
                
                <div>
                <Typography.Text>{val.category}</Typography.Text>
                </div>
                </Space>
                </td>

              <td>{val.price}</td>
              <td>{val.color}</td>
              <td>{val.category}</td>
            </tr>
          )
        })}
        <tfoot>
    <tr>
      <td></td>
      <td>Sum</td>
      <td>${amount}</td>
    </tr>
  </tfoot>
      </table>
     
      </div>
    </div>
  )
}

export default Products