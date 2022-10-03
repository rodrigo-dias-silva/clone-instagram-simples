import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function List(props) {

  function likeIcon(likeada) {
    return likeada ?
      require('../images/likeada.png') :
      require('../images/like.png')
  }

  function showLikes(likers) {
    if (likers === 0) {
      return;
    }
    return (
      <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
    )
  }

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image
          style={styles.fotoPerfil}
          source={{ uri: props.data.imgperfil }}
        />
        <Text style={styles.nomePerfil}>
          {props.data.nome}
        </Text>
      </View>

      <Image
        resizeMode='cover'
        style={styles.imgFeed}
        source={{ uri: props.data.imgPublicacao }}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={likeIcon(props.data.likeada)}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../images/comment.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../images/send.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>
      </View>

      {showLikes(props.data.likers)}

      <Text style={styles.nomeRodape}>
        {props.data.nome}
      </Text>

      <Text style={styles.descRodape}>
        {props.data.descricao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nomePerfil: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000'
  },
  imgFeed: {
    height: 400
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 25,
    height: 25
  },
  btnSend: {
    paddingLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15
  }
})