import React from 'react'
import axios from 'axios'
import { Router, Route, Link, browserHistory } from 'react-router'
import HotspotList from '../../component/Hotspot/hotspotList.jsx'
import HotspotForm from '../../component/Hotspot/hotspotForm.jsx'
import {Tabs, Tab} from 'material-ui/Tabs'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'

export default class HotspotPage extends React.Component {

  constructor (props) {
    super(props)

    this.state = {

    }

    this.getHotspotList = this.getHotspotList.bind(this)
  }

  getHotspotList () {
    axios.get('/api/hotspots')
      .then((response) => {
        this.setState({ hotspots: response.data })
      })
      .catch((error) => {
        console.log(`Error in axios hotspot list get: ${error}`)
      })
  }

  render () {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      }
    }
    return (
      <div>
      <Tabs id="hotspot-tab-foundation">
        <Tab label="Form" >
          <div>
            <h2 style={styles.headline}></h2>
            <div>
              <HotspotForm />
            </div>
          </div>
        </Tab>
        <Tab onClick={this.getHotspotList} label="List" >
          <div>
            <h2 style={styles.headline}></h2>
            <HotspotList />
          </div>
        </Tab>

      </Tabs>
      </div>
    )
  }

}