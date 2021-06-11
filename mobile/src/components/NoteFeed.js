import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';

import Note from './Note';

const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

const notes = [
  { id: 0, content: 'Bulk upload' },
  { id: 1, content: 'Store Picker integration' },
  { id: 2, content: 'Kg/item bug' },
  { id: 3, content: 'Add to basket' },
  { id: 4, content: 'Metrics' },
  { id: 5, content: 'New book slot page' },
  { id: 6, content: 'Automation' },
  { id: 7, content: 'Perf: Slots' },
  { id: 8, content: 'Display Cnc grid' },
  { id: 9, content: 'approx prices' },
];

const NoteFeed = (props) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <FeedView>
            <Note note={item} />
          </FeedView>
        )}
      />
    </View>
  );
};

export default NoteFeed;
