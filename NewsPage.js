import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Platform,ScrollView,FlatList,Image} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class NewsPage extends React.Component {
  static navigationOptions={
  header: null, 
  }
  state={
     dt:[]
    
  }
 
  componentDidMount(){
    const {navigation}=this.props;
    const categori=navigation.getParam("categoriKey","")
    
    const url="https://newsapi.org/v2/top-headlines?country=tr&category="+categori+"&apiKey=ffdfdec29dac45618117cfba1f9f41e3"
  
    console.log(url)
  axios.get(url).then(res=>{//Res apiden linkteki bilgileri alıyoruz
    this.setState({ dt: res.data.articles})
    })
  }

  render() {
      
    return (
     
      <View style={styles.container}>
      <ScrollView>
      <View style={{padding:10}}>
     <FlatList
       data={this.state.dt}
        contentContainerStyle={{flex:1,marginTop:4}}
        keyExtractor={item=>item.author} 
        renderItem={({item})=>(
         <TouchableOpacity onPress={()=>this.props.navigation.navigate("detail",{newsKey:item})}> 
         {/**Üstüne basılan ürünün bilgilerini key'e atıyor ve detail sayfasına gönderiyoruz */}
          <View style={styles.list}> 
            {/**flexDirection Ana view içindeki View'leri yan yana koyar. İki tane View'imiz var */}
          <View>
         <Image style={styles.image} source={{uri:item.urlToImage}}/>
         <Text style={styles.title}>{item.title}</Text>
         </View>
         </View>
        </TouchableOpacity>
        )}
        />
        
        
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  list:{
    flexDirection:'row',
    //borderWidth:2,
    //borderColor:'#ff7900',
    borderRadius:6,
    backgroundColor:'#ffffff',
    marginBottom:14,
    
    },
  title:
  {
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    color:'#000000',
    
    },
    image:{
      width:'100%',
      height:100,
      
     
      }
  
 
});