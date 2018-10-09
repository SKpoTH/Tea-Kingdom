import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Grid, Segment, List} from 'semantic-ui-react'
import StickyBox from 'react-sticky-box';
import 'react-sticky-header/styles.css';
// import StickyHeader from 'react-sticky-header';
import '../Tracking/style.css';




class Content extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    // const { contextRef } = this.state

    return (
      <div>
        {/* code here (don't delete <div>) */
        <Grid>

          <Grid.Row>
            <Grid.Column width = {10}>
              <Grid>
                <Grid.Row className = 'table-head'>
                  <Grid.Column width = {5}>
                    <h3>Item</h3>
                  </Grid.Column>
                  <Grid.Column width = {5}>
                    <h3>Amount</h3>
                  </Grid.Column>
                  <Grid.Column width = {6}>
                    <h3>Price</h3>
                  </Grid.Column>

                </Grid.Row>
              </Grid>


              <Segment.Group className = 'table'>
                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Green Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>2</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>300</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Thai Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>9</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>900</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Black Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>7</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>700</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Yellow Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>1</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>10</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>White Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>2</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>600</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Milk Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>10</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>200</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Apple Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>3</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>900</p>
                    </Grid.Column>
                  </Grid>
                </Segment>
                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Green Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>2</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>300</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Thai Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>9</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>900</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Black Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>7</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>700</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Yellow Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>1</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>10</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>White Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>2</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>600</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Milk Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>10</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>200</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment>
                  <Grid>
                    <Grid.Column width = {5}>
                      <p>Apple Tea</p>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                      <p>3</p>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                      <p>900</p>
                    </Grid.Column>
                  </Grid>
                </Segment>

              </Segment.Group>

              <Grid>
                <Grid.Row>
                  <Grid.Column width = {5}>
                    <h3 >Total</h3>
                  </Grid.Column>
                  <Grid.Column width = {5}>
                    {/* <h3></h3> */}
                  </Grid.Column>
                  <Grid.Column width = {6}>
                    <h4>399</h4>
                  </Grid.Column>
                </Grid.Row>
              </Grid>


            </Grid.Column>
            <Grid.Column width = {6} id = "tracking-sidebar">

              <StickyBox className="sidebar">
                <div className = 'status-containter'>
                  <List className = 'status'>
                    <List.Item>
                      <List.Icon name='marker' />
                      <List.Content>Current Location :  Bangkok</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='truck' />
                      <List.Content>Transport Agency : Kerry</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='clock outline' />
                      <List.Content>Estimated Time : 5 days</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='linkify' />
                      <List.Content>
                        <a href='http://www.semantic-ui.com'>Package Tracking</a>
                      </List.Content>
                    </List.Item>
                  </List>
                </div>

                <br></br>
                <br></br>

                <div className = 'tracking-number'>
                  <h4>Tracking Number</h4>
                  <h1>1Q2W3E4R</h1>
                </div>

                <br></br>
                <br></br>

              </StickyBox>

            </Grid.Column>
          </Grid.Row>


          <div className = 'tracking-policy'>
            <h5>Tracking Policy</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deseruntes... <a>more</a></p>
          </div>
        </Grid>




        }
      </div>
    );
  }
}

export default class Tracking extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}
