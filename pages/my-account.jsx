import React from "react";
import Container from "~/components/layouts/Container";
import useUser from "~/hooks/useUser";

const MyAccountScreen = () => {
    const { loading, userLogin, userRegister, currentUser } = useUser();

    function handleLoginSubmit(event) {
        event.preventDefault()
        console.log('form submit', event);
        userLogin({
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        })
    }

    function handleRegisterSubmit(event) {
        event.preventDefault()
        console.log('form submit', event);
        if (event.currentTarget.elements.password.value == event.currentTarget.elements.re_password.value) {
            userRegister({
                firstName: event.currentTarget.elements.firstName.value,
                lastName: event.currentTarget.elements.lastName.value,
                email: event.currentTarget.elements.email.value,
                phone: event.currentTarget.elements.phoneNumber.value,
                password: event.currentTarget.elements.password.value,
            })
        }
    }

    console.log('currentUser', currentUser);
    let contentBody;
    if (currentUser) {
        contentBody = (
            <div>
                <p>Logged in:</p>
                <p>Name: {currentUser.first_name} {currentUser.last_name}</p>
                <p>Phone: {currentUser.phone}</p>
                <p>Email: {currentUser.email}</p>
            </div>
        );
    } else {
        contentBody = (
        <div className="row">
            <div className="col-12 col-md-6">
                <form onSubmit={handleLoginSubmit}>
                    <div className="ps-form--review">
                        <h2 className="ps-form__title">
                            Login
                        </h2>
                        <div className="ps-form__group">
                            <label className="ps-form__label">
                                Username or email address *
                            </label>
                            <input
                                className="form-control ps-form__input"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="ps-form__group">
                            <label className="ps-form__label">
                                Password *
                            </label>
                            <div className="input-group">
                                <input
                                    className="form-control ps-form__input"
                                    id="password"
                                    type="password"
                                />
                                <div className="input-group-append">
                                    <a
                                        className="fa fa-eye-slash toogle-password"
                                        href="#"></a>
                                </div>
                            </div>
                        </div>
                        <div className="ps-form__submit">
                            <button className="ps-btn ps-btn--warning">
                                Log in
                            </button>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="remember"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="remember">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <a
                            className="ps-account__link"
                            href="lost-password.html">
                            Lost your password?
                        </a>
                    </div>
                </form>
            </div>
            <div className="col-12 col-md-6">
                <form onSubmit={handleRegisterSubmit}>
                    <div className="ps-form--review">
                        <h2 className="ps-form__title">
                            Register
                        </h2>
                        <div className="ps-form__group">
                            <label className="ps-form__label">
                                First Name *
                            </label>
                            <input
                                className="form-control ps-form__input"
                                id="firstName"
                                type="name"
                            />
                        </div>
                        <div className="ps-form__group">
                            <label className="ps-form__label">
                                Last Name *
                            </label>
                            <input
                                className="form-control ps-form__input"
                                id="lastName"
                                type="name"
                            />
                        </div>
                        <div className="ps-form__group">
                            <label className="ps-form__label">
                                Email address *
                            </label>
                            <input
                                className="form-control ps-form__input"
                                id="email"
                                type="email"
                            />
                        </div>

                        <div className="ps-form__group">
                            <label className="ps-form__label">
                                Phone number *
                            </label>
                            <input
                                className="form-control ps-form__input"
                                id="phoneNumber"
                                type="phone"
                            />
                        </div>
                        <div className="ps-form__group">
                            <label className="ps-form__label">
                                Password *
                            </label>
                            <div className="input-group">
                                <input
                                    className="form-control ps-form__input"
                                    id="password"
                                    type="password"
                                />
                                <div className="input-group-append">
                                    <a
                                        className="fa fa-eye-slash toogle-password"
                                        href="#"></a>
                                </div>
                            </div>
                            
                            <label className="ps-form__label">
                                Re-input Password *
                            </label>
                            <div className="input-group">
                                <input
                                    className="form-control ps-form__input"
                                    id="re_password"
                                    type="password"
                                />
                                <div className="input-group-append">
                                    <a
                                        className="fa fa-eye-slash toogle-password"
                                        href="#"></a>
                                </div>
                            </div>
                            <p className="ps-form__text">
                                Hint: The password should be at
                                least twelve characters long. To
                                make it stronger, use upper and
                                lower case letters, numbers, and
                                symbols like ! " ? $ % ^ &amp;
                                ).
                            </p>
                        </div>
                        <div className="ps-form__submit">
                            <button className="ps-btn ps-btn--warning">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>);
    }

    return (
        <Container title="My Account">
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        {contentBody}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyAccountScreen;
