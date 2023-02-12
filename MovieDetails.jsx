import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native"
import ImgCard from "./card";


const path = "https://image.tmdb.org/t/p/original";
export default MovieDetails = ({ route }) => {
	
	
	const { id } = route.params;
// 	 const [moviedetails, setMoviedetails] = useState({})
	 
// 	 async function getData(id,setMoviedetails) {
// 		 let res = await axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=364d5c60ab33326723502b1a258dcb4a&language=en-US') 
// 		 console.log(res)
// 		 setMoviedetails(res)
	 
// 	 }
// 	useEffect(() => {
// 		getData(id,setMoviedetails)
	   
// 	  }, [])

	



	
// console.log('mano')

	// const [movies, setMovies] = useState([]);
	
	
	
	// async function getData(id) {
	// 	let res= await axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=364d5c60ab33326723502b1a258dcb4a&language=en-US')
	// 	console.log(res)
	// 	// setMovies(data.results)
		
	// }
	// getData(id)
	// useEffect(() => { 

	// },[])
	
	const [movies, setMovies] = useState({});

	getMovies(id);
	function getMovies(id) {
		fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=364d5c60ab33326723502b1a258dcb4a&language=en-US')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMovies(data);
				// console.log(data)
            });
        // console.log(navigation)
	}

	// console.log(movies)






    return (
        <View style={styles.container}>
          	{/* <Image
							
						source={{uri:path+movies.poster_path}}
							// imgLink={path+movies.poster_path}
                            /> */}
			<Image source={{ uri: path + movies.poster_path }} style={{ width: 200, height: 200, borderRadius:20 ,margin:10,elevation: 40}} />  

			<View style={{ color:'red'}}>
				<Text style={{ margin: 10, color: '#A93226' , fontWeight:'bold' ,alignItems:'center'}}> {movies.original_title}</Text>
				<Text style={{ margin: 10, color: '#424949' }}><Text style={{ fontWeight: "900", color:'black'  }}>Over View : </Text>  {movies.overview}</Text>
			<Text style={{ margin: 10, color: '#424949' }}><Text style={{ fontWeight: "900", color:'black'  }}>release date : </Text>  {movies.release_date}</Text>
			<Text style={{ margin: 10, color: '#424949' }}><Text style={{ fontWeight: "900", color:'black'  }}>tagline : </Text>  {movies.tagline}</Text>
			<Text style={{ margin: 10, color: '#424949' }}><Text style={{ fontWeight: "900", color:'black'  }}>vote average : </Text>  {movies.vote_average}</Text>
			
			</View>

        </View>
    )
}

const styles = StyleSheet.create({
	container: {
	//   marginTop:60,
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
		justifyContent: 'flex-start',
		color:'red'
	
	},
  });
  
