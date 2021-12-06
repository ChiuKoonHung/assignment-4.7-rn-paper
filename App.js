import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
// import { useTheme } from 'react-native-paper';

const MyComponent = () => (
  <>
  <ScrollView>
  <Card>
    <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdr18OjYKxxBxfzNyPpZxHxIDBmGuqg9QNw&usqp=CAU' }} />
    <Card.Content>
      <Title>Vaccinations coverage above 80%</Title>
      <Paragraph>This is a description text that shows the summary of what this article is talking about.</Paragraph>
    </Card.Content>
  </Card>

  <Card>
    <Card.Content>
      <Title>More children take turns to live with each parent in post-divorce arrangements</Title>
  </Card.Content>
  </Card>

  <Card>
    <Card.Content>
      <Title>Chinese tennis star Peng Shuai tells IOC president she is safe during video call</Title>
  </Card.Content>
  </Card>

  <Card>
    <Card.Content>
      <Title>Chinese tennis star Peng Shuai tells IOC president she is safe during video call</Title>
  </Card.Content>
  </Card>


  </ScrollView>
  </>
);

export default MyComponent;
