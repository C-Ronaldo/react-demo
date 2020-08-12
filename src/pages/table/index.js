import React from "react";
import {Table} from "antd";

class TableComponent extends React.Component {
    state = {
        data: [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ]
    }
    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ]
    render() {
        const {data} = this.state;
        return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={data}
                    className="table"
                    scroll={{y: 400}}
                />
            </div>
        );
    }
}
export default TableComponent