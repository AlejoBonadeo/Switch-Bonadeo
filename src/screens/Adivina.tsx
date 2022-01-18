import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../components/moleculs/header';
import Card from '../components/moleculs/card';
import Title from '../components/atoms/title';
import Confirm from '../components/moleculs/confirm';
import Game from '../components/moleculs/game';
const Adivina = () => {
  const [number, setNumber] = useState('0');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [finalNumber, setFinalNumber] = useState(0);

  const handleClean = () => {
    setNumber('');
  };
  const handleConfirm = () => {
    setConfirmed(true);
    if (isNaN(Number(number))) return;
    setSelectedNumber(Number(number));
  };
  const handleStartGame = () => {
    setGameStarted(true);
    setFinalNumber(Math.floor(Math.random() * 10));
  };
  const handleRestart = () => {
    setGameStarted(false);
    setConfirmed(false);
    setNumber('0');
    setSelectedNumber(0);
    setFinalNumber(0);
  };
  return (
    <View style={{flex: 1}}>
      <Header />
      <Title />
      <Card
        title="Elige un numero"
        handleClean={handleClean}
        handleConfirm={handleConfirm}
        handleChangeText={setNumber}
        number={number}
      />
      {confirmed && !gameStarted && (
        <Confirm
          handleStartGame={handleStartGame}
          selectedNumber={selectedNumber}
        />
      )}
      {gameStarted && (
        <Game
          finalNumber={finalNumber}
          handleRestart={handleRestart}
          selectedNumber={selectedNumber}
        />
      )}
    </View>
  );
};

export default Adivina;
