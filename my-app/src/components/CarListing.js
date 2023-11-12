import React, { Component } from 'react';
import "./CarListing.css";


class CarListing extends Component {
  state = {
    comments: [],
    newComment: '',
    hoverRating: 0,
  };

  handleStarClick = (rating) => {
    this.props.onStarClick(rating); 
  };

  handleStarHover = (rating) => {
    this.setState({ hoverRating: rating });
  };

  handleStarLeave = () => {
    this.setState({ hoverRating: 0 });
  };

  handleCommentChange = (e) => {
    this.setState({ newComment: e.target.value });
  };

  handleAddComment = () => {
    const { newComment, comments } = this.state;
    if (newComment.trim() !== '') {
      this.setState({
        comments: [...comments, newComment],
        newComment: '',
      });
    }
  };

  render() {
    const { comments, newComment, hoverRating } = this.state;
    return (
      <div className="car-listing">
        <div className="rate-us">
          <p>Rate Us</p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${this.props.rating >= star ? 'selected' : ''} ${
                hoverRating >= star ? 'hovered' : ''
              }`}
              onClick={() => this.handleStarClick(star)}
              onMouseEnter={() => this.handleStarHover(star)}
              onMouseLeave={this.handleStarLeave}
            >
              ★
            </span>
          ))}
        </div>
        <div className="comment-section">
          <h3>Comments</h3>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
            </div>
          ))}
          <textarea
            rows="4"
            placeholder="Add a comment..."
            value={newComment}
            onChange={this.handleCommentChange}
          />
          <button onClick={this.handleAddComment}>Add Comment</button>
        </div>
      </div>
    );
  }
}

export default CarListing;