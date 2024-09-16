import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {useRoute} from '@react-navigation/native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {data, formatNumber, getFontSize} from '../../assets/utils/ResponsiveFn';
import {icons} from '../../theme';
import styles from './styles';

const {height: windowHeight} = Dimensions.get('window');

const MediaScreen = () => {
  const route = useRoute();
  const {videoId} = route.params || 0;
  const flatListRef = useRef(null);

  const bottomTabHeight = useBottomTabBarHeight();
  const statusBarHeight = StatusBar.currentHeight || 0;

  const initialIndex = data.findIndex(item => item.id === videoId);
  const [activeIndex, setActiveIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex,
  );

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const newActiveIndex = viewableItems[0].index;
      setActiveIndex(newActiveIndex);
    }
  }).current;

  const viewabilityConfig = {itemVisiblePercentThreshold: 50};

  useEffect(() => {
    if (flatListRef.current && initialIndex !== -1) {
      setTimeout(() => {
        flatListRef.current.scrollToIndex({
          index: initialIndex,
          animated: false,
        });
      }, 0);
    }
  }, [initialIndex]);

  const renderVideoItem = ({item, index}) => (
    <View
      style={[
        styles.videoContainer,
        {
          height: windowHeight - bottomTabHeight - statusBarHeight,
        },
      ]}>
      <Video
        source={{uri: item.urls.mp4}}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={activeIndex !== index}
      />
      {/* Overlay buttons */}
      <View style={styles.topOverlay}>
        <Text style={{...styles.comments, fontSize: getFontSize(2.7)}}>
          Media
        </Text>
        <icons.video width={35} height={35} />
      </View>
      <View style={styles.bottomOverlay}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <icons.like width={35} height={35} />
          </TouchableOpacity>
          <Text style={styles.comments}>{formatNumber(item.likes_count)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <icons.comments width={35} height={30} style={{marginBottom: 5}} />
          </TouchableOpacity>
          <Text style={styles.comments}>
            {formatNumber(item.comments_count)}{' '}
          </Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <icons.dots width={25} height={25} style={{marginRight: 5}} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderVideoItem}
      keyExtractor={item => item.id.toString()}
      pagingEnabled
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      showsVerticalScrollIndicator={false}
      initialScrollIndex={initialIndex !== -1 ? initialIndex : 0}
      getItemLayout={(data, index) => ({
        length: windowHeight,
        offset: windowHeight * index,
        index,
      })}
      onScrollToIndexFailed={error => {
        setTimeout(() => {
          flatListRef.current?.scrollToIndex({
            index: error.highestMeasuredFrameIndex,
            animated: false,
          });
        }, 100);
      }}
    />
  );
};

export default MediaScreen;
