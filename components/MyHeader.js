import React, { Component} from 'react';
import { Header,Icon } from 'react-native-elements';

const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold",   fontFamily: 'Times New Roman', } }}
      backgroundColor = "#eaf8fe"
    />
  );
};

export default MyHeader;
