import { useState } from 'react'
import Card from './components/Card';
import albumImage from './components/img/album-img.jpg';
import './App.css'

function App() {

  return (
    <>
      <Card 
        artistName = {'MACACO'}
        artistcategory = {'solista'}
        albumName = {'Civilizado Como Los Animales'}
        albumYear = {'2019'}
        genre = {'Rock en Español'}
        albumImage = {albumImage}      
      />
    </>
  )
}

export default App;
