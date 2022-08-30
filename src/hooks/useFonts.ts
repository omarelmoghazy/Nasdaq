import * as Font from 'expo-font';

export const useFonts = async () => {
  await Font.loadAsync({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
  });
};
