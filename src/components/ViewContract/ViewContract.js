import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Modal, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import FileViewer from 'react-file-viewer';

class ViewContract extends Component {

    render() {
        return (
            <div className="view-contract-container">
                <Modal trigger={ <Button>View Contract</Button> }>
                    <Header icon="pen square" content="Register New Customer"/>
                        <Modal.Content>
                            <Header content="PDF of contract should load here instead of spinning blue circle. It is pretty though, I'll give it that!"/>
                                <FileViewer
                                    filePath={this.props.file}
                                    fileType={this.props.type}/>
                        </Modal.Content>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
  });
  
export default connect(mapStateToProps)(ViewContract);