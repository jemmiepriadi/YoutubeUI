import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem';
import data from './data.json';

export default class App extends  React.Component {
    render(){     
        return (
            <View style={styles.container}>
              <View style={styles.Navbar}>
                <Image source={require('./images/logo.png')} style={{width:98, height:22 }} /> 
                <View style={styles.rightNav}>
                    <TouchableOpacity>
                        <Icon style ={styles.navItem} name="search" size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style ={styles.navItem} name ="account-circle" size={25}/>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={styles.body}>
                  {/* <VideoItem videoz={data.items[0]} /> */}
                  <FlatList
                  data={data.items}
                  renderItem={(videos)=><VideoItem videoz={videos.item} />}
                  // renderItem={(data)=><VideoItem videoz={data.item} />} -> sama seperti dengan yang di atas
                  keyExtractor={(itemz)=>itemz.id}
                  ItemSeparatorComponent={()=><View style={{height:0.5, backgroundColor:"#cccccc"}}/>}
                  />
              </View>
              <View style={styles.tabBar}>
                  <TouchableOpacity style={styles.tabItem}>
                    <Icon name ="home" size={25}/>
                    <Text style={styles.tabTitle}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tabItem}>
                    <Icon name ="whatshots" size={25}/>
                    <Text style={styles.tabTitle}>Trending</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tabItem}>
                    <Icon name ="subscriptions" size={25}/>
                    <Text style={styles.tabTitle}>Subscriptions</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tabItem}>
                    <Icon name ="folder" size={25}/>
                    <Text style={styles.tabTitle}>Library</Text>
                  </TouchableOpacity>
              </View>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Navbar: {
      height: 55,
      backgroundColor: 'white',
      elevation: 3,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  rightNav: {
      flexDirection: 'row',
  },
  navItem: {
      marginLeft: 25,
  },
  body: {
      flex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabItem: {
      alignItems: 'center',
      justifyContent:'center',
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  }
});