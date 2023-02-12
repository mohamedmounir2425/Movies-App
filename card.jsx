import { Avatar } from "@react-native-material/core";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ImgCard(props) {
	return (
        <View style={styles.container}>
            
            <Avatar style={{marginTop:18,marginEnd:5}} image={{uri:props.imgLink}} />
			{/* <Image source={{ height: 200, width: 200, uri: props.imgLink }} /> */}

			<Text>{props.mvName}</Text>
		</View>
	);
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent:'center'
    }
})