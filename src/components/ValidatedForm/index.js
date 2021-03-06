import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import SnackBar from '../../ui-components/SnackBar';
import { isEmptyString } from '../../utils';
import { themed } from '../../utils/theme';
import { RED_500, RED_700 } from '../../resources/colors';
import RadioGroup from './components/RadioGroup';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import { InputAdornment } from '@material-ui/core';
import Iconbutton from '../../ui-components/Button/Iconbutton';

const radioOptions = [
    { id: 1, label: 'M' },
    { id: 2, label: 'F' },
    { id: 3, label: 'Other' },
];

export default class ValidatedForm extends React.Component {

    state = {
        fname: '',
        lname: '',
        username: '',
        password: '',
        showPassword: false,
        contact: '',
        email: '',
        address: '',
        age: 18,
        selectedOption: radioOptions[0],
        snack: null
    }

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    handleFirstNameChange = e => {
        const value = e.target.value;
        this.setState({ fname: value, fnameError: isEmptyString(value), fnameErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleLastNameChange = e => {
        const value = e.target.value;
        this.setState({ lname: value, lnameError: isEmptyString(value), lnameErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleUsernameChange = e => {
        const value = e.target.value;
        this.setState({ username: value, usernameError: isEmptyString(value), usernameErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handlePasswordChange = e => {
        const value = e.target.value;

        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const passwordError = isEmptyString(value) || !re.test(value);
        const passwordErrorText = isEmptyString(value) ? 'Field cannot be empty' : !re.test(value) ? 'Password must be atleast 8 characters long, and should contain atleast 1 letter, 1 number and 1 special character' : '';

        this.setState({ password: value, passwordError, passwordErrorText });
    }

    handleContactChange = e => {
        const value = e.target.value;

        const re = /^(\(?\+?[0-9]*\)?)?[0-9_\- ()]*$/;
        const contactError = isEmptyString(value) || !re.test(value);
        const contactErrorText = isEmptyString(value) ? 'Field cannot be empty' : !re.test(value) ? 'Enter a valid contact number' : '';

        this.setState({ contact: value, contactError, contactErrorText });
    }

    handleEmailChange = e => {
        const value = e.target.value;

        const re = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailError = isEmptyString(value) || !re.test(value);
        const emailErrorText = isEmptyString(value) ? 'Field cannot be empty' : !re.test(value) ? 'Enter a valid email' : '';

        this.setState({ email: value, emailError, emailErrorText });
    }

    handleAddressChange = e => {
        const value = e.target.value;
        this.setState({ address: value, addressError: isEmptyString(value), addressErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleAgeChange = e => {
        const value = e.target.value;
        this.setState({ age: value > 12 ? value : this.state.age, ageError: value < 13, ageErrorText: value < 13 ? 'You need to be 13 years or above' : '' });
    }

    handleRadioChange = option => option && this.setState({ selectedOption: option });

    handleSnackClose = () => this.setState({ snack: { ...this.state.snack, open: false } });

    handleShowPassword = () => this.setState({ showPassword: !this.state.showPassword });

    handleSubmit = () => {
        const { fname, lname, username, password, contact, email, address } = this.state;
        if (isEmptyString(fname) || isEmptyString(lname) || isEmptyString(username) || isEmptyString(password) ||
            isEmptyString(contact) || isEmptyString(email) || isEmptyString(address)) {
            this.setState({
                snack: {
                    open: true,
                    severity: 'info',
                    message: 'Please fill out all the details'
                }
            });
        } else this.setState({
            snack: {
                open: true,
                severity: 'success',
                message: 'Your information passes all validation checks'
            }
        }, this.resetFields);
    }

    resetFields = () => this.setState({ fname: '', lname: '', username: '', password: '', contact: '', email: '', address: '', age: 18, selectedOption: radioOptions[0] });

    render = () => {
        const { fname, lname, username, password, showPassword, contact, email, address, age, selectedOption } = this.state;

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.formWrapper}>
                <div className={classes.formContainer}>
                    <div className={classes.heading}>Register Here</div>
                    <div className={classes.info}>This is just a template form, none of the information you fill, will be stored anywhere.</div>
                    <div className={classes.formComponents}>
                        <Input autoComplete='off' id='fname' label='First name' onChange={this.handleFirstNameChange} className={classes.fname}
                            value={fname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.fnameError} helperText={this.state?.fnameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='lname' label='Last name' onChange={this.handleLastNameChange} className={classes.lname}
                            value={lname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.lnameError} helperText={this.state?.lnameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='username' label='Username' onChange={this.handleUsernameChange} className={classes.username}
                            value={username} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.usernameError} helperText={this.state?.usernameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='password' type={showPassword ? 'text' : 'password'} label='Password' onChange={this.handlePasswordChange} className={classes.password}
                            value={password} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.passwordError} helperText={this.state?.passwordErrorText} helpertextcolor={themed(RED_700, RED_500)}
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <Iconbutton iconColor='var(--text)' onClick={() => this.handleShowPassword()} icon={showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}></Iconbutton></InputAdornment>
                            }} />
                        <Input autoComplete='off' id='contact' label='Contact Number' onChange={this.handleContactChange} className={classes.contact}
                            value={contact} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.contactError} helperText={this.state?.contactErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='email' label='Email' onChange={this.handleEmailChange} className={classes.email}
                            value={email} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.emailError} helperText={this.state?.emailErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='address' label='Address' onChange={this.handleAddressChange} className={classes.address}
                            value={address} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} multiline
                            error={this.state.addressError} helperText={this.state?.addressErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <RadioGroup className={classes.group} header='Gender' options={radioOptions} selectedOption={selectedOption} onChange={this.handleRadioChange} />
                        <Input autoComplete='off' id='age' label='Age' type='number' onChange={this.handleAgeChange} className={classes.age}
                            value={age} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.ageError} helperText={this.state?.ageErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <RadioGroup className={classes.group} header='Gender' options={radioOptions} selectedOption={selectedOption} onChange={this.handleRadioChange} />
                    </div>
                    <Button className={classes.submitButton} onClick={() => this.handleSubmit()} labelStyles={{ display: 'inline-flex', padding: 0 }}>Sign Up</Button>
                </div>
            </div>
            {this.state?.snack?.message && <SnackBar message={this.state.snack.message} severity={this.state.snack.severity} handleClose={this.handleSnackClose} open={this.state.snack.open} />}
        </Page>;
    }
}