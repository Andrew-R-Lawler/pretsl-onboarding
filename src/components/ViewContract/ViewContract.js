import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Modal, Header, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// import { Document, Page } from 'react-pdf';
// import { Document } from 'react-pdf/dist/entry.webpack';
// import { Document } from 'react-pdf/dist/entry.parcel';

import FileViewer from 'react-file-viewer';

// const file = '../../public/pretsl_merchant_contract_agreement.pdf'
// const type = 'pdf'
const file = '../../public/images/PRETSL Android Icon.png'
const type = 'png'

class ViewContract extends Component {

    render() {
        return (
            <div className="view-contract-container">
                    <Modal 
                        trigger={
                            <Button inverted color='red' className="letitsnow">
                                View Contract Modal
                            </Button>}>
                        <Header icon="pen square"content="Register New Customer"/>
                            <Modal.Content>
                                <Header content="PDF of contract should load here instead of spinning blue circle. It is pretty though, I'll give it that!"/>
                                    <FileViewer
                                        fileType={type}
                                        filePath={file}/>
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