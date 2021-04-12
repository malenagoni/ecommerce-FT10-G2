import { Layout } from "antd";
import { NavBar } from "../NavBar/NavBar";
import { FooterLayout } from "../footer/Footer";
import { FunctionComponent } from "react";
import { StepsBooking } from "../booking/StepsBooking";
import '../layout/BookingLayout.less'


const { Content } = Layout;

export const BookingLayout: FunctionComponent = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <Content className='sticky'>
          <StepsBooking></StepsBooking>
        </Content>
        <FooterLayout />
      </Layout>
    </>
  );
};