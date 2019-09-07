import React, { Component } from 'react';
import Axios from 'axios';
import MainTemplate from '../../template/MainTemplate';
import Header from '../../components/Header/Header';
import { Paper, Typography } from '@material-ui/core';

class BeerDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beerDetail: []
        }
    }

    getBeerDetail = () => {
        const beerId = this.props.match.params.beerId;
        Axios.get(`https://api.punkapi.com/v2/beers/${beerId}`).then(({ data }) => {
            this.setState({ beerDetail: data[0] })
        })
    }

    handleHistoryBack = () => {
        this.props.history.push('/')
    }

    componentDidMount() {
        this.getBeerDetail()
    }

    render() {
        const { name, tagline, description, image_url } = this.state.beerDetail
        return (
            <MainTemplate>
                <Header title={name}></Header>
                <Paper className="beer-detail">
                    <Typography gutterBottom variant="h6">
                        {tagline}
                    </Typography>
                    <Typography className="content">
                        {description}
                    </Typography>
                </Paper>
            </MainTemplate>
        )
    }

}

export default BeerDetail