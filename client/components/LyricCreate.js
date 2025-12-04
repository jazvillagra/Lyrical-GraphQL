import React, { Component } from "react";
import { graphql } from "react-apollo";
import addLyricToSong from "../queries/addLyricToSong";

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { content: "" };
    }

    onSubmit(event) {
        event.preventDefault();
        const { songId } = this.props;
        const { content } = this.state;

        this.props.mutate({
            variables: { songId, content }
        });

        this.setState({ content: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Add Lyric</label>
                    <input
                        type="text"
                        value={this.state.content}
                        onChange={event => this.setState({ content: event.target.value })} />
                </form>
            </div>
        );
    }
}

export default graphql(addLyricToSong)(LyricCreate);