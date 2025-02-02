// assets
import {
    FileTextOutlined,
    FileProtectOutlined,
    DollarOutlined,
    PrinterOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    FileTextOutlined,
    FileProtectOutlined,
    DollarOutlined,
    PrinterOutlined
  };
  
  // ==============================|| MENU ITEMS - DOCUMENTS ||============================== //
  
  const documentSection = {
    id: 'document-section',
    title: 'Document Section',
    type: 'group',
    children: [
      {
        id: 'generate-offer-letter',
        title: 'Generate Offer Letter',
        type: 'item',
        url: '/generate-offer',
        icon: icons.FileTextOutlined
      },
      {
        id: 'generate-revealing-letter',
        title: 'Generate Revealing Letter',
        type: 'item',
        url: '/generate-revealing',
        icon: icons.FileProtectOutlined
      },
      {
        id: 'generate-salary-slip',
        title: 'Generate Salary Slip',
        type: 'item',
        url: '/generate-salary',
        icon: icons.DollarOutlined
      }
    ]
  };
  
export default documentSection;
  