import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    //for async handling (temporary)
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
//first parenthesis content returns a function that is called by the second set of parenthesis
export default graphql(query)(SongList);
