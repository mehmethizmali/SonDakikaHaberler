import * as React from 'react';
import { Text, View, StyleSheet,Image,ScrollView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Detail extends React.Component {
static navigationOptions={
  header:null
}

  render() {
      
const item=this.props.navigation.getParam("newsKey",null); //Üstüne basılan tüm haberleri buraya taşıyoruz
    return (
     
      <View style={styles.container}>
      <ScrollView>
       <Image style={styles.image} source={{uri:item.urlToImage}}/>
       <Text style={styles.text}>{item.description}</Text>
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
    padding: 10,
  },
  image:{
    width:'100%',
    height:350,
    borderRadius:10,
    marginTop:20,
    marginBottom:6
    },
    text:{
      fontSize:16,
      fontWeight:'normal',
      padding:6
      }

});