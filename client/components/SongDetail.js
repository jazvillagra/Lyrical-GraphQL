import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import addLyricToSong from "../queries/addLyricToSong";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {

    render() {
        console.log(this.props);

        const { song } = this.props.data;
        if (!song) { return <div>Loading...</div>; }
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Songs</a>
                        </li>
                        <li className="breadcrum-item">/</li>
                        <li className="breadcrum-item active">
                            <a href="/#/songs/{id}">Details</a>
                        </li>
                    </ul>
                </nav>
                <h3>{song.title}</h3>
                {/* <ul className="collection">
                    {this.props.data.song.lyrics.map(({ id, content }) => (
                        <li key={id} className="collection-item">
                            {content}
                        </li>
                    ))}
                </ul>
                <br /> */}
                <LyricList lyrics={song.lyrics} />
                <LyricCreate songId={song.id} />
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => {
        return { variables: { id: props.params.id } };
    }
})(SongDetail);