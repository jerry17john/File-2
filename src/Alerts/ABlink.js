// import React, { useEffect, useRef } from 'react';
// import { Animated, View } from 'react-native';

// const ABlink = ({ duration, repeat_count, style, children }) => {
//   const fadeAnimation = useRef(new Animated.Value(1)).current; // Start visible

//   useEffect(() => {
//     const blinkDuration = 800; // quick blink

//     const animation = Animated.loop(
//       Animated.sequence([
//         // Stay visible
//         Animated.delay(duration),
//         // Fade out quickly
//         Animated.timing(fadeAnimation, {
//           toValue: 0,
//           duration: blinkDuration,
//           useNativeDriver: true,
//         }),
//         // Fade in quickly
//         Animated.timing(fadeAnimation, {
//           toValue: 1,
//           duration: blinkDuration,
//           useNativeDriver: true,
//         }),
//       ]),
//       {
//         iterations: repeat_count,
//       }
//     );

//     animation.start();

//     return () => animation.stop();
//   }, [duration, repeat_count, fadeAnimation]);

//   return (
//     <View style={{ ...style }}>
//       <Animated.View style={{ opacity: fadeAnimation }}>
//         {children}
//       </Animated.View>
//     </View>
//   );
// };

// export default ABlink;


import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

const ABlink = ({ duration, repeat_count, style, children }) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: repeat_count,
      }
    );

    animation.start();

    return () => animation.stop(); // optional cleanup
  }, [duration, repeat_count, fadeAnimation]);

  return (
    <View style={{ ...style }}>
      <Animated.View style={{ opacity: fadeAnimation }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default ABlink;

// import React, { Component } from 'react'
// import { Animated, View } from 'react-native'

// export default class ABlink extends Component {

//     constructor(props) {
//         super(props);
//         this.fadeAnimation = new Animated.Value(0);
//     }

//     componentDidMount() {
//         Animated.loop(
//             Animated.sequence([
//                 Animated.timing(this.fadeAnimation, {
//                     toValue: 0,
//                     duration: this.props.duration,
//                     useNativeDriver: true,
//                 }),
//                 Animated.timing(this.fadeAnimation, {
//                     toValue: 1,
//                     duration: this.props.duration,
//                     useNativeDriver: true,
//                 })
//             ]),
//             {
//                 iterations: this.props.repeat_count
//             }
//         ).start();
//     }

//     render() {
//         return (
//             <View style={{ ...this.props.style }}>
//                 <Animated.View style={{ opacity: this.fadeAnimation }}>
//                     {this.props.children}
//                 </Animated.View>
//             </View>
//         )
//     }
// }