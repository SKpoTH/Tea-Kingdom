import React, { Component } from 'react'
import TKD from "../template/TemplateTKD"
import { Responsive, Message } from 'semantic-ui-react'
import axios from 'axios'
import Mobile from "./Mobile"
import Computer from "./computer";

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message:
                { massageHidden: true, content: '', status: "" },
            id: props.params.id
        }
        this.getData()


    }

    contactUs() {
        this.setState({ cantLoad: true });
        this.setState({
            message:
                { massageHidden: false, content: 'Please contact us.', status: "negative" }
        });

    }

    cantLoad() {
        this.setState({ cantLoad: true });
        this.setState({
            message:
            {
                massageHidden: false,
                status: "negative"
            }
        }
        );

    }

    getData = () => {
        var self = this;

        axios.get('/api/userData/load', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                let jsonReturn = res.data.data;
                console.log(res.data.status);

                if (res.data.status === "Successfully Load User Data") {
                    self.setState({
                        Fname: jsonReturn.firstname,        //fix Fname -> firstname
                        Lname: jsonReturn.lastname,         //fix too
                        src: jsonReturn.profileImage,       //fix too
                        email: jsonReturn.email,
                        address: jsonReturn.address,
                        phone: jsonReturn.phone,
                        cantLoad: false
                    })
                    //unsuccess load data
                    console.log(this.state);

                } else {
                    this.contactUs()
                }
            })
            .catch((error) => {
                this.cantLoad()
            });
    };



    render() {
        return (
            <TKD>
                <Responsive {...Responsive.onlyMobile}>
                    <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
                    {this.state.cantLoad ? null : <Mobile data={this.state} />}
                </Responsive>

                <Responsive {...Responsive.onlyTablet}>
                    <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
                    {this.state.cantLoad ? null : <Computer data={this.state} />}
                </Responsive>

                <Responsive {...Responsive.onlyComputer}>
                    <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
                    {this.state.cantLoad ? null : <Computer data={this.state} />}
                </Responsive>
            </TKD>
        );

    }
}