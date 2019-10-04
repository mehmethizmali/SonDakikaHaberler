import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Platform,ScrollView,Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Categories extends React.Component {

  state={
    categori:""
  }

  static navigationOptions={
    title:"Son Dakika Haberler"
  }

  fncBussines=()=>{
    const categori="business";
    this.props.navigation.navigate('newsPage',{categoriKey:categori})
  }

   fncEntertaiment=()=>{
    const categori="entertainment";
    this.props.navigation.navigate('newsPage',{categoriKey:categori})
  }

   fncHealt=()=>{
    const categori="health";
    this.props.navigation.navigate('newsPage',{categoriKey:categori})
  }

   fncScience=()=>{
    const categori="science";
    this.props.navigation.navigate('newsPage',{categoriKey:categori})
  }

    fncSports=()=>{
    const categori="sports";
    this.props.navigation.navigate('newsPage',{categoriKey:categori})
  }

  fncTechnology=()=>{
    const categori="technology";
    this.props.navigation.navigate('newsPage',{categoriKey:categori})
  }

  render() {
    return (
      
      <View style={styles.container}>
   
      <ScrollView>
  
          <Text style={ styles.txt }>Kategoriler</Text>
        
         <TouchableOpacity>
        {/** && işaretinden sonraki şartlar çalıştırır */}
        {Platform.OS==='ios' || Platform.OS==='android' &&
          <Text style={ [styles.txt,styles.btn] }  onPress={this.fncBussines}>İş</Text>
        }
        </TouchableOpacity>
         <TouchableOpacity>
        {/** && işaretinden sonraki şartlar çalıştırır */}
        {Platform.OS==='ios' || Platform.OS==='android' &&
          <Text style={ [styles.txt,styles.btn] } onPress={this.fncEntertaiment}>Eğlence</Text>
        }
        </TouchableOpacity>
         <TouchableOpacity>
        {/** && işaretinden sonraki şartlar çalıştırır */}
        {Platform.OS==='ios' || Platform.OS==='android' &&
          <Text style={ [styles.txt,styles.btn] } onPress={this.fncHealt}>Sağlık</Text>
        }
        </TouchableOpacity>
         <TouchableOpacity>
        {/** && işaretinden sonraki şartlar çalıştırır */}
        {Platform.OS==='ios' || Platform.OS==='android' &&
          <Text style={ [styles.txt,styles.btn] } onPress={this.fncScience}>Bilim</Text>
        }
        </TouchableOpacity>
         <TouchableOpacity>
        {/** && işaretinden sonraki şartlar çalıştırır */}
        {Platform.OS==='ios' || Platform.OS==='android' &&
          <Text style={ [styles.txt,styles.btn] } onPress={this.fncSports}>Spor</Text>
        }
        </TouchableOpacity>
         <TouchableOpacity>
        {/** && işaretinden sonraki şartlar çalıştırır */}
        {Platform.OS==='ios' || Platform.OS==='android' &&
          <Text style={ [styles.txt,styles.btn] } onPress={this.fncTechnology}>Teknoloji</Text>
        }
        </TouchableOpacity>
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
    backgroundColor: '#ffffff',
    padding: 10,
  },
  imageStyles:{
    height:150,
    width:150,
    marginRight:10,
    marginLeft:10,
    marginTop:6,
    marginBottom:2,
    borderWidth:2,
    borderColor:'#ff7900',
    borderRadius:10
    },
  txtSyles:{
    fontSize:16,
    color:'#ff7900',
    textAlign:'center'
    },
  txt:{
   height:50,
   width:'100%',
   borderColor:'#ff7900',
   borderWidth:2,
   padding:6,
   fontSize:27,
   borderRadius:2,
   textAlign:'center',
   color:'#000000',
   backgroundColor:'#ffffff'
  
 },
 btn:{
  textAlign:'center',
  marginTop:10, 
  backgroundColor:'#ff7900',
  borderColor: '#ffffff',
  fontSize:22,
  color:'#ffffff',
 },
    
});