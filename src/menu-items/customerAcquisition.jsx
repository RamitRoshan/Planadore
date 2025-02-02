// assets
import {
  DollarOutlined,
  CheckOutlined,
  FileTextOutlined,
  LineChartOutlined
} from '@ant-design/icons';

// icons
const icons = {
  DollarOutlined,
  CheckOutlined,
  FileTextOutlined,
  LineChartOutlined
};

// ==============================|| MENU ITEMS - CUSTOMER ACQUISITION ||============================== //

const customerAcquisition = {
  id: 'customer-acquisition',
  title: 'Customer Acquisition',
  type: 'group',
  children: [
    {
      id: 'update-lead-payment',
      title: 'Update Lead Payment',
      type: 'item',
      url: '/update-payment',
      icon: icons.DollarOutlined
    },
    {
      id: 'lead-status-update',
      title: 'Finalize Lead Status',
      type: 'item',
      url: '/update-status',
      icon: icons.CheckOutlined
    },
    {
      id: 'lead-reports',
      title: 'Lead Reports',
      type: 'item',
      url: '/lead-reports',
      icon: icons.FileTextOutlined
    },
    {
      id: 'lead-performance',
      title: 'Lead Performance',
      type: 'item',
      url: '/lead-performance',
      icon: icons.LineChartOutlined
    }
  ]
};

export default customerAcquisition;
