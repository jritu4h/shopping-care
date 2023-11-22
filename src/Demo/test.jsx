import React from 'react';
import {
  Badge,
  Button,
  Card,
} from "keep-react";
const test = () => {
  return (
    <Tabs aria-label="Keep Tabs" style="default">
      <Tabs.Item
        title="Fashion"
        notification={20}
        notificationColor="info">
        <div className=' mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
          {
            Fashion.map(item => <All item={item} key={item._id} loading={loading}></All>)
          }
        </div>
      </Tabs.Item>
      <Tabs.Item
        title="Electronics"
        notification={12}
        notificationColor="info">
        <div className=' mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
          {
            Electronics.map(item => <All item={item} key={item._id} loading={loading}></All>)
          }
        </div>
      </Tabs.Item>
      <Tabs.Item
        title="It Products"
        notification={99}
        notificationColor="info"
      >
        <div className=' mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
          {
            it_products.map(item => <All item={item} key={item._id} loading={loading}></All>)
          }
        </div>
      </Tabs.Item>
      <Tabs.Item
        title="Cooking"
        notification="new"
        notificationColor="info"
      >
        <div className=' mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
          {
            cooking.map(item => <All item={item} key={item._id} loading={loading}></All>)
          }
        </div>
      </Tabs.Item>
      <Tabs.Item
        title="Almond"
        notification="new"
        notificationColor="info"
      >
        <div className=' mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
          {
            Almond.map(item => <All item={item} key={item._id} loading={loading}></All>)
          }
        </div>
      </Tabs.Item>
      <Tabs.Item
        title="Ayurvedic"
        notification="new"
        notificationColor="info"
      >
        <div className=' mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
          {
            Ayurvedic.map(item => <All item={item} key={item._id} loading={loading}></All>)
          }
        </div>
      </Tabs.Item>
    </Tabs>

  );
};

export default test;