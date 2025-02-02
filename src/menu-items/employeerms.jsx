import { UserAddOutlined, UnorderedListOutlined, CalendarOutlined, CheckOutlined, FileTextOutlined, DollarOutlined, WarningOutlined} from '@ant-design/icons';

// icons
const icons = {
  UserAddOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
  CheckOutlined,
  FileTextOutlined,
  DollarOutlined,
  WarningOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const employeerms = {
  id: 'employee-rms',
  title: 'Team Workspace',
  type: 'group',
  children: [
    {
      id: 'add-employee',
      title: 'Add Employee',
      type: 'item',
      url: '/EmployeeRegistrationForm',
      icon: icons.UserAddOutlined,
      target: false
    },
    {
      id: 'employee-list',
      title: 'Employee Directory',
      type: 'item',
      url: '/EmployeeDirectory',
      icon: icons.UnorderedListOutlined,
      target: false
    },
    {
      id: 'attendance',
      title: 'Attendance Tracker',
      type: 'item',
      url: '/register',
      icon: icons.CalendarOutlined,
      target: true
    },
    {
      id: 'approved-leave',
      title: 'Leave Approvals',
      type: 'item',
      url: '/register',
      icon: icons.CheckOutlined,
      target: true
    },
    {
      id: 'reports',
      title: 'Performance Reports',
      type: 'item',
      url: '/register',
      icon: icons.FileTextOutlined,
      target: true
    },
    {
      id: 'generate-salary-slip',
      title: 'Salary Generator',
      type: 'item',
      url: '/register',
      icon: icons.DollarOutlined,
      target: true
    },
    {
      id: 'employee-complaints',
      title: 'Employee Complaints',
      type: 'item',
      url: '/complaints',
      icon: icons.WarningOutlined,
      target: true
    }
  ]
};

export default employeerms;
