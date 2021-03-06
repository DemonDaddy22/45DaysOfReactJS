import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { getPathValue, handleError, isEmptyObject, isEmptyString } from '../../utils';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import SpinnerLoader from '../../ui-components/SpinnerLoader';
import Button from '../../ui-components/Button';
import SnackBar from '../../ui-components/SnackBar';

export default class MealGenerator extends React.Component {

    state = {
        loader: true,
        mealData: null
    }

    componentDidMount = () => {
        this.fetchMealData();
    }

    fetchMealData = () => this.setState({ loader: true }, () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState({
            loader: false, mealData: data['meals'][0],
            ingredients: this.getIngredients(data['meals'][0]), measurements: this.getMeasurements(data['meals'][0]),
            tags: this.getTags(data['meals'][0]), snack: null
        }))
        .catch(error => this.setState({
            loader: false, mealData: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        })));

    getIngredients = meal => {
        if (isEmptyObject(meal)) return null;
        let ingredients = {};
        for (let key in meal) {
            if (key.includes('strIngredient') && !isEmptyString(meal[key])) {
                const ingredientKey = key.replace('strIngredient', '');
                ingredients[ingredientKey] = meal[key];
            }
        }
        return ingredients;
    }

    getMeasurements = meal => {
        if (isEmptyObject(meal)) return null;
        let measurements = {};
        for (let key in meal) {
            if (key.includes('strMeasure') && !isEmptyString(meal[key])) {
                const measurementKey = key.replace('strMeasure', '');
                measurements[measurementKey] = meal[key];
            }
        }
        return measurements
    }

    getTags = meal => {
        if (!getPathValue(meal, 'strTags')) return null;
        const tags = isEmptyString(meal['strTags']) ? [] : meal['strTags'].split(',');
        return tags;
    }

    handleButtonClick = url => !isEmptyString(url) && window.open(url);

    handleSnackClose = () => this.setState({ snack: { ...this.state.snack, open: false } });

    render = () => {
        const { loader, mealData, tags, ingredients, measurements } = this.state;

        return <Page>
            <div className={`${classes.loader} ${!this.state.loader && classes.hideLoader}`}><SpinnerLoader /></div>
            {mealData && <>
                <div className={classes.title}>Munch Time</div>
                <div className={classes.subtitle}><em>Something new. Something <span style={{ fontWeight: 600, color: 'var(--secondary-theme-color)' }}>delish</span>.</em></div>
                <div className={classes.buttonWrapper}>
                    <Button variant='outlined' borderColor='var(--secondary-theme-color)' labelColor='var(--secondary-theme-color)' backgroundColor='var(--secondary-theme-color)'
                        onClick={() => this.fetchMealData()} labelStyles={{ display: 'inline-flex', padding: '0 1rem' }}>Get Random Meal</Button>
                </div>
                <div className={classes.container}>
                    <div className={classes.secondarySection}>
                        {mealData?.strMealThumb && <img src={mealData.strMealThumb} alt='meal-preview' className={classes.mealImage} />}
                        {tags && <div className={classes.tagsWrapper}>
                            {tags.map((tag, index) => !isEmptyString(tag) && <div key={`tag-${index}`} className={classes.mealTag}>{tag}</div>)}
                        </div>}
                    </div>
                    <div className={classes.primarySection}>
                        <div className={classes.mealTitleWrapper}>
                            {mealData?.strMeal && <div className={classes.mealTitle}>{mealData.strMeal}</div>}
                            {(mealData?.strYoutube || mealData?.strSource) && <div className={classes.sourceButtonsWrapper}>
                                {mealData?.strYoutube && <Iconbutton iconColor='inherit' onClick={() => this.handleButtonClick(mealData.strYoutube)} icon={<YouTubeIcon fontSize='default' />} style={{ marginRight: 2 }}></Iconbutton>}
                                {mealData?.strSource && <Iconbutton iconColor='inherit' onClick={() => this.handleButtonClick(mealData.strSource)} icon={<FastfoodRoundedIcon fontSize='default' />} ></Iconbutton>}
                            </div>}
                        </div>
                        {mealData?.strMeal && <div className={classes.divider}></div>}
                        {ingredients && measurements && <>
                            <div className={classes.ingredientsTitle}>Ingredients</div>
                            <div className={classes.ingredients}>
                                {Object.keys(ingredients).map((entry, index) => <div key={`ingredient-${index + 1}`} className={classes.ingredient}>
                                    {index + 1}. <div className={classes.ingredientName}><strong>{ingredients[entry]}</strong></div> - <div className={classes.measurement}><em>{getPathValue(measurements, entry, 'according to taste')}</em></div>
                                </div>)}
                            </div>
                        </>}
                        {mealData?.strInstructions && <>
                            <div className={classes.instructionsTitle}>Instructions</div>
                            <div className={classes.instructions}>{mealData.strInstructions}</div>
                        </>}
                    </div>
                </div>
            </>}
            {!loader && !mealData && <div className={classes.noData}>Something went wrong, please refresh the page!</div>}
            {this.state?.snack?.message && <SnackBar message={this.state.snack.message} severity={this.state.snack.severity} handleClose={this.handleSnackClose} open={this.state.snack.open} />}
        </Page>
    }
}