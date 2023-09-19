import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: '100%',
}));

export default Item;
