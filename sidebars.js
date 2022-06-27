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
      type: 'doc',
      id: 'StandardEntityFields'
    },
    {
      type: 'doc',
      id: 'Errors'
    },
    {
      type: 'doc',
      id: 'Workspace'
    },
    {
      type: 'category',
      label: 'Shipment',
      items: [
          'shipment/Shipment',
          'shipment/ShipmentItem',
          'shipment/TPLinks',
          'shipment/TrackingCheckpoint',
          'shipment/TrackingStatuses',
          'shipment/ShipmentStatus'
      ],
    },
    {
      type: 'category',
      label: 'Order',
      items: [
          'order/Order',
          'order/OrderItem',
          'order/OrderStatus'
      ],
    },
    {
      type: 'category',
      label: 'Product',
      items: ['product/Product', 'product/ProductVariant'],
    },
    {
      type: 'category',
      label: 'Workflow',
      items: ['workflow/Workflow', 'workflow/Webhooks'],
    },
    {
      type: 'doc',
      id: 'Fields'
    },
    {
      type: 'doc',
      id: 'Carriers'
    },
    {
      type: 'category',
      label: 'TrackMage SDKs',
      items: ['trackmage-sdks/PhpSdk']
    },
    {
      type: 'category',
      label: 'Widgets',
      link: {
        type: 'generated-index',
        title: 'Widgets Guides',
        description: 'Learn about the TrackMage Widgets',
        slug: '/category/widgets-guides',
      },
      items: [
        'widgets/TrackingPageElements',
        'widgets/WordpressFull',
        'widgets/WidgetsTroubleshooting',
        'widgets/EmailValidationScript'
      ]
    }
  ],
};
