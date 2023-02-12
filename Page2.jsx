import { Button, Text, View } from "react-native"



export default Page2 = ({navigation}) => {
    return (
        <View>
            <Text>Hello from Page 2 </Text>
            <Button title='gotoHomePage' onPress={()=>{navigation.navigate('Home')}}/>

        </View>
    )
}
