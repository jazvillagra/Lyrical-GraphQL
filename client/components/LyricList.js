import React, { Component } from "react";

class LyricList extends Component {
    renderLyrics() {

        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        <i id="vote-icon" className="material-icons">thumb_up</i>
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

export default LyricList;