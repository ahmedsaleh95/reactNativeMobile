import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  Switch,
  ScrollView,
  View,
  Image,
  ImageBackground,
  AsyncStorage,
  Modal,
  Dimensions
} from "react-native";
import ScalableText from "react-native-text";
import { StackNavigator, NavigationActions } from "react-navigation";
import { getStyle } from "./styles";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button";
// import  LinearGradient  from "react-native-linear-gradient"
// import ImageSlider from 'react-native-image-slider';
// import Carousel from 'react-native-snap-carousel';
import { setLoadingAction } from "../../actions/setLoadingAction";
// import { getHomeDataAction } from "../../actions/getHomeDataAction";
// import { refreshTokenApi } from "../../utils/apis/refreshTokenApi";
// import { refreshTokenAction } from "../../actions/refreshTokenAction";

const mapStateToProps = state => ({
  store: state
});
const styles = getStyle();
class HomeScreen extends Component {
  // static navigationOptions = this.props.navigation.state.params.navigationOptions
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    return {
      header: null,
      tabBarIcon: ({ focused }) => {
        const color = focused ? "#459bf1" : "gray";
        return (
          <Image
            source={ focused ? require("../../../assets/icons/home.png") : require("../../../assets/icons/home-strock.png")}
            resizeMode="cover"
            style={{
              width: ICON_DIMENSION,
              height: ICON_DIMENSION,
              tintColor: color
            }}
          />
        );
      },

      title: "Home"
    };
  };

  constructor(props) {
    super(props);
    const image = require("../../../assets/images/unlock.jpg");

    let lock_status = []
    let unlockHash = []
    let ads = [];
    ads.push({
      id: 1,
      image_url: 'https://orig00.deviantart.net/7587/f/2014/145/9/4/all_tours_facebook_cover__3_by_giozaga-d7hhoaz.jpg',
      description: "this is a description",
      advertisement_url: 'https://placeimg.com/640/640/animals'
    })
    ads.push({
      id: 1,
      image_url: 'https://rometourtickets.com/wp-content/uploads/2016/11/RomaByNightTours-Coverimage.jpg',
      description: "this is a description",
      advertisement_url: 'https://placeimg.com/640/640/animals'
    })
    ads.push({
      id: 1,
      image_url: 'http://www.marquestravelandtours.com/wp-content/uploads/2014/07/CUsersjlivockDocuments2011WebChangesSun-CityWetucabanas-virtual-tours-cover-page.jpg',
      description: "this is a description",
      advertisement_url: 'https://placeimg.com/640/640/animals'
    })
    ads.push({
      id: 1,
      image_url: 'http://www.asiabiketours.com/files/graphics/carousel/AsiaBikeTours_Cover_Namsto.jpg',
      description: "this is a description",
      advertisement_url: 'https://placeimg.com/640/640/animals'
    })
    
    let offers = [];
    // offers.push({
    //   id: 1,
    //   percentage: "8%",
    //   place_image_url:  'https://images.fineartamerica.com/images-medium-large/the-colosseum-lit-up-at-night-with-cars-kenneth-garrett.jpg',
    //   place_name: "Abu-soliman",
    //   promocode: "1234567"
    // })
    // offers.push({
    //   id: 1,
    //   percentage: "12%",
    //   place_image_url: 'https://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/photos/tour/italy_venice_canal.jpg',
    //   place_name: "Roushdy",
    //   promocode: "1234567"
    // })
    // offers.push({
    //   id: 1,
    //   percentage: "9%",
    //   place_image_url: 'https://www.paris-tours-service.com/upload/Paris-night-tour_1.jpeg',
    //   place_name: "Miami",
    //   promocode: "1234567"
    // })
    // offers.push({
    //   id: 1,
    //   percentage: "11%",
    //   place_image_url: 'http://www.tripplanner.co.in/upload/package/10/gallery_eiffel-tower_20140729040933.jpg',
    //   place_name: "Bakos",
    //   promocode: "1234567"
    // })
    let tours = [
    ];
    tours.push({
      id: 1,
      description: "some kind of descripton  jkkll i hilh jk u k",
      price: "$99",
      cover_image_url: 'https://cdn.allwallpaper.in/wallpapers/640x960/6055/cities-city-night-town-640x960-wallpaper.jpg'
    })

    tours.push({
      id: 1,
      description: "some kind of descripton",
      price: "$99",
      cover_image_url: 'https://i.pinimg.com/originals/f0/20/33/f02033952a1a3287e40b4ea0797882e2.jpg'
    })
    tours.push({
      id: 1,
      description: "some kind of descripton",
      price: "$99",
      cover_image_url: 'https://avante.biz/wp-content/uploads/HD-Phone-Wallpapers/HD-Phone-Wallpapers-041.jpg'
    })
    tours.push({
      id: 1,
      description: "some kind of descripton",
      price: "$99",
      cover_image_url: 'https://i.pinimg.com/originals/ed/0e/dd/ed0eddf39edf6333849e990b93add28d.jpg'
    })

    this.state = {
        ads: ads,
        offers: offers,
        tours: tours,
        image: image,
        lock_status: lock_status ,
        unlockHash: unlockHash,// to preview unlock image
        showModal: false, 
        promocode: ""
    };
    
  }

  componentWillMount(){
    // alert(JSON.stringify(this.props.store))
    // this.props.dispatch(setLoadingAction(true));
    // this.props.dispatch(
    //   getHomeDataAction(this.props.store.token.token, this.handleCallbackData)
    // );
  }

  handleCallbackDataAfterRefreshToken = (token = null) => {
    if (token) {
      this.props.dispatch(refreshTokenAction(token));
    }
    this.props.dispatch(
      getHomeDataAction(this.props.store.token.token, this.handleCallbackData)
    );
  };

  handleCallbackData = response => {
    // alert(JSON.stringify(response.offers[3]));

    this.props.dispatch(setLoadingAction(false));
    if (response.msg == "Token Expired") {
      refreshTokenApi(
        this.props.store.user.uuid,
        this.props.store.token.refresh_token,
        this.handleCallbackDataAfterRefreshToken
      );
    } else if (response.msg == "Home Page") {
      
      this.setState({
        tours: response.tours,
        ads: response.advertisements,
        lock_status: response.lock_status,
        unlockHash: response.lock_status
      })
      response.offers.length > 0 ? 
        this.setState({
          offers: response.offers
        })
      : null
      // alert(JSON.stringify(response.offers))
    } else {
      alert(JSON.stringify(response));
    }
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  _renderItemAds ({item, index}) {
    return (
      <View style={styles.slide}>
        <TouchableOpacity
          onPress={() => {
            
          }}
        >
          <ImageBackground
            source={{uri : item.image_url}}
            style={{

              width: Dimensions.get('window').width * 0.75 ,
              height: Dimensions.get('window').height/6,
              // marginLeft: 15,
              marginTop: 20,
              padding: 10,
              justifyContent: "flex-end",
//////////////////////////////////////////////////////
              margin: 10,
              // padding: 10,
              // justifyContent: "flex-end",
              // width: Dimensions.get('window').width-10,
              // height: Dimensions.get('window').height/5,
            }}
            borderRadius={1}
            resizeMode="cover"
          >
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  _renderItemTours = ({item, index}) => {
    return (
      <View style={styles.slideTours}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TourDetails', {
              id: item.id
            });
          }}
        >
          <ImageBackground
            source={{uri : item.cover_image_url}}
            style={{
              // marginRight: 5,
              margin: 5,
              padding: 10,
              flex: 1,
              justifyContent: "flex-end"
            }}
            borderRadius={5}
            resizeMode="cover"
          >
            <ScalableText style={{
              color: "white",
              fontSize: 12,
              fontWeight: "bold",
              // alignSelf: "flex-end",
              backgroundColor: "transparent",
              alignContent: "space-between",
              margin: -5
              // paddingTop: 110
            }}>
              {item.description }
            </ScalableText>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <ScalableText style={{
                color: "white",
                fontSize: 12,
                // fontWeight: "bold",
                alignSelf: "flex-end",
                backgroundColor: "transparent",
                alignContent: "space-around"
              }}>
                {"From USD"}
              </ScalableText>
              <ScalableText style={{
                color: "white",
                fontSize: 22,
                fontWeight: "bold",
                // textAlign: "riht",
                alignSelf: "flex-end",
                backgroundColor: "transparent",
                // paddingLeft: 190,
                marginBottom: -5
                // paddingBottom: 30
              }}>
                {"$" + item.price}
              </ScalableText>
            </View>
            
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  renderDashboard = () => {
    // let { profile } = this.props.store;
    return (
      <View style={styles.dashboardBody}>
        <View style={{ alignContent: "space-around"}}>
          {/* <ImageSlider images={[
              'https://placeimg.com/640/640/nature',
              'https://placeimg.com/640/640/people',
              'https://placeimg.com/640/640/animals',
              'https://placeimg.com/640/640/beer',
            ]}
          /> */}
          
        </View>
        
        <View style={styles.offersHeaderSection}>
          <ScalableText style={styles.offersText}>{"Offers"}</ScalableText>
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Offers');
              }}
            >
            <ScalableText style={styles.viewAllText}>{"View All"}</ScalableText>
          </TouchableOpacity>
        </View>
        {this.state.offers.length > 0 ? 
          <View style={styles.thumbsContainer}>
            <View style={{ flexDirection: "row", justifyContent: "center", }}>
              <TouchableOpacity
                onPress={() => {
                  if(this.state.lock_status[0].lock_status == 0 ){
                    this.setState({
                      showModal: true,
                      promocode: this.state.offers[0].promocode.code
                    })
                    
                  } else if(this.state.unlockHash[0].lock_status != 2){
                    let newUnlockHash = this.state.unlockHash
                    newUnlockHash[0].lock_status = 2
                    this.setState({
                      unlockHash: newUnlockHash
                    })
                  } else {
                    if(this.state.unlockHash[0].lock_status == 2){
                      this.props.navigation.navigate('Survey',{
                        id: this.state.offers[0].id
                      });
                    }
                  }

                }}
              >
                <ImageBackground
                  source={ this.state.unlockHash[0].lock_status == 2 ? this.state.image : { uri :this.state.offers.length > 0 ? this.state.offers[0].place_image_url : "https://placeimg.com/640/640/animals" } }
                  style={styles.thumb}
                  borderRadius={5}
                  resizeMode="cover"
                >
                  <ScalableText style={styles.thumbText}>
                    {this.state.offers[0] ? this.state.offers[0].place_name : "wd"}
                  </ScalableText>
                  <ScalableText style={styles.percentage}>
                    {this.state.offers[0] ? this.state.offers[0].percentage + "%" : "1111111"}
                  </ScalableText>
                </ImageBackground>
              </TouchableOpacity>
              {this.state.offers.length > 1 ? 
                <TouchableOpacity
                  onPress={() => {
                    if(this.state.lock_status[1].lock_status == 0 ){
                      this.setState({
                        showModal: true,
                        promocode: this.state.offers[1].promocode.code
                      })
                      
                    } else if(this.state.unlockHash[1].lock_status != 2){
                      let newUnlockHash = this.state.unlockHash
                      newUnlockHash[1].lock_status = 2
                      this.setState({
                        unlockHash: newUnlockHash
                      })
                    } else {
                      if(this.state.unlockHash[1].lock_status == 2){
                        this.props.navigation.navigate('Survey',{
                          id: this.state.offers[1].id
                        });
                      }
                    }
                  }}
                >
                  <ImageBackground
                    source={ this.state.unlockHash[1].lock_status == 2 ? this.state.image : { uri :this.state.offers.length > 0 ? this.state.offers[1].place_image_url : "https://placeimg.com/640/640/animals" } }
                    style={styles.thumb}
                    borderRadius={5}
                    resizeMode="cover"
                  >
                    <ScalableText style={styles.thumbText}>
                      {this.state.offers[1] ? this.state.offers[1].place_name : "wd"}
                    </ScalableText>
                    <ScalableText style={styles.percentage}>
                      {this.state.offers[1] ? this.state.offers[1].percentage + "%": "1111111"}
                    </ScalableText>
                  </ImageBackground>
                </TouchableOpacity>
                : null
              }
              
            </View>
            {this.state.offers.length > 2 ? 
              <View style={{ flexDirection: "row", justifyContent: "center", }}>
                <TouchableOpacity
                  onPress={() => {
                    if(this.state.lock_status[2].lock_status == 0 ){
                      this.setState({
                        showModal: true,
                        promocode: this.state.offers[2].promocode.code
                      })
                      
                    } else if(this.state.unlockHash[2].lock_status != 2){
                      let newUnlockHash = this.state.unlockHash
                      newUnlockHash[2].lock_status = 2
                      this.setState({
                        unlockHash: newUnlockHash
                      })
                    } else {
                      if(this.state.unlockHash[2].lock_status == 2){
                        this.props.navigation.navigate('Survey',{
                          id: this.state.offers[2].id
                        });
                      }
                    }
                  }}
                >
                  <ImageBackground
                    source={ this.state.unlockHash[2].lock_status == 2 ? this.state.image : { uri :this.state.offers.length > 0 ? this.state.offers[2].place_image_url : "https://placeimg.com/640/640/animals" } }
                    style={styles.thumb}
                    borderRadius={5}
                    resizeMode="cover"
                  >
                    <ScalableText style={styles.thumbText}>
                      {this.state.offers[2] ? this.state.offers[2].place_name : "wd"}
                    </ScalableText>
                    <ScalableText style={styles.percentage}>
                      {this.state.offers[2] ? this.state.offers[2].percentage + "%": "1111111"}
                    </ScalableText>
                  </ImageBackground>
                </TouchableOpacity>
                
                {this.state.offers.length > 3 ? 
                  <TouchableOpacity
                    onPress={() => {
                      if(this.state.lock_status[3].lock_status == 0 ){
                        this.setState({
                          showModal: true,
                          promocode: this.state.offers[3].promocode.code
                        })
                        
                      } else if(this.state.unlockHash[3].lock_status != 2){
                        let newUnlockHash = this.state.unlockHash
                        newUnlockHash[3].lock_status = 2
                        this.setState({
                          unlockHash: newUnlockHash
                        })
                      } else {
                        if(this.state.unlockHash[3].lock_status == 2){
                          this.props.navigation.navigate('Survey',{
                            id: this.state.offers[3].id
                          });
                        }
                      }
                    }}
                  >
                    <ImageBackground
                      source={ this.state.unlockHash[3].lock_status == 2 ? this.state.image : { uri :this.state.offers.length > 0 ? this.state.offers[3].place_image_url : "https://placeimg.com/640/640/animals" } }
                      style={styles.thumb}
                      borderRadius={5}
                      resizeMode="cover"
                    >
                      <ScalableText style={styles.thumbText}>
                        {this.state.offers[3] ? this.state.offers[3].place_name : "wd"}
                      </ScalableText>
                      <ScalableText style={styles.percentage}>
                        {this.state.offers[3] ? this.state.offers[3].percentage + "%": "1111111"}
                      </ScalableText>
                    </ImageBackground>
                  </TouchableOpacity>
                  : null
                }
              
              </View>
              : null
            }
            
          </View>
          : null
        }
        

        <View style={styles.toursHeaderSection}>
          <ScalableText style={styles.offersText}>{"Tours"}</ScalableText>
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Tours');
              }}
            >
            <ScalableText style={styles.viewAllText}>{"View All"}</ScalableText>
          </TouchableOpacity>        
        </View>

      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        
        
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.body}
        >
          
          <ScalableText style={{fontSize: 30, color: "green"}}>{"heeeyyyyy"}</ScalableText>
        
          <View style={{ height: 60 }} />
        </ScrollView>
      </View>
    );
  }
}
export const Home = connect(mapStateToProps)(HomeScreen);
