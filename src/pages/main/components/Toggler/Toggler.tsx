import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { selectedAligment, updateAligment } from '../../../../store/slices/toggleBtnSlice';
import { useAppSelector } from '../../../../store/hooks/useAppSelector';

export default function Toggler() {
  const [alignment, setAlignment] = React.useState('Bars');

  const dispatch = useDispatch()
  
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    dispatch(updateAligment(newAlignment))    
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Brews">Brews</ToggleButton>
      <ToggleButton value="Bars">Bars</ToggleButton>
      <ToggleButton value="Beers">Beers</ToggleButton>
    </ToggleButtonGroup>
  );
}