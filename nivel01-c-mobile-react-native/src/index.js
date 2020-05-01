import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, StatusBar,
  TouchableOpacity } from 'react-native';
import api from './services/api';

// import { Container } from './styles';

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);      
    });
     
  }, []);

  async function handleAddProject(){
    const data = {
      title: `Project ${Date.now()}`,
      owner: 'Júlio César'
    }

    const response = await api.post('projects', data);

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container} >
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => <Text style={styles.project}>{project.title}</Text> } 
          />          

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => handleAddProject()}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
      
      {
        /**
         * <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
        {projects.map(project => (
          <Text key={project.id} style={styles.project}>{project.title}</Text>
        ))}
      </View>
         */
      }
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold'
  },
  project: {
    color: '#FFF',
    fontSize: 16
  },
  button: {
    backgroundColor: '#FFF',
    margin: 10,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16
  }
});
