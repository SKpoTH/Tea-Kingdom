import React, { Component } from 'react'
import TKD from "../template/TemplateTKD"
import { Responsive, Message } from 'semantic-ui-react'
import axios from 'axios'
import Mobile from "./Mobile"
export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message:
                { massageHidden: true, content: '', status: "" },
            id: props.params.id
        }
        this.getData()

        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

    }
    getData = () => {
        var self = this;

        console.log(this.state.id);

        axios.get('/api/edit_profile/load')
            .then((res) => {
                let jsonReturn = res.data;
                if (jsonReturn.status === "found") {
                    self.setState({
                        Fname: jsonReturn.Fname,
                        Lname: jsonReturn.Lname,
                        src: jsonReturn.userImage,
                        email: jsonReturn.email,
                        address: jsonReturn.address,
                        phone: jsonReturn.phone,
                        cantLoad: false
                    })
                    console.log(this.state);

                } else {
                    self.setState({ cantLoad: true });
                    self.setState({
                        message:
                            { massageHidden: false, content: 'Please contact us.', status: "negative" }
                    });
                }

            })
            .catch((error) => {
                self.setState({ cantLoad: true });
                self.setState({
                    message:
                    {
                        massageHidden: false,
                        //content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
                        status: "negative"
                    }
                }
                );
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
                    Tablet
                    </Responsive>
                <Responsive {...Responsive.onlyComputer}>
                    <h1>{this.state.Fname}</h1>
                    </Responsive>
            </TKD>
        );

    }
}