import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Modal, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Document } from 'react-pdf';
import FileViewer from 'react-file-viewer';
import PretslContract from '/Users/andrewlawler/Documents/prime/tier3/pretsl/src/components/ViewContract/pretsl_merchant_contract_agreement.pdf'

class ViewContract extends Component {

    render() {
        return (
            <div className="view-contract-container">
                <Modal trigger={ <Button>View Contract</Button> }>
                    <Header icon="pen square" content="Register New Customer"/>
                        <Modal.Content>
                            <Header content="PDF of contract should load here instead of spinning blue circle. It is pretty though, I'll give it that!"/>
                                {/* <FileViewer
                                    filePath='./pretsl_merchant_contract_agreement.jpg'
                                    fileType='jpeg'
                                /> */}
                        <Document file='https://drive.google.com/file/d/1fHg6XyjQqJQPdrfeU0UB9_B4kA_0jSmy/view?usp=sharing' />
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