import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Video from 'react-native-video';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../../theme';
import {
  HorizontalLine,
  data,
  getFontSize,
} from '../../assets/utils/ResponsiveFn';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const renderMediaItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Media', {videoId: item.id})}
      style={styles.mediaItem}>
      <View style={styles.videoWrapper}>
        <Video
          source={{uri: item.urls.mp4}}
          style={styles.video}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoHeader}>
          <View style={styles.leftSection}>
            <Image style={styles.logo} source={icons.logo} />
            <Text style={styles.title}>EK Ventures</Text>
          </View>

          <View style={styles.rightSection}>
            <icons.search
              width={24}
              height={24}
              fill="#000"
              style={styles.icon}
            />
            <icons.messages
              width={24}
              height={24}
              fill="#000"
              style={styles.icon}
            />
            <icons.notifications
              width={24}
              height={24}
              fill="#000"
              style={styles.icon}
            />
          </View>
        </View>

        <HorizontalLine style={{marginTop: getFontSize(-3)}} />

        <Text style={styles.greeting}>Hello John,</Text>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.subGreeting}>Please tap below</Text>
          <TouchableOpacity style={styles.infoCard}>
            <View style={styles.iconContainer}>
              <View style={styles.iconContainerInside}>
                <icons.heart
                  width={40}
                  height={24}
                  fill="#000"
                  style={styles.icon}
                />
              </View>
            </View>
            <View style={styles.secondPortion}>
              <View style={styles.textContainer}>
                <Text style={styles.largeTitle}>Large font title</Text>
                <Text style={styles.subTitle}>Sub-title 💎💎💎</Text>
              </View>
              <icons.arrowRight
                width={15}
                height={15}
                style={{marginRight: 7}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <HorizontalLine
          style={{marginTop: getFontSize(3), width: '90%', alignSelf: 'center'}}
        />

        {/* Media Section */}
        <View style={styles.mediaSection}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <icons.mediaIcon
              width={15}
              height={15}
              style={{marginRight: getFontSize(1)}}
            />
            <Text style={styles.mediaTitle}>Media</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderMediaItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <TouchableOpacity style={styles.uploadButton}>
            <icons.video
              width={20}
              height={20}
              style={{marginRight: getFontSize(1)}}
            />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
