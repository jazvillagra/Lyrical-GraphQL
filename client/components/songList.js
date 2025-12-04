import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

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

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">
              <a href="/">Songs</a>
            </li>
            <li className="breadcrum-item">/</li>
            <li className="breadcrum-item">
              <a href="/#/songs/new">Create</a>
            </li>
          </ul>
        </nav>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

//first parenthesis content returns a function that is called by the second set of parenthesis
export default graphql(query)(SongList);
