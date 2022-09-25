import { Button, Card, Col, Form, Input, Row, Typography } from 'antd'
import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { LoginCall } from '../../../server/service/login'
import { Rcontext } from '../../Layout/DefaultLayout'
interface LoginType{
  email:string,
  password:string
}
const Login = () => {
  const navigate = useNavigate()
  const { getData } = useContext(Rcontext)
  const [form] = Form.useForm()

  const onSubmit = async (value: any) => {
    
    await LoginCall(value).then((r:{data:LoginType}) => {
      console.log(r)
      getData(r.data)
      navigate('/home')
      
    })
  }
  return (
    <>
      <div >
        <Card style={{ width: "374px", marginLeft: "72rem", top: "21rem", background: "black" }}>

          <div className='center'>

            <Typography.Title style={{ color: "bisque" }} >Login</Typography.Title>
          </div>
          <div className='center'>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form<LoginType> form={form} onFinish={onSubmit}>
                  <Form.Item name={'email'}>
                    <Input type={'email'} />
                  </Form.Item>
                  <Form.Item name={'password'}>
                    <Input type={'password'} />
                  </Form.Item>
                  <Form.Item >
                    <Button htmlType='submit' >GO</Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Login