import React, {useState} from 'react';
import {Text, ListItem, Avatar, Icon, Badge, Button, Switch, colors} from 'react-native-elements';
import {View, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {quizOptions} from '../../utils/QuizOptions';

const log = () => console.log('this is an example method');

type List1Data = {
  title: string;
  icon: string;
};
const list1: List1Data[] = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

type List2Data = {
  name: string;
  avatar_url: string;
  subtitle: string;
  linearGradientColors: string[];
};

const list2: Partial<List2Data>[] = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
    subtitle: 'Vice President',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
    subtitle: 'Vice Chairman',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
    subtitle: 'CEO',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
    subtitle: 'Lead Developer',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
    subtitle: 'CTO',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
];

const Main = () => {
  const [expanded, setExpanded] = React.useState(false);

  const listItemProps = {};

  const [switch1, setSwitch1] = useState(true);
  const [checkbox1, setCheckbox1] = useState(true);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  return (
    <ScrollView>
      <ListItem.Accordion
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}
        content={
          <>
            <Icon tvParallaxProperties={undefined} name="place" size={30} />
            <ListItem.Content>
              <ListItem.Title>풀고싶은 문제 유형을 선택해주세요!</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {quizOptions.SelectCategory.map(category => (
          <ListItem key={category} onPress={log} bottomDivider hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>
            <Text>{category}</Text>
          </ListItem>
        ))}
      </ListItem.Accordion>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Main;
