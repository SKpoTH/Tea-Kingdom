import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import {Message, Divider } from 'semantic-ui-react'
import TemplateTKD from "../template/TemplateTKD";
import { getData } from "../API/get"
import AddTrack from "./AddTrack"

const url_get = '/api/tracking/admin/load'

export default class AddTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:
                { massageHidden: true, content: '', status: "" },
            mymessage: []
        }
        this.handleGET()
    }

    async handleGET(){
        const tmp = await getData(url_get)
        this.setState({
          mymessage : tmp.data
        })
        console.log("index this.state : ",this.state)
    }

    render() {
        return (
            <TemplateTKD>
                <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
                <AddTrack DataRender={this.state}/>
                
                <Divider hidden />
                <Divider hidden />
            </TemplateTKD>
        )
    }
}