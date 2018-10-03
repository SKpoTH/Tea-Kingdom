import React, { Component } from 'react';

import './ProductDetail.css';

import { Image, Container, Card, Header, Grid } from 'semantic-ui-react';

const Products = () => (
    <Container className='setMargin'>
        <Header as='h2'>Related item</Header>
        <Grid>
        <Grid.Row columns={4}>
            <Grid.Column>
                <Card>
                    <Image src='/imgs/green_tea.jpg' />
                    <Card.Content>
                        <Card.Header>Green Tea</Card.Header>
                        <Card.Meta>$ 500</Card.Meta>
                        <Card.Description>Nice this make me feel relax</Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card 
                    image='/imgs/green_tea.jpg'
                    header='Green Tea'
                    meta='$ 400'
                    description='Nice this make me feel relax'
                />
            </Grid.Column>
            <Grid.Column>
                <Card>
                    <Image src='/imgs/green_tea.jpg' />
                    <Card.Content>
                        <Card.Header>Green Tea</Card.Header>
                        <Card.Meta>$ 500</Card.Meta>
                        <Card.Description>Nice this make me feel relax</Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card>
                    <Image src='/imgs/green_tea.jpg' />
                    <Card.Content>
                        <Card.Header>Green Tea</Card.Header>
                        <Card.Meta>$ 500</Card.Meta>
                        <Card.Description>Nice this make me feel relax</Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Container>
)

export default class SubProduct extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
             <Products />
        );
    }
} 