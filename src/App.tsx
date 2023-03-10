import './App.css';
import Button from './components/Button';
import { Box, Stack } from '@chakra-ui/react'
import ButtonIcon from './components/ButtonIcon';
import { faAdd, faBook, faGreaterThan, faHeart, faHomeAlt, faLessThan, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './components/MenuItem';


function App() {
  return (
    <Stack direction={'row'} spacing={4} bg='black' py={3}>
      <Button textColor='gray' color='black' text='Registrate' />
      <Button textColor='black' color='white' text='Iniciar sesión' />
      <Button textColor='white' color='black' text="Español de Latinoamerica" iconRequired />
      <ButtonIcon arialabel='Go Back' ico={faLessThan} />
      <ButtonIcon arialabel='Go Next' ico={faGreaterThan} />
      <Stack spacing={'6'}>
        <Box>
          <MenuItem text='Inicio' ico={faHomeAlt} />
          <MenuItem text='Buscar' ico={faSearch} />
          <MenuItem text='Tu biblioteca' ico={faBook} />
        </Box>
        <Box>
          <MenuItem text='Crear Playlist' ico={faAdd} />
          <MenuItem text='Tus me gusta' ico={faHeart} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
