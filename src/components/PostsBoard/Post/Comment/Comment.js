import React, {Component} from 'react';

// class Comment extends Component {
//   constructor(props) {
//     super(props);
//     // set up the initial state
//     // this.state = {
//     //   data: comments
//     // }
//   }
//
//   render() {
//     return (
//       <div className="comment__new">
//         <div className="author__info">
//           <img className="author__avatar"
//                src={this.props.avatarUrl}
//                alt={`${this.props.author}'s picture`} />
//           <div className="author__name">
//             {this.props.author}
//           </div>
//         </div>
//         <div className="comment__body">
//           {this.props.body}
//         </div>
//         <div className="comment__date">
//           {this.props.date}
//         </div>
//       </div>
//     );
//   }
// }

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comment">
        <h2 className="author">{this.props.author}</h2>
        {this.props.text}
      </div>
    );
  }
}


export default Comment;