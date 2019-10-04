import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Platform,ScrollView,Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Home extends React.Component {

  state={
    categori:"business"
  }

  static navigationOptions={
    title:"Son Dakika Haberler"
  }

  fncBussines=()=>{
    const categori=this.state.categori

    console.log(categori)
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
    <View  style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={this.fncBussines}>
        <View onPress={(val)=>this.setState({categori:'business'})}>
        <Image style={styles.imageStyles} source={require('./assets/business.png')} />
        <Text style={styles.txtSyles} >İş</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity onPress={this.fncEntertaiment}>
        <View>
        <Image style={styles.imageStyles} source={require('./assets/entertainment.png')} />
        <Text style={styles.txtSyles}>Magazin</Text>
        </View>
        </TouchableOpacity>
    </View>

     <View  style={{flexDirection:'row'}}>
       <TouchableOpacity onPress={this.fncHealt}>
        <View>
        <Image style={styles.imageStyles} source={require('./assets/healt.png')}  />
        <Text style={styles.txtSyles} >Sağlık</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.fncScience}>
        <View>
        <Image style={styles.imageStyles} source={require('./assets/sience.jpg')} />
        <Text style={styles.txtSyles}>Bilim</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View  style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={this.fncSports}>
        <View>
        <Image style={styles.imageStyles} source={require('./assets/sports.png')} onPress={this.fncSports} />
        <Text style={styles.txtSyles}  onPress={this.fncSports}>Spor</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.fncTechnology}>
        <View>
        <Image style={styles.imageStyles} source={require('./assets/technology.jpg')} />
        <Text style={styles.txtSyles}> Teknoloji</Text>
        </View>
      </TouchableOpacity>
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
    //borderColor:'#ff7900',
    borderRadius:10
    },
  txtSyles:{
    fontSize:16,
    color:'#ff7900',
    textAlign:'center',
    fontWeight:'bold'
    }
    
});