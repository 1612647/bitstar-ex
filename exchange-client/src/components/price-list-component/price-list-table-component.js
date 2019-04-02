//Import React library
import React from 'react';

//Import Redux
import { connect } from 'react-redux';

//Import Ant design
import { Table } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

class PriceListTableComponent extends React.Component {

    render() {
        return (
            <Table
                columns={this.props.columns}
                dataSource={this.props.pairs}
                onChange={onChange}
                rowKey='id' />
        )
    };
}

let mapStateToProps = (state) => {
    return {
        columns: state.columns,
        pairs: state.pairsTable
    }
}
export default connect(mapStateToProps, null)(PriceListTableComponent);