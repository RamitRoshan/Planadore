import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

const EmployeeRegistrationForm = Loadable(lazy(() => import('pages/team-workspace/EmployeeRegistrationForm')));
const EmployeeDirectory = Loadable(lazy(() => import('pages/team-workspace/EmployeeDirectory')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'EmployeeRegistrationForm',
      element: <EmployeeRegistrationForm />
    },
    {
      path: 'EmployeeDirectory',
      element: <EmployeeDirectory />
    },
    {
      path: '*', 
      element: <Navigate to='/login' replace />
    }
  ]
};

export default MainRoutes;
