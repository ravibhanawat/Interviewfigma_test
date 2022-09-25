import { Avatar, Card, List,Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { HomeProductCall,  } from '../../../server/service/product'
export interface productType {
  id: number;
  name: string;
  price: number;
  color: string,
  category: string;
  brand: string;
  photo: string;
}

const Home = () => {
  const [data, setData] = useState<Array<productType>>([])
  useEffect(() => {
    HomeProductCall().then((r) => {
      setData(r.data)

    })
  }, [])
  return (

    <List
    grid={{ gutter: 16, column: 4 }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item >
          <Card title={item.name}  cover={<Image src={item.photo} alt="image" />}  >
            <List.Item.Meta avatar={<Avatar src={item.photo} />} title={item.name} description={item.price}  ></List.Item.Meta>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default Home