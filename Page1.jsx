

import { Button, Text, View } from "react-native"



export default Page1 = ({ navigation }) => {
  
    return (
        <View>
            <Text>Hello from Page1</Text>
            <Button title='gotoPage2' onPress={()=>{navigation.navigate('Page2')}}/>

        </View>
    )
}