import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Axios, { AxiosResponse } from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Dropdown from '../../components/Dropdown';
import { CitiesNames, UfsInitials } from '../../types/entities/point';

const Home = (): ReactElement => {
  const navigation = useNavigation();

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf: selectedUf, city: selectedCity
    });
  }

  useEffect(() => {
    Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(({ data }: AxiosResponse) => {
        const ufInitials = data.map((uf: UfsInitials) => ({
          label: uf.sigla,
          value: uf.sigla,
        }));
        
        setUfs(ufInitials);
      })
  }, []);

  useEffect(() => {
    if (selectedUf === '0') return;

    Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(({ data }: AxiosResponse) => {
        const citiesNames = data.map((city: CitiesNames) => ({
          label: city.nome,
          value: city.nome,
        }));

        setCities(citiesNames);
      })
  }, [selectedUf]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

      <ImageBackground
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>Ajudamos a encontrarem pontos de coleta de forma eficiente.</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Dropdown
            placeholder="Selecione a UF"
            handleValueChange={setSelectedUf}
            items={ufs}
            itemsKey={'uf'}
          />

          <Dropdown
            placeholder="Selecione a Cidade"
            handleValueChange={setSelectedCity}
            items={cities}
            itemsKey={'city'}
          />
          {/* 
          <TextInput
            style={styles.input}
            placeholder="Digite a UF"
            value={uf}
            onChangeText={setUf}
            maxLength={2}
            autoCorrect={false}
            autoCapitalize="characters"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite a Cidade"
            value={city}
            onChangeText={setCity}
            autoCorrect={false}
          /> */}

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#fff" size={24} />
            </View>
            <Text style={styles.buttonText}>Encontrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    color: "#a0a0b2",
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;