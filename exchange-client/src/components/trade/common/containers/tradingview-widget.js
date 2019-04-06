//Import react library
import React from 'react';

//Import tradingview api
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

//Imprt custome scss
import './tradingview-widget.scss';

class TradingViewWidgetComponent extends React.Component{
    render(){
        return (
            <TradingViewWidget
                symbol="BINANCE:ETHUSDT"
                theme={Themes.LIGHT}
                locale="fr"
                height="400"
                width="100%"
            />
        )
    };
}

export default TradingViewWidgetComponent;