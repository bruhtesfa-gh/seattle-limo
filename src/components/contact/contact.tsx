import React from "react";
import './contact.css';
import axios from "axios";
import { toast } from 'react-toastify';
const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');
    const messageHandler = (e: any) => {
        e.preventDefault();
        const phoneregex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
        const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name === '') {
            toast.error('Please enter name');
            return false;
        } else if (emailregex.test(email) === false) {
            toast.error('Please enter valid email');
            return false;
        } else if (phoneregex.test(phone) === false) {
            toast.error('Please enter valid phone number');
            return false;
        } else if (message === '') {
            toast.error('Please enter message');
            return false;
        }

        axios.post(
            'https://limo-backend.onrender.com/mail',
            {
                name,
                email,
                phone,
                message
            }
        ).then((response) => {
            toast.success('Message sent successfully');
            window.location.reload();
            console.log(response);
        }, (error) => {
            toast.error('Something went wrong');
            console.log(error);
        });
    };
    return <>
        <div
            data-elementor-type="wp-page"
            data-elementor-id={74}
            className="elementor elementor-74"
            data-elementor-post-type="page"
        >
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-38fe6bd7 elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                data-id="38fe6bd7"
                data-element_type="section"
                data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
            >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-217b523d"
                        data-id="217b523d"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-2c94b38a elementor-widget elementor-widget-heading"
                                data-id="2c94b38a"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                "\n                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                    .elementor-heading-title {\n                                        padding: 0;\n                                        margin: 0;\n                                        line-height: 1\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n                                        color: inherit;\n                                        font-size: inherit;\n                                        line-height: inherit\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-small {\n                                        font-size: 15px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n                                        font-size: 19px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-large {\n                                        font-size: 29px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n                                        font-size: 39px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n                                        font-size: 59px\n                                    }\n\n                                "
                                        }}
                                    />
                                    <span className="elementor-heading-title elementor-size-default">
                                        C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-40848877"
                        data-id={40848877}
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-b86299e elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="b86299e"
                                data-element_type="widget"
                                data-widget_type="divider.default"
                            >
                                <div className="elementor-widget-container">
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                '\n                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                    .elementor-widget-divider {\n                                        --divider-border-style: none;\n                                        --divider-border-width: 1px;\n                                        --divider-color: #0c0d0e;\n                                        --divider-icon-size: 20px;\n                                        --divider-element-spacing: 10px;\n                                        --divider-pattern-height: 24px;\n                                        --divider-pattern-size: 20px;\n                                        --divider-pattern-url: none;\n                                        --divider-pattern-repeat: repeat-x\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider {\n                                        display: flex\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider__text {\n                                        font-size: 15px;\n                                        line-height: 1;\n                                        max-width: 95%\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider__element {\n                                        margin: 0 var(--divider-element-spacing);\n                                        flex-shrink: 0\n                                    }\n\n                                    .elementor-widget-divider .elementor-icon {\n                                        font-size: var(--divider-icon-size)\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider-separator {\n                                        display: flex;\n                                        margin: 0;\n                                        direction: ltr\n                                    }\n\n                                    .elementor-widget-divider--view-line_icon .elementor-divider-separator,\n                                    .elementor-widget-divider--view-line_text .elementor-divider-separator {\n                                        align-items: center\n                                    }\n\n                                    .elementor-widget-divider--view-line_icon .elementor-divider-separator:after,\n                                    .elementor-widget-divider--view-line_icon .elementor-divider-separator:before,\n                                    .elementor-widget-divider--view-line_text .elementor-divider-separator:after,\n                                    .elementor-widget-divider--view-line_text .elementor-divider-separator:before {\n                                        display: block;\n                                        content: "";\n                                        border-bottom: 0;\n                                        flex-grow: 1;\n                                        border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n                                    }\n\n                                    .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type {\n                                        flex-grow: 0;\n                                        flex-shrink: 100\n                                    }\n\n                                    .elementor-widget-divider--element-align-left .elementor-divider-separator:before {\n                                        content: none\n                                    }\n\n                                    .elementor-widget-divider--element-align-left .elementor-divider__element {\n                                        margin-left: 0\n                                    }\n\n                                    .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type {\n                                        flex-grow: 0;\n                                        flex-shrink: 100\n                                    }\n\n                                    .elementor-widget-divider--element-align-right .elementor-divider-separator:after {\n                                        content: none\n                                    }\n\n                                    .elementor-widget-divider--element-align-right .elementor-divider__element {\n                                        margin-right: 0\n                                    }\n\n                                    .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {\n                                        border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n                                    }\n\n                                    .elementor-widget-divider--separator-type-pattern {\n                                        --divider-border-style: none\n                                    }\n\n                                    .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,\n                                    .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,\n                                    .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,\n                                    .elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {\n                                        width: 100%;\n                                        min-height: var(--divider-pattern-height);\n                                        -webkit-mask-size: var(--divider-pattern-size) 100%;\n                                        mask-size: var(--divider-pattern-size) 100%;\n                                        -webkit-mask-repeat: var(--divider-pattern-repeat);\n                                        mask-repeat: var(--divider-pattern-repeat);\n                                        background-color: var(--divider-color);\n                                        -webkit-mask-image: var(--divider-pattern-url);\n                                        mask-image: var(--divider-pattern-url)\n                                    }\n\n                                    .elementor-widget-divider--no-spacing {\n                                        --divider-pattern-size: auto\n                                    }\n\n                                    .elementor-widget-divider--bg-round {\n                                        --divider-pattern-repeat: round\n                                    }\n\n                                    .rtl .elementor-widget-divider .elementor-divider__text {\n                                        direction: rtl\n                                    }\n\n                                    .e-con-inner>.elementor-widget-divider,\n                                    .e-con>.elementor-widget-divider {\n                                        width: var(--container-widget-width, 100%);\n                                        --flex-grow: var(--container-widget-flex-grow)\n                                    }\n\n                                '
                                        }}
                                    />
                                    <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-644a9b67 elementor-widget elementor-widget-heading"
                                data-id="644a9b67"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h1 className="elementor-heading-title elementor-size-default">
                                        Contact
                                    </h1>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-18b2d97b elementor-widget elementor-widget-heading"
                                data-id="18b2d97b"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <span className="elementor-heading-title elementor-size-default">
                                        Luxury chauffeured transportation services for
                                    </span>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-111db30e elementor-widget elementor-widget-spacer"
                                data-id="111db30e"
                                data-element_type="widget"
                                data-widget_type="spacer.default"
                            >
                                <div className="elementor-widget-container">
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                "\n                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                    .elementor-column .elementor-spacer-inner {\n                                        height: var(--spacer-size)\n                                    }\n\n                                    .e-con {\n                                        --container-widget-width: 100%\n                                    }\n\n                                    .e-con-inner>.elementor-widget-spacer,\n                                    .e-con>.elementor-widget-spacer {\n                                        width: var(--container-widget-width, var(--spacer-size));\n                                        --align-self: var(--container-widget-align-self, initial);\n                                        --flex-shrink: 0\n                                    }\n\n                                    .e-con-inner>.elementor-widget-spacer>.elementor-widget-container,\n                                    .e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,\n                                    .e-con>.elementor-widget-spacer>.elementor-widget-container,\n                                    .e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer {\n                                        height: 100%\n                                    }\n\n                                    .e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,\n                                    .e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner {\n                                        height: var(--container-widget-height, var(--spacer-size))\n                                    }\n\n                                "
                                        }}
                                    />
                                    <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-635bd9fa elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="635bd9fa"
                                data-element_type="widget"
                                data-widget_type="divider.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3452ec09 elementor-section-content-middle elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3452ec09"
                data-element_type="section"
                data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3a4c8d95"
                        data-id="3a4c8d95"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-2f46794e elementor-button-align-stretch elementor-widget elementor-widget-form"
                                data-id="2f46794e"
                                data-element_type="widget"
                                data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                                data-widget_type="form.default"
                            >
                                <div className="elementor-widget-container">
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                '\n                                    /*! elementor-pro - v3.14.0 - 26-06-2023 */\n                                    .elementor-button.elementor-hidden,\n                                    .elementor-hidden {\n                                        display: none\n                                    }\n\n                                    .e-form__step {\n                                        width: 100%\n                                    }\n\n                                    .e-form__step:not(.elementor-hidden) {\n                                        display: flex;\n                                        flex-wrap: wrap\n                                    }\n\n                                    .e-form__buttons {\n                                        flex-wrap: wrap\n                                    }\n\n                                    .e-form__buttons,\n                                    .e-form__buttons__wrapper {\n                                        display: flex\n                                    }\n\n                                    .e-form__indicators {\n                                        display: flex;\n                                        justify-content: space-between;\n                                        align-items: center;\n                                        flex-wrap: nowrap;\n                                        font-size: 13px;\n                                        margin-bottom: var(--e-form-steps-indicators-spacing)\n                                    }\n\n                                    .e-form__indicators__indicator {\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center;\n                                        justify-content: center;\n                                        flex-basis: 0;\n                                        padding: 0 var(--e-form-steps-divider-gap)\n                                    }\n\n                                    .e-form__indicators__indicator__progress {\n                                        width: 100%;\n                                        position: relative;\n                                        background-color: var(--e-form-steps-indicator-progress-background-color);\n                                        border-radius: var(--e-form-steps-indicator-progress-border-radius);\n                                        overflow: hidden\n                                    }\n\n                                    .e-form__indicators__indicator__progress__meter {\n                                        width: var(--e-form-steps-indicator-progress-meter-width, 0);\n                                        height: var(--e-form-steps-indicator-progress-height);\n                                        line-height: var(--e-form-steps-indicator-progress-height);\n                                        padding-right: 15px;\n                                        border-radius: var(--e-form-steps-indicator-progress-border-radius);\n                                        background-color: var(--e-form-steps-indicator-progress-color);\n                                        color: var(--e-form-steps-indicator-progress-meter-color);\n                                        text-align: right;\n                                        transition: width .1s linear\n                                    }\n\n                                    .e-form__indicators__indicator:first-child {\n                                        padding-left: 0\n                                    }\n\n                                    .e-form__indicators__indicator:last-child {\n                                        padding-right: 0\n                                    }\n\n                                    .e-form__indicators__indicator--state-inactive {\n                                        color: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)\n                                    }\n\n                                    .e-form__indicators__indicator--state-inactive [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n                                        background-color: var(--e-form-steps-indicator-inactive-secondary-color, #fff)\n                                    }\n\n                                    .e-form__indicators__indicator--state-inactive object,\n                                    .e-form__indicators__indicator--state-inactive svg {\n                                        fill: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)\n                                    }\n\n                                    .e-form__indicators__indicator--state-active {\n                                        color: var(--e-form-steps-indicator-active-primary-color, #39b54a);\n                                        border-color: var(--e-form-steps-indicator-active-secondary-color, #fff)\n                                    }\n\n                                    .e-form__indicators__indicator--state-active [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n                                        background-color: var(--e-form-steps-indicator-active-secondary-color, #fff)\n                                    }\n\n                                    .e-form__indicators__indicator--state-active object,\n                                    .e-form__indicators__indicator--state-active svg {\n                                        fill: var(--e-form-steps-indicator-active-primary-color, #39b54a)\n                                    }\n\n                                    .e-form__indicators__indicator--state-completed {\n                                        color: var(--e-form-steps-indicator-completed-secondary-color, #fff)\n                                    }\n\n                                    .e-form__indicators__indicator--state-completed [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n                                        background-color: var(--e-form-steps-indicator-completed-primary-color, #39b54a)\n                                    }\n\n                                    .e-form__indicators__indicator--state-completed .e-form__indicators__indicator__label {\n                                        color: var(--e-form-steps-indicator-completed-primary-color, #39b54a)\n                                    }\n\n                                    .e-form__indicators__indicator--state-completed .e-form__indicators__indicator--shape-none {\n                                        color: var(--e-form-steps-indicator-completed-primary-color, #39b54a);\n                                        background-color: initial\n                                    }\n\n                                    .e-form__indicators__indicator--state-completed object,\n                                    .e-form__indicators__indicator--state-completed svg {\n                                        fill: var(--e-form-steps-indicator-completed-secondary-color, #fff)\n                                    }\n\n                                    .e-form__indicators__indicator__icon {\n                                        width: var(--e-form-steps-indicator-padding, 30px);\n                                        height: var(--e-form-steps-indicator-padding, 30px);\n                                        font-size: var(--e-form-steps-indicator-icon-size);\n                                        border-width: 1px;\n                                        border-style: solid;\n                                        display: flex;\n                                        justify-content: center;\n                                        align-items: center;\n                                        overflow: hidden;\n                                        margin-bottom: 10px\n                                    }\n\n                                    .e-form__indicators__indicator__icon img,\n                                    .e-form__indicators__indicator__icon object,\n                                    .e-form__indicators__indicator__icon svg {\n                                        width: var(--e-form-steps-indicator-icon-size);\n                                        height: auto\n                                    }\n\n                                    .e-form__indicators__indicator__icon .e-font-icon-svg {\n                                        height: 1em\n                                    }\n\n                                    .e-form__indicators__indicator__number {\n                                        width: var(--e-form-steps-indicator-padding, 30px);\n                                        height: var(--e-form-steps-indicator-padding, 30px);\n                                        border-width: 1px;\n                                        border-style: solid;\n                                        display: flex;\n                                        justify-content: center;\n                                        align-items: center;\n                                        margin-bottom: 10px\n                                    }\n\n                                    .e-form__indicators__indicator--shape-circle {\n                                        border-radius: 50%\n                                    }\n\n                                    .e-form__indicators__indicator--shape-square {\n                                        border-radius: 0\n                                    }\n\n                                    .e-form__indicators__indicator--shape-rounded {\n                                        border-radius: 5px\n                                    }\n\n                                    .e-form__indicators__indicator--shape-none {\n                                        border: 0\n                                    }\n\n                                    .e-form__indicators__indicator__label {\n                                        text-align: center\n                                    }\n\n                                    .e-form__indicators__indicator__separator {\n                                        width: 100%;\n                                        height: var(--e-form-steps-divider-width);\n                                        background-color: #babfc5\n                                    }\n\n                                    .e-form__indicators--type-icon,\n                                    .e-form__indicators--type-icon_text,\n                                    .e-form__indicators--type-number,\n                                    .e-form__indicators--type-number_text {\n                                        align-items: flex-start\n                                    }\n\n                                    .e-form__indicators--type-icon .e-form__indicators__indicator__separator,\n                                    .e-form__indicators--type-icon_text .e-form__indicators__indicator__separator,\n                                    .e-form__indicators--type-number .e-form__indicators__indicator__separator,\n                                    .e-form__indicators--type-number_text .e-form__indicators__indicator__separator {\n                                        margin-top: calc(var(--e-form-steps-indicator-padding, 30px) / 2 - var(--e-form-steps-divider-width, 1px) / 2)\n                                    }\n\n                                    .elementor-field-type-hidden {\n                                        display: none\n                                    }\n\n                                    .elementor-field-type-html {\n                                        display: inline-block\n                                    }\n\n                                    .elementor-login .elementor-lost-password,\n                                    .elementor-login .elementor-remember-me {\n                                        font-size: .85em\n                                    }\n\n                                    .elementor-field-type-recaptcha_v3 .elementor-field-label {\n                                        display: none\n                                    }\n\n                                    .elementor-field-type-recaptcha_v3 .grecaptcha-badge {\n                                        z-index: 1\n                                    }\n\n                                    .elementor-button .elementor-form-spinner {\n                                        order: 3\n                                    }\n\n                                    .elementor-form .elementor-button>span {\n                                        display: flex;\n                                        justify-content: center;\n                                        align-items: center\n                                    }\n\n                                    .elementor-form .elementor-button .elementor-button-text {\n                                        white-space: normal;\n                                        flex-grow: 0\n                                    }\n\n                                    .elementor-form .elementor-button svg {\n                                        height: auto\n                                    }\n\n                                    .elementor-form .elementor-button .e-font-icon-svg {\n                                        height: 1em\n                                    }\n\n                                    .elementor-select-wrapper .select-caret-down-wrapper {\n                                        position: absolute;\n                                        top: 50%;\n                                        transform: translateY(-50%);\n                                        inset-inline-end: 10px;\n                                        pointer-events: none;\n                                        font-size: 11px\n                                    }\n\n                                    .elementor-select-wrapper .select-caret-down-wrapper svg {\n                                        display: unset;\n                                        width: 1em;\n                                        aspect-ratio: unset;\n                                        fill: currentColor\n                                    }\n\n                                    .elementor-select-wrapper .select-caret-down-wrapper i {\n                                        font-size: 19px;\n                                        line-height: 2\n                                    }\n\n                                    .elementor-select-wrapper.remove-before:before {\n                                        content: "" !important\n                                    }\n\n                                '
                                        }}
                                    />
                                    <form className="elementor-form" >
                                        <div className="elementor-form-fields-wrapper elementor-labels-">
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                                <label
                                                    htmlFor="form-field-name"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Name{" "}
                                                </label>
                                                <input
                                                    size={1}
                                                    type="text"
                                                    name="form_fields[name]"
                                                    id="form-field-name"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    placeholder="Name"
                                                    required={true}
                                                    onChange={(e) => { setName(e.target.value) }}
                                                />
                                            </div>
                                            <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                                                <label
                                                    htmlFor="form-field-email"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Email{" "}
                                                </label>
                                                <input
                                                    size={1}
                                                    type="email"
                                                    name="form_fields[email]"
                                                    id="form-field-email"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    placeholder="Email"
                                                    required={true}
                                                    aria-required="true"
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                />
                                            </div>
                                            <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_3 elementor-col-100 elementor-field-required">
                                                <label
                                                    htmlFor="form-field-field_3"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Phone{" "}
                                                </label>
                                                <input
                                                    size={1}
                                                    type="tel"
                                                    name="form_fields[field_3]"
                                                    id="form-field-field_3"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    placeholder="Phone"
                                                    required={true}
                                                    onChange={(e) => { setPhone(e.target.value) }}
                                                    aria-required="true"
                                                    pattern="[0-9()#&+*-=.]+"
                                                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                                />
                                            </div>
                                            <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                                <label
                                                    htmlFor="form-field-message"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Message{" "}
                                                </label>
                                                <textarea
                                                    className="elementor-field-textual elementor-field  elementor-size-sm"
                                                    name="form_fields[message]"
                                                    id="form-field-message"
                                                    rows={4}
                                                    required={true}
                                                    onChange={(e) => { setMessage(e.target.value) }}
                                                    placeholder="Your Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                <button

                                                    onClick={messageHandler}
                                                    className="elementor-button elementor-size-sm"
                                                >
                                                    <span>
                                                        <span className=" elementor-button-icon"></span>
                                                        <span className="elementor-button-text">Send</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9fe4511"
                        data-id="9fe4511"
                        data-element_type="column"
                        data-settings='{"background_background":"gradient"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-3963cbef elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="3963cbef"
                                data-element_type="section"
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-79785d22"
                                        data-id="79785d22"
                                        data-element_type="column"
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-17bc2257 elementor-widget elementor-widget-heading"
                                                data-id="17bc2257"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                        Contact us
                                                    </h2>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-58ca6354 elementor-widget elementor-widget-heading"
                                                data-id="58ca6354"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <span className="elementor-heading-title elementor-size-default">
                                                        OVER 15,000 HAPPY CUSTOMERS
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-27539988 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                data-id={27539988}
                                                data-element_type="widget"
                                                data-widget_type="icon-list.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <ul className="elementor-icon-list-items">
                                                        <li className="elementor-icon-list-item">
                                                            <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                111 W 11th St Ste 234 Erie, PA 16508
                                                            </span>
                                                        </li>
                                                        <li className="elementor-icon-list-item">
                                                            <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Mon-Sun: 7 AM – 9 PM
                                                            </span>
                                                        </li>
                                                        <li className="elementor-icon-list-item">
                                                            <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                +1 123-456-7890
                                                            </span>
                                                        </li>
                                                        <li className="elementor-icon-list-item">
                                                            <span className="elementor-icon-list-icon">
                                                                <i
                                                                    aria-hidden="true"
                                                                    className="far fa-envelope"
                                                                />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                info@seattle-skyline-limo.com
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-30c1b121 elementor-widget elementor-widget-text-editor"
                                                data-id="30c1b121"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                                    .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n                                                        background-color: #69727d;\n                                                        color: #fff\n                                                    }\n\n                                                    .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n                                                        color: #69727d;\n                                                        border: 3px solid;\n                                                        background-color: transparent\n                                                    }\n\n                                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n                                                        margin-top: 8px\n                                                    }\n\n                                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n                                                        width: 1em;\n                                                        height: 1em\n                                                    }\n\n                                                    .elementor-widget-text-editor .elementor-drop-cap {\n                                                        float: left;\n                                                        text-align: center;\n                                                        line-height: 1;\n                                                        font-size: 50px\n                                                    }\n\n                                                    .elementor-widget-text-editor .elementor-drop-cap-letter {\n                                                        display: inline-block\n                                                    }\n\n                                                "
                                                        }}
                                                    />
                                                    <p>
                                                        Our office is open Monday through Friday from 9am to 5pm. You can reach us by phone at 206-555-1234 or toll free at 1-800-555-1234. For after hours inquiries, please leave us a message and we will get back to you promptly the next business day.
                                                    </p>
                                                    <p>
                                                        You can also email us 24/7 at info@seattle-skyline-limo.com. We try to respond to all inquiries within 24 hours. Our physical office is located at 123 Main St, Seattle, WA 98102. Feel free to stop in if you are in the area!
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-29909eee elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                data-id="29909eee"
                                                data-element_type="widget"
                                                data-widget_type="divider.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-divider">
                                                        <span className="elementor-divider-separator"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Contact;