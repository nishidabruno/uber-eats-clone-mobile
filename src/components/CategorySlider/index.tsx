import React from 'react';
import { ScrollView, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import dealsImg from '../../assets/deals.png';
// import groceryImg from '../../assets/uber_grocery.png';
// import alcohol from '../../assets/alcohol.png';
// import topEatsImg from '../../assets/top_eats.png';
// import burgerImg from '../../assets/burger.png';
// import dessertUng from '../../assets/dessert.png';

import { Container, CategoryContainer, Title, Icon } from './styles';

interface CategorySliderProps {
  data: {
    title: string;
    imageUri: ImageSourcePropType;
  }[];
}

export function CategorySlider({ data }: CategorySliderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {data.map(category => (
          <CategoryContainer
            key={category.title}
            onPress={() => navigation.navigate('SearchResult')}
          >
            <Icon source={category.imageUri} resizeMode="contain" />
            <Title>{category.title}</Title>
          </CategoryContainer>
        ))}
        {/* <SliderItem title="Desserts" image={dessertUng} /> */}
      </ScrollView>
    </Container>
  );
}
