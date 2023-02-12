import { Button, Text, View } from "react-native"



export const HomePage = (props) => {
    return (
        <View>
            
            <Text>Hello in home Page</Text>
            <Button title='goto Movies' onPress={()=>{props.navigation.navigate('movies')}}/>
            <Button title='gotoPage1' onPress={()=>{props.navigation.navigate('Page1')}}/>
            <Button title='goto Camera' onPress={()=>{props.navigation.navigate('myCamera')}}/>
            <Button title='goto imagePicker' onPress={()=>{props.navigation.navigate('imagePicker')}}/>
            <Button title='Screen capture' onPress={()=>{props.navigation.navigate('screenCapture')}}/>
            <Button title='Calender' onPress={()=>{props.navigation.navigate('calender')}}/>
            <Button title='Battery' onPress={()=>{props.navigation.navigate('battery')}}/>
            <Button title='Checkbox' onPress={()=>{props.navigation.navigate('checkbox')}}/>
            <Button title='Contact' onPress={()=>{props.navigation.navigate('contact')}}/>
            <Button title='Location' onPress={()=>{props.navigation.navigate('location')}}/>
            <Button title='Task Manager' onPress={()=>{props.navigation.navigate('taskmanager')}}/>
       </View>
   )
}