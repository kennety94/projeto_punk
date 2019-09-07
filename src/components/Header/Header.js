import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Typography } from '@material-ui/core';

const Header = ({ title, children }) => (
    <header>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Grid container spacing={3}>
            <Grid item sm={12} md >
                <Typography variant="h3" component="h1" gutterBottom>
                    {title}
                </Typography>
            </Grid>
            <Grid item sm={12} md className="text-right" >
                {children}
            </Grid>
        </Grid>
    </header>
)

export default Header