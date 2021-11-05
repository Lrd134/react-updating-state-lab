// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YoutubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = () => {
    this.setState(previousState => {
      return Object.assign({}, previousState, {
        settings: {
          ...previousState.settings,
          bitrate: 12
        }
      })
    
    })
  }

  handleResolution = () => {
    this.setState(previousState => {
      return {
        ...previousState,
        settings: {
          ...previousState.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    })
  }

  render(){
    return (
      <div className="youtubeDebugger">
        <button className="bitrate" onClick={this.handleBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Resolution</button>
      </div>
    )
  }
}