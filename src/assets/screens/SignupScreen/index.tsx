import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './style';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignupScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Mahmoud 120192144</Text>
    </View>
  );
};
export default SignupScreen;
