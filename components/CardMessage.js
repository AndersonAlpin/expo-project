import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardMessage(props) {
  return (
    <View style={styles.cardMessage}>
      <Text style={styles.titleMessage}>{props.title}</Text>
      <Text style={styles.message}>
        Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardMessage: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    margin: 2,
    borderColor: 'gray',
    width: 320,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  titleMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center',
  }
});