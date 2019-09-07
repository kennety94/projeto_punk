import React, { Component } from 'react';
import Axios from 'axios';
import MainTemplate from '../../template/MainTemplate';
import Header from '../../components/Header/Header';
import BeerList from '../../components/BeerList/BeerList';


class Brewery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beerList: []
        }
    }

    getBeerList = () => {
        let url = "https://api.punkapi.com/v2/beers";
        Axios.get(url)
            .then(({ data }) => {
                this.setState({ beerList: data })
            })
    }

    handleBeerDetail = beerId => {
        this.props.history.push(`/beer-detail/${beerId}`)
    }

    componentDidMount() {
        this.getBeerList();
    }

    render() {
        return (
            <MainTemplate>
                <Header title="Cervejaria"></Header>
                <BeerList
                    handleBeerDetail={this.handleBeerDetail}
                    beers={this.state.beerList}
                />
            </MainTemplate>
        )
    }
}

export default Brewery