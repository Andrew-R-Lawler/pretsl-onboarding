import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Image, Button, Modal, Header} from 'semantic-ui-react';
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
                            {/* <Image */}
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