import React from 'react'
import "./MainContent.css"
import Grid from '@material-ui/core/Grid'
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'

const MainContent = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
          <div>
            <StatusBar />
            <MainPage />
          </div>
        </Grid>
        <Grid item xs={2}>
          aa
        </Grid>
        <Grid item xs={2}>
          ee
        </Grid>
      </Grid>
    </div>
  )
}

export default MainContent
