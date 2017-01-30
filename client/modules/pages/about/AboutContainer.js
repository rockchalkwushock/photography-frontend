import { connect } from 'react-redux/es';
import { withTranslate } from 'react-redux-multilingual';
import About from './About';

export default connect()(withTranslate(About));
