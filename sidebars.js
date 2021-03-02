module.exports = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'APIIntroduction'
    },
    {
      type: 'doc',
      id: 'Authorization'
    },
    {
      type: 'doc',
      id: 'GettingStarted'
    },
    {
      type: 'category',
      label: 'Shipment',
      items: ['Shipment/Shipment', 'Shipment/ShipmentItem'],
    },
    {
      type: 'category',
      label: 'Order',
      items: ['Order/Order', 'Order/OrderItem'],
    },
    {
      type: 'category',
      label: 'Product',
      items: ['Product/Product', 'Product/ProductVariant'],
    },
    {
      type: 'doc',
      id: 'Fields'
    },
  ],
};
