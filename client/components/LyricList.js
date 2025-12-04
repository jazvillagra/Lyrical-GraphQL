import React, { Component } from "react";
import { graphql } from "react-apollo";

class LyricList extends Component {
    renderLyrics() {
        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        <i className="material-icons">thumb_up</i>
                        {likes}
                    </div>
                </li>
            );
        }
        );
    }

    render() {
        const { song } = this.props;
        if (!song) { return <div>Loading...</div>; }
        
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default LyricList;