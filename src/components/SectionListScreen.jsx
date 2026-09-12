import React from 'react';
import { View, Text, SectionList } from 'react-native';

const SectionListScreen = () => {

  const students = [
    {
      title: 'Computer Science',
      data: ['Abid', 'Ali', 'Ahmed'],
    },
    {
      title: 'Software Engineering',
      data: ['Usman', 'Hamza', 'Bilal'],
    },
    {
      title: 'Artificial Intelligence',
      data: ['Zain', 'Hassan', 'Asad'],
    },
    {
      title: 'Data Science',
      data: ['Zain', 'Hassan', 'Asad'],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item}
      </Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={students}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionHeader: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemContainer: {
    padding: 15,
  },
  itemText: {
    color: 'black',
    fontSize: 18,
  },
};
export default SectionListScreen;