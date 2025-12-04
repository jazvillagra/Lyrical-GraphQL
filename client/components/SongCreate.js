import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { hashHistory, Link } from "react-router";
import query from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title,
      },
      refetchQueries: [{ query }],
    }).then(() => hashHistory.push("/"));
  }

  render() {
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
        {/* <Link to="/">Back</Link> */}
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song title:</label>
          <input
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}
/*
GraphiQL mutation:
mutation AddSong($songTitle: String) {
  addSong(title: $songTitle) {
    id
    title
  }
}

Query variables:
{"songTitle": "Seven"}
*/

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
