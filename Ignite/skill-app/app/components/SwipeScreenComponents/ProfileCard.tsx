import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface ProfileCardProps {
  imageUri: string;
  name: string;
  age: number;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUri, name, age, bio }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}, {age}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: '100%',
    height: '70%',
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileCard;
