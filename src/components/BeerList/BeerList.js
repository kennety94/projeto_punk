import React from 'react'
import { Button, Card, CardActions, CardMedia, CardContent, Grid, Typography } from '@material-ui/core'
import { Info } from '@material-ui/icons';
import './BeerList.style.css'


const BeerList = ({ handleBeerDetail, beers }) => {
    const handleDetailClick = beerId => () => handleBeerDetail(beerId)

    return (
        <Grid container justify="center" spacing={3}>
            {beers.map(beer =>
                <Grid item sm={12} md={6} lg={3} key={beer.id}>
                    <Card className="card">
                        <CardMedia
                            className="cardMedia"
                            image={beer.image_url}
                            title="Teste"
                        />
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5">
                                {beer.name}
                            </Typography>
                            <Typography>
                                {beer.tagline}
                            </Typography>
                        </CardContent>
                        <CardActions className="footer">
                            <Button size="small" onClick={handleDetailClick(beer.id)}>
                                <Info /> Detalhes
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )}
        </Grid>
    )
}

export default BeerList