import './App.css';
import Button from './components/Button';
import { Stack } from '@chakra-ui/react'
import ButtonIcon from './components/ButtonIcon';


function App() {
  return (
    <Stack direction={'row'} spacing={4} bg='black' py={3}>
      <Button textColor='gray' color='black' text='Registrate'/>
      <Button textColor='black' color='white' text='Iniciar sesión'/>
      <Button textColor='white' color='black' text="Español de Latinoamerica" iconRequired/>
      <ButtonIcon />
    </Stack>
  );
}

export default App;
