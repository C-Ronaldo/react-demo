import React from "react";
import {Row, Col} from "antd";
import {UserAddOutlined} from '@ant-design/icons';
import CountUp from "react-countup";
import Map from "./parts/map";
import Bar from "./parts/bar";
import "./home.less";
class Home extends React.Component{
    state = {
        dataList: [
            {count: 12, tip: "新增用户", color: "#00dffe", color2: "#029cf5"},
            {count: 2, tip: "新增阅读", color: "#ff8a85", color2: "#ff6086"},
            {count: 3, tip: "新增用户", color: "#fbae52", color2: "#fda33a"},
            {count: 7, tip: "新增用户", color: "#b7a0f9", color2: "#7c69ff"}
        ]
    }
    render () {
        const colStyle = {
            border: '1px solid #e8e8e8',
            borderRadius: '5px',
            padding: 8,
            background: '#fff'
        };
        return (
            <div className="home-view">
                <div className="statistics">
                    {this.state.dataList.map((item, index) => 
                        <div className="data-block-root" key={index} style={{background: `linear-gradient(to left,${item.color},${item.color2})`}}>
                            <div className="bgimg">
                                <div className="icon">
                                    {/* <Icon type={icon}/> */}
                                    <UserAddOutlined />
                                </div>
                                <div className="message">
                                    <div className="count">
                                        <CountUp end={item.count}/>
                                    </div>
                                    <div className="tip">{item.tip}</div>
                                </div>
                            </div>
                        </div>
                    )}  
                </div>
                <Row style={{marginTop: 10}}>
                    <Col span={12} style={{paddingRight: 10}}>
                        <div style={colStyle}>
                            <Map/>
                        </div>

                    </Col>
                    <Col span={12}>
                        <div style={colStyle}>
                            <Bar />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home;