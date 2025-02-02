import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={!!open}>
       <Typography
        variant="h5"
        component="div"
        
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          color: open ? 'black' : 'inherit',
          fontSize: '35px',
        }}
      >
        <span style={{ color: 'black' }}>Plan</span>
        <span style={{ color: 'blue' }}>adore</span>
      </Typography>
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
