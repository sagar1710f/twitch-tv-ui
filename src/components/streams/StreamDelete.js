import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions/";
import history from "../../history";
import Modal from "../Modal";

class StreamDelete extends React.Component {
  componentDidMount() {
    // console.log(this.props)/
    this.props.fetchStream(this.props.match.params.id);
  }
  renderContent() {
    if (!this.props.stream) {
      return `Are you sure you want to delete this stream ?`;
    } else {
      return `Are you sure you want to delete this stream with title ${this.props.stream.title} ?`;
    }
  }
  render() {
    return (
      <Modal onDismiss={() => history.push("/")}>
        <div className="header">Stream Delete</div>
        <div className="content">{this.renderContent()}</div>
        <div className="actions">
          <button className="ui negative button" onClick={()=> this.props.deleteStream(this.props.match.params.id)}>
            Delete
          </button>
          <Link to="/" className="ui button">
            Cancel
          </Link>
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
