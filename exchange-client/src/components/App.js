//Import react library
import React, { Component } from 'react';

//Import custome scss
import './App.scss';

//Import components
import MainComponent from './main-component/main-component';

//Import Intl support multile language
import { IntlProvider } from 'react-intl';
import '../lang/lang-config';
//Provider support Internationalization for ant-design
import { LocaleProvider } from 'antd';

//Import Redux
import { connect } from 'react-redux';

//Import ant-design
import { BackTop } from 'antd';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleProvider locale={this.props.lang.locale}>
          <IntlProvider key={this.props.lang.locale} locale={this.props.lang.locale} messages={this.props.lang.messages}>
            <div>
                <MainComponent></MainComponent>
                <BackTop />
            </div>
          </IntlProvider>
        </LocaleProvider>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
      lang: state.lang
  }
}
export default connect(mapStateToProps)(App);
