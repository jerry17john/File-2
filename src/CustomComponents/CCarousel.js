import React, { useState, useCallback, useRef } from 'react';
import { View, SafeAreaView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { normalize } from '../CommonStyle/componentStyle';
import FastImage from 'react-native-fast-image';


const CCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(props.data);
    const ref = useRef(null);
    const { width, height } = Dimensions.get('screen')

    const renderItem = useCallback(({ item, index }) => (
        <View style={{}}>
            <FastImage
                style={{ height: height * 0.2, width: width, borderRadius: 15, borderWidth: 0 }}
                source={{ uri: item.imageurl }}
                resizeMode='stretch'
            />
        </View>
    ), []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 0 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Carousel
                    layout="default"
                    autoplay={true}
                    loop={true}
                    ref={ref}
                    data={carouselItems}
                    sliderWidth={300}
                    itemWidth={width}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            </View>
        </SafeAreaView>
    );
};

export default CCarousel;