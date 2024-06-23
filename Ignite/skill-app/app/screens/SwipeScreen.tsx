import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import ProfileCard from '../components/SwipeScreenComponents/ProfileCard';

const { width } = Dimensions.get('window');

const SwipeScreen: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      setMessage(null); // Reset message on gesture start
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (translateX.value < -width / 3) {
        translateX.value = withSpring(-width);
        setMessage('Pass');
      } else if (translateX.value > width / 3) {
        translateX.value = withSpring(width);
        setMessage('Match');
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <ProfileCard
            imageUri="../../assets/images/guitarMan.jpg"
            name="John Doe"
            age={28}
            bio="Loves hiking, traveling, and photography."
          />
        </Animated.View>
      </GestureDetector>
      {message && (
        <View style={[styles.messageContainer, message === 'Match' ? styles.match : styles.pass]}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  messageContainer: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -50 }],
    padding: 20,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  match: {
    backgroundColor: 'green',
  },
  pass: {
    backgroundColor: 'red',
  },
});

export default SwipeScreen;
