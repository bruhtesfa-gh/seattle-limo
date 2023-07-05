import { useEffect, useState } from "react";
import { getVehicles } from "../../api/api";
import Cars from "../cars/cars";
import './fleets.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const Fleets = () => {
    const { slug } = useParams();
    const [vehicles, setVehicles] = useState(Array<Array<any>>);
    const [vehiclesLoading, setVehiclesLoading] = useState(false);
    const [vehiclesError, setVehiclesError] = useState(false);
    const [bookingVehicle, setBookingVehicle] = useState({} as any);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [passengers, setPassengers] = useState("");
    const [luggage, setLuggage] = useState("");
    const [comments, setComments] = useState("");
    const submitHandler = async (e: any) => {
        e.preventDefault();
        let response = null;
        try {
            response = await axios.post('https://limo-backend.onrender.com/book',
                {
                    'description': comments == '' ? 'No comments' : comments,
                    'luggageCount': +luggage,
                    'personCount': +passengers,
                    'toAddress': pickup,
                    'fromAddress': pickup,
                    'phoneNumber': phone,
                    'email': email,
                    'lastName': name,
                    'firstName': name,
                    'journeyDate': date + ':00.000Z',
                    'vehicleId': bookingVehicle.id
                });
            if (response.status == 201) {
                toast.success('Successfully booked, reaching you shortly.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        } catch (error: any) {
            console.log(error);
            toast.error(error.response?.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    useEffect(() => {
        setVehiclesLoading(true);
        getVehicles().then((res) => {
            let cars: Array<Array<any>> = [];
            const data = res as Array<any>;
            const sections = Math.ceil(data.length / 3)
            for (let i = 0; i < sections % 3; i++) {
                cars.push(data.slice(i * 3, (i * 3) + 3));
            }
            setVehicles(cars);
            setVehiclesLoading(false);
        }).catch((err) => {
            setVehiclesError(true);
            setVehiclesLoading(false);
            console.log(err);
        });
    }, []);
    useEffect(() => {
        if (vehicles.length > 0) {
            if (!slug) {
                setBookingVehicle(vehicles[0][0]);
            } else {
                for (let i = 0; i < vehicles.length; i++) {
                    for (let j = 0; j < vehicles[i].length; j++) {
                        if (vehicles[i][j].id == slug) {
                            setBookingVehicle(vehicles[i][j]);
                            window.scrollTo(0, 750);
                            break;
                        }
                    }
                }
            }
        }

    }, [slug, vehicles]);
    return (
        <div
            data-elementor-type="wp-page"
            data-elementor-id={74}
            className="elementor elementor-74"
            data-elementor-post-type="page"
        >

            {/* Same as */}

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
                                        F
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
                                        Fleets
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
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9fe4511"
                        data-id="9fe4511"
                        data-element_type="column"
                        data-settings='{"background_background":"gradient"}'
                    >
                        <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-51fafdef elementor-section-content-top elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="51fafdef"
                            data-element_type="section"
                            data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
                        >
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3048e1b8"
                                data-id="3048e1b8"
                                data-element_type="column"
                                style={{ color: "#fff", padding: "0px 50px" }}
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-686f104e elementor-widget elementor-widget-heading"
                                        data-id="686f104e"
                                        data-element_type="widget"
                                        data-widget_type="heading.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">
                                                Reliable Private Transportation Services
                                            </h2>{" "}
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-15e84f9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                        data-id="15e84f9"
                                        data-element_type="widget"
                                        data-widget_type="divider.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-divider">
                                                <span className="elementor-divider-separator"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-3caac843 elementor-widget elementor-widget-text-editor"
                                        data-id="3caac843"
                                        data-element_type="widget"
                                        data-widget_type="text-editor.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <p style={{ whiteSpace: "pre-wrap" }}>
                                                {
                                                    bookingVehicle.id && bookingVehicle.description
                                                }
                                            </p>{" "}
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-1f906611 elementor-widget elementor-widget-image"
                                        data-id="1f906611"
                                        data-element_type="widget"
                                        data-widget_type="image.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <img
                                                decoding="async"
                                                width={2560}
                                                height={1707}
                                                src={bookingVehicle.id && bookingVehicle.img}
                                                className="attachment-full size-full wp-image-57"
                                                alt=""
                                                loading="lazy"
                                                srcSet={bookingVehicle.id && `${bookingVehicle.img} 2560w`}
                                                sizes="(max-width: 2560px) 100vw, 2560px"
                                            />{" "}
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-60d57cb9 elementor-widget elementor-widget-spacer"
                                        data-id="60d57cb9"
                                        data-element_type="widget"
                                        data-widget_type="spacer.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
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
                                    <form className="elementor-form" name="New Form" method="post" onSubmit={submitHandler}>
                                        <div className="elementor-form-fields-wrapper elementor-labels-">
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                                <label
                                                    htmlFor="form-field-name"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Full Name{" "}
                                                </label>
                                                <input
                                                    size={1}
                                                    type="text"
                                                    name="form_fields[name]"
                                                    id="form-field-name"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    placeholder="Full Name"
                                                    required={true}
                                                    onChange={e => setName(e.target.value)}
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
                                                    onChange={e => setPhone(e.target.value)}
                                                    aria-required="true"
                                                    pattern="[0-9()#&+*-=.]+"
                                                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
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
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                                <label
                                                    htmlFor="form-field-address"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Pick-Up Address{" "}
                                                </label>
                                                <input
                                                    size={1}
                                                    type="text"
                                                    name="form_fields[address]"
                                                    id="form-field-address"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    placeholder="Pick-Up Address"
                                                    required={true}
                                                    onChange={e => setPickup(e.target.value)}
                                                />
                                            </div>
                                            <div className="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-field_4 elementor-col-100">
                                                <label
                                                    htmlFor="form-field-field_date"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Date of booking{" "}
                                                </label>
                                                <input
                                                    type="datetime-local"
                                                    name="form_fields[field_4]"
                                                    id="form-field-field_date"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual elementor-date-field"
                                                    placeholder="Date of booking"
                                                    required={true}
                                                    onChange={e => setDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                                <label
                                                    htmlFor="form-field-passenger"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Number of Luggage{" "}
                                                </label>
                                                <input
                                                    size={1}
                                                    type="number"
                                                    name="form_fields[luggage]"
                                                    id="form-field-luggage"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    placeholder="Number of Luggage"
                                                    required={true}
                                                    onChange={e => setLuggage(e.target.value)}
                                                />
                                            </div>
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                                <label
                                                    htmlFor="form-field-passenger"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Number of Passengers{" "}
                                                </label>
                                                <input
                                                    size={1}
                                                    type="number"
                                                    name="form_fields[passenger]"
                                                    id="form-field-passenger"
                                                    className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    placeholder="Number of Passengers"
                                                    required={true}
                                                    onChange={e => setPassengers(e.target.value)}
                                                />
                                            </div>
                                            <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                                <label
                                                    htmlFor="form-field-message"
                                                    className="elementor-field-label elementor-screen-only"
                                                >
                                                    Event or Occasion{" "}
                                                </label>
                                                <textarea
                                                    className="elementor-field-textual elementor-field  elementor-size-sm"
                                                    name="form_fields[message]"
                                                    id="form-field-message"
                                                    rows={4}
                                                    placeholder="Event or Occasion"
                                                    defaultValue={""}
                                                    onChange={e => setComments(e.target.value)}
                                                />
                                            </div>
                                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                <button
                                                    onClick={submitHandler}
                                                    type="submit"
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
                </div>
            </section>
            <Cars vehicles={vehicles} vehiclesLoading={vehiclesLoading} vehiclesError={vehiclesError} />
        </div>
    );
}
export default Fleets;