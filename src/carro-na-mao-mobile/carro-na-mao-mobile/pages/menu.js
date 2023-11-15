
import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import perfil from '../pages/paginas do usuario/perfil'
import Avaliacao from '../pages/avaliacoes/avaliacao';
import { NavigationContainer } from '@react-navigation/native';
import Vistorias from "../pages/vistorias/cadastrarVistoria";
import Perfil from "../pages/paginas do usuario/perfil";

const Menu =()=>{
const [index, setIndex] = React.useState(0);
const [routes] = React.useState([
  { key: 'av', title: 'Avaliacao', focusedIcon: 'star-outline' },
  { key: 'T', title: 'Perfil', focusedIcon: 'account' },
 
]);

const renderScene = BottomNavigation.SceneMap({
  av:Avaliacao,
  T:perfil
});

return (
  <SafeAreaProvider>
  <BottomNavigation
    color = '#8F9098'
    navigationState={{ index, routes }}
    activeColor='#8F9098'
    inactiveColor='#fff'
    onIndexChange={setIndex}
     renderScene={renderScene}
     barStyle={{ backgroundColor: '#1F2024' }}
/>
  </SafeAreaProvider>
);
};

export default Menu