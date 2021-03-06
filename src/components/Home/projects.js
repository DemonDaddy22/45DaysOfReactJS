import todosDarkImage from '../../images/todos_dark.jpg';
import todosLightImage from '../../images/todos_light.jpg';
import pricingDarkImage from '../../images/pricing_dark.jpg';
import pricingLightImage from '../../images/pricing_light.jpg';
import calculatorDarkImage from '../../images/calculator_dark.jpg';
import calculatorLightImage from '../../images/calculator_light.jpg';
import pickerDarkImage from '../../images/picker_dark.jpg';
import pickerLightImage from '../../images/picker_light.jpg';
import profileViewerDarkImage from '../../images/profile_viewer_dark.jpg';
import profileViewerLightImage from '../../images/profile_viewer_light.jpg';
import gameDarkImage from '../../images/game_dark.jpg';
import gameLightImage from '../../images/game_light.jpg';
import passwordDarkImage from '../../images/password_dark.jpg';
import passwordLightImage from '../../images/password_light.jpg';
import jokesDarkImage from '../../images/jokes_dark.jpg';
import jokesLightImage from '../../images/jokes_light.jpg';
import hoverboardDarkImage from '../../images/hoverboard_dark.jpg';
import hoverboardLightImage from '../../images/hoverboard_light.jpg';
import keycodeDarkImage from '../../images/keycode_dark.jpg';
import keycodeLightImage from '../../images/keycode_light.jpg';
import quotesDarkImage from '../../images/quotes_dark.jpg';
import quotesLightImage from '../../images/quotes_light.jpg';
import carouselDarkImage from '../../images/carousel_dark.jpg';
import carouselLightImage from '../../images/carousel_light.jpg';
import mealDarkImage from '../../images/meal_dark.jpg';
import mealLightImage from '../../images/meal_light.jpg';
import billDarkImage from '../../images/bill_dark.jpg';
import billLightImage from '../../images/bill_light.jpg';
import formDarkImage from '../../images/form_dark.jpg';
import formLightImage from '../../images/form_light.jpg';
import gridDarkImage from '../../images/grid_dark.jpg';
import gridLightImage from '../../images/grid_light.jpg';
import pokedexDarkImage from '../../images/pokedex_dark.jpg';
import pokedexLightImage from '../../images/pokedex_light.jpg';
import twitterDarkImage from '../../images/twitter_dark.jpg';
import twitterLightImage from '../../images/twitter_light.jpg';
import pollDarkImage from '../../images/poll_dark.jpg';
import pollLightImage from '../../images/poll_light.jpg';
import skeletonDarkImage from '../../images/skeleton_dark.jpg';
import skeletonLightImage from '../../images/skeleton_light.jpg';
import { BASE_URL } from '../../resources/constants';

export const projects = [
    { sequence: '1', title: 'Todos Manager', imageLight: todosLightImage, imageDark: todosDarkImage, projectPath: `${BASE_URL}/#/todos`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Todos' },
    { sequence: '2', title: 'Pricing Cards', imageLight: pricingLightImage, imageDark: pricingDarkImage, projectPath: `${BASE_URL}/#/pricing-cards`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/PricingCards' },
    { sequence: '3', title: 'Calculator', imageLight: calculatorLightImage, imageDark: calculatorDarkImage, projectPath: `${BASE_URL}/#/calculator`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Calculator' },
    { sequence: '4', title: 'Color Picker', imageLight: pickerLightImage, imageDark: pickerDarkImage, projectPath: `${BASE_URL}/#/color-picker`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/ColorPicker' },
    { sequence: '5', title: 'GitHub Profile Viewer', imageLight: profileViewerLightImage, imageDark: profileViewerDarkImage, projectPath: `${BASE_URL}/#/github-profile-viewer`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/GitHubProfileViewer' },
    { sequence: '6', title: 'Stone-Paper-Scissor', imageLight: gameLightImage, imageDark: gameDarkImage, projectPath: `${BASE_URL}/#/stone-paper-scissor`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/StonePaperScissor' },
    { sequence: '7', title: 'Password-Generator', imageLight: passwordLightImage, imageDark: passwordDarkImage, projectPath: `${BASE_URL}/#/password-generator`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/PasswordGenerator' },
    { sequence: '8', title: 'Random Jokes', imageLight: jokesLightImage, imageDark: jokesDarkImage, projectPath: `${BASE_URL}/#/random-jokes`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/RandomJokes' },
    { sequence: '9', title: 'Hover Board', imageLight: hoverboardLightImage, imageDark: hoverboardDarkImage, projectPath: `${BASE_URL}/#/hoverboard`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/HoverBoard' },
    { sequence: '10', title: 'Key Code Sequence', imageLight: keycodeLightImage, imageDark: keycodeDarkImage, projectPath: `${BASE_URL}/#/keycode-sequence`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/KeyCodeSequence' },
    { sequence: '11', title: 'Random Quotes', imageLight: quotesLightImage, imageDark: quotesDarkImage, projectPath: `${BASE_URL}/#/random-quotes`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/RandomQuotes' },
    { sequence: '12', title: 'Image Carousel', imageLight: carouselLightImage, imageDark: carouselDarkImage, projectPath: `${BASE_URL}/#/carousel`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Carousel' },
    { sequence: '13', title: 'Meal Generator', imageLight: mealLightImage, imageDark: mealDarkImage, projectPath: `${BASE_URL}/#/meal-generator`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/MealGenerator' },
    { sequence: '14', title: 'Bill Generator', imageLight: billLightImage, imageDark: billDarkImage, projectPath: `${BASE_URL}/#/bill-generator`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/BillGenerator' },
    { sequence: '15', title: 'Validated Form', imageLight: formLightImage, imageDark: formDarkImage, projectPath: `${BASE_URL}/#/form`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/ValidatedForm' },
    { sequence: '16', title: 'Alternate Grid', imageLight: gridLightImage, imageDark: gridDarkImage, projectPath: `${BASE_URL}/#/grid`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/AlternateGrid' },
    { sequence: '17', title: 'Pokédex', imageLight: pokedexLightImage, imageDark: pokedexDarkImage, projectPath: `${BASE_URL}/#/pokedex`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Pokedex' },
    { sequence: '18', title: 'Twitter UI Clone', imageLight: twitterLightImage, imageDark: twitterDarkImage, projectPath: `${BASE_URL}/#/twitter-ui`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/TwitterUIClone' },
    { sequence: '19', title: 'Voting Poll', imageLight: pollLightImage, imageDark: pollDarkImage, projectPath: `${BASE_URL}/#/voting-poll`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/VotingPoll' },
    { sequence: '20', title: 'Skeleton Loader', imageLight: skeletonLightImage, imageDark: skeletonDarkImage, projectPath: `${BASE_URL}/#/skeleton-loader`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/SkeletonLoader' },
];