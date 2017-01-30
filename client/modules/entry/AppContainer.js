import { connect } from 'react-redux/es';
import { withTranslate } from 'react-redux-multilingual';
import App from './App';

export default connect()(withTranslate(App));
