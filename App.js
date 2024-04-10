
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import ResetPass from './screens/ResetPass';
import HomePage from './screens/HomePage';
import LearnWordsPage from './screens/LearnWordsPage';
import LearnAlphabetPage from './screens/LearnAlphabetPage';
import LearnAnimalPage from './screens/LearnAnimalPage';
import GamePage from './screens/GamePage';
import SettingsPage from './screens/SettingsPage';
import WordsGameInfant from './screens/WordsGameInfant';
import WordsGameTod from './screens/WordsGameTod';
import WordsGamePre from './screens/WordsGamePre';
import AlphaGame from './screens/AlphaGame';
import AnimalGameInfant from './screens/AnimalGameInfant';
import AnimalGameTod from './screens/AnimalGameTod';
import AnimalGamePre from './screens/AnimalGamePre';
import ScreenScore from './ScreenGames/ScreenScore';
import ChooseGroupAge from './ScreenGames/ChooseGroupAge';
import ChooseGroupAnimal from './ScreenGames/ChooseGroupAnimal';
import StartAlpha from './ScreenGames/StartAlpha';
import ChatbotPage from './screens/ChatbotPage';
import TimeLimitPage from './screens/TimeLimitPage';
import Achievement from './screens/Achievement';
import MusicPage from './screens/MusicPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LogBox } from 'react-native'; 




LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function Tabs(){
  return(
    
    <Tab.Navigator
    initialRouteName="Feed"
      activeColor="black"
      inactiveColor="white"
      barStyle={{ backgroundColor: '#1773BC' }}
      
    >
      <Tab.Screen 
        name='Home1' 
        component={HomePage} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30}/>
          ),    
        }}
    />
      
      <Tab.Screen
       name='GamePage' 
       component={GamePage}
       options={{
        tabBarLabel: 'Games',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="gamepad-variant" color={color} size={30}/>
        ),    
    }}
       
       />
      
      <Tab.Screen 
      name='Settings' 
      component={SettingsPage}
      options={{
        tabBarLabel: 'Settings',
        title: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={26}/>
        ),    
    }}
      
      
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
  

        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginPage} />
        <Stack.Screen options={{ headerShown: false}} name="Register" component={RegisterPage} />
        <Stack.Screen options={{ headerShown: false}} name="Reset" component={ResetPass} />
        <Stack.Screen options={{ headerShown: false, headerTitle: 'Back',}} name="Home" component={Tabs} />
        <Stack.Screen options={{ headerTitle: 'Learn Words',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC'},headerTintColor: 'white',}} name="Words" component={LearnWordsPage} />
        <Stack.Screen options={{ headerTitle: 'Learn Alphabet',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC'},headerTintColor: 'white',}} name="Alphabet" component={LearnAlphabetPage} />
        <Stack.Screen options={{ headerTitle: 'Learn Animals',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC'},headerTintColor: 'white',}} name="Animal" component={LearnAnimalPage} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false, headerStyle: {marginTop: 28, backgroundColor: '#1773BC'}}} name="WordsGameInfant" component={WordsGameInfant} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false, headerStyle: {marginTop: 28, backgroundColor: '#1773BC'}}} name="WordsGameTod" component={WordsGameTod} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false, headerStyle: {marginTop: 28, backgroundColor: '#1773BC'}}} name="WordsGamePre" component={WordsGamePre} />

        <Stack.Screen options={{ headerShown: false, gestureEnabled: false, headerStyle: {marginTop: 28, backgroundColor: '#1773BC'}}} name="AlphaG" component={AlphaGame} />
        
        
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false, headerStyle: {marginTop: 28, backgroundColor: '#1773BC'}}} name="AnimalGameInfant" component={AnimalGameInfant} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false, headerStyle: {marginTop: 28, backgroundColor: '#1773BC'}}} name="AnimalGameTod" component={AnimalGameTod} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false, headerStyle: {marginTop: 28, backgroundColor: '#1773BC'}}} name="AnimalGamePre" component={AnimalGamePre} />

        <Stack.Screen options={{ headerTitle: 'Choose your age group to play',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC'},headerTintColor: 'white',}} name="ChooseAge" component={ChooseGroupAge} />
        <Stack.Screen options={{ headerTitle: 'Choose your age group to play',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC',},headerTintColor: 'white',}} name="ChooseAnimal" component={ChooseGroupAnimal} />
        <Stack.Screen options={{ headerTitle: 'Start Alphabet Game',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC',},headerTintColor: 'white',}} name="StartAlpha" component={StartAlpha} />
        
        <Stack.Screen options={{ headerTitle: 'Learny Chatbot',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC',},headerTintColor: 'white',}} name="ChatbotPage" component={ChatbotPage} />
        <Stack.Screen options={{ headerTitle: 'Set time usage limit to app',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC',},headerTintColor: 'white',}} name="TimeLimitPage" component={TimeLimitPage} />
        <Stack.Screen options={{ headerTitle: 'Achievements',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC',},headerTintColor: 'white',}} name="Achievement" component={Achievement} />
        <Stack.Screen options={{ headerTitle: 'Change background music',headerBackTitle: 'Back', headerStyle: {marginTop: 28, backgroundColor: '#1773BC',},headerTintColor: 'white',}} name="MusicPage" component={MusicPage} />

        <Stack.Screen options={{ headerShown: false, gestureEnabled: false,}} name="score" component={ScreenScore} />
        </Stack.Navigator>
    </NavigationContainer>

  

);
}

