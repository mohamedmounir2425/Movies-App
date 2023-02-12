import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ImgCard from "./card";

const apiKey = "364d5c60ab33326723502b1a258dcb4a";
const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=";
const path = "https://image.tmdb.org/t/p/original";

const apiUrl = url + apiKey;

export default function Movies({ navigation }) {
	const [movies, setMovies] = useState([]);



	async function getData(setMovies) {
		let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=364d5c60ab33326723502b1a258dcb4a")
		// console.log(res)
		setMovies(data.results)
	
	}
    
	getData(setMovies)



	// function getMovies(url) {
	// 	fetch(url)
	// 	.then((res) => {
	// 		return res.json();
	// 	})
	// 	.then((data) => {
	// 		setMovies(data.results);
	// 		console.log(data.results)
	// 	});
    //     // console.log(navigation)
	// }
	// getMovies(apiUrl);
	return (
		<View style={styles.container}>
			<ScrollView>
				{movies.map((movie, i) => {
                    return (
                        <TouchableOpacity  onPress={()=>{navigation.navigate(`moviedetails`,{id:movie.id})}}>
						<ImgCard
							key={movie.id}
							mvName={movie.title}
							imgLink={path + movie.poster_path}
                            />
                            </TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginTop:60,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
