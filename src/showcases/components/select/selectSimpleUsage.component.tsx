import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const SelectSimpleUsageShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const onSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Layout style={styles.container}>
      <Select
        selectedIndex={selectedIndex}
        onSelect={onSelect}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 228,
  },
});

