import React, { Component } from "react";
import { graphql } from "react-apollo";
import likeLyric from "../queries/likeLyric";

class LyricList extends Component {
    onLike(id) {
        this.props.mutate({
            variables: { id },
            optimisticResponse: {
                __typename: "Mutation",
                likeLyric: {
                    id,
                    __typename: "LyricType",
                    likes: this.props.lyrics.find(lyric => lyric.id === id).likes + 1
                }
            }
        });
    }
    renderLyrics() {

        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        <i id="vote-icon" className="material-icons" onClick={() => this.onLike(id)}>thumb_up</i>
                        <t className="vote-count">{likes}</t>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default graphql(likeLyric)(LyricList);