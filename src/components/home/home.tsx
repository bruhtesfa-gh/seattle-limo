import './home.css';
import Cars from "../cars/cars";
import { useEffect, useState } from 'react';
import { getVehicles } from '../../api/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [vehicles, setVehicles] = useState([] as Array<Array<any>>);
    const [vehiclesLoading, setVehiclesLoading] = useState(false);
    const [vehiclesError, setVehiclesError] = useState(false);
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
    return <div
        data-elementor-type="wp-page"
        data-elementor-id={90}
        className="elementor elementor-90"
        data-elementor-post-type="page"
    >
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-4ba62e4b elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
            data-id="4ba62e4b"
            data-element_type="section"
            data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
        >
            <div className="elementor-background-overlay" />
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bf6f21e"
                    data-id="bf6f21e"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-3f9b6008 elementor-widget elementor-widget-spacer"
                            data-id="3f9b6008"
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
                            className="elementor-element elementor-element-28f6e201 elementor-widget elementor-widget-heading"
                            data-id="28f6e201"
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
                                    Seattle Limo
                                </span>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-51ab3fd6 elementor-widget elementor-widget-spacer"
                            data-id="51ab3fd6"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-33d0eccc elementor-widget elementor-widget-heading"
                            data-id="33d0eccc"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                    <b>Best Liimo in seattle</b>
                                </h2>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-4f22e3fe elementor-widget elementor-widget-heading"
                            data-id="4f22e3fe"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <p className="elementor-heading-title elementor-size-default">
                                    The best limos in network
                                </p>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-2c5b92bb elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-spacer"
                            data-id="2c5b92bb"
                            data-element_type="widget"
                            data-settings='{"_position":"absolute"}'
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
            </div>
        </section>

        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-233b2348 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="233b2348"
            data-element_type="section"
            data-settings='{"background_background":"gradient","stretch_section":"section-stretched"}'
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-390a92d7"
                    data-id="390a92d7"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-65bfb22b elementor-widget elementor-widget-image"
                            data-id="65bfb22b"
                            data-element_type="widget"
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <img
                                    decoding="async"
                                    src="/images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-prlpahlbnylii26zd7tw9uvwwxmco7z5i6ru9d3wic.jpg"
                                    title="ildar-garifullin-aAEe0jM1vno-unsplash-scaled.jpg"
                                    alt="ildar-garifullin-aAEe0jM1vno-unsplash-scaled.jpg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3d1c0d17"
                    data-id="3d1c0d17"
                    data-element_type="column"
                    data-settings='{"background_background":"gradient"}'
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-43232ca4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="43232ca4"
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-32923538"
                                    data-id={32923538}
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-e0d5dd1 elementor-widget elementor-widget-heading"
                                            data-id="e0d5dd1"
                                            data-element_type="widget"
                                            data-widget_type="heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <h1 className="elementor-heading-title elementor-size-default">
                                                    Seattle Limousine
                                                </h1>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-7d273e3 elementor-widget elementor-widget-text-editor"
                                            data-id="7d273e3"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <style
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            "\n     /*! elementor - v3.14.0 - 26-06-2023 */\n     .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n         background-color: #69727d;\n         color: #fff\n     }\n\n     .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n         color: #69727d;\n         border: 3px solid;\n         background-color: transparent\n     }\n\n     .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n         margin-top: 8px\n     }\n\n     .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n         width: 1em;\n         height: 1em\n     }\n\n     .elementor-widget-text-editor .elementor-drop-cap {\n         float: left;\n         text-align: center;\n         line-height: 1;\n         font-size: 50px\n     }\n\n     .elementor-widget-text-editor .elementor-drop-cap-letter {\n         display: inline-block\n     }\n\n "
                                                    }}
                                                />
                                                <p>
                                                    Lorem Ipsum&nbsp;is simply dummy text of the printing
                                                    and typesetting industry. Lorem Ipsum has been the
                                                    industry’s standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and
                                                    scrambled it to make a type specimen book. It has
                                                    survived not only five centuries, but also the leap
                                                    into electronic typesetting, remaining essentially
                                                    unchanged. It was popularised in the 1960s with the
                                                    release of Letraset sheets containing Lorem Ipsum
                                                    passages, and more recently with desktop publishing
                                                    software.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-7b1c7f59 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                            data-id="7b1c7f59"
                                            data-element_type="widget"
                                            data-widget_type="divider.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <style
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            '\n     /*! elementor - v3.14.0 - 26-06-2023 */\n     .elementor-widget-divider {\n         --divider-border-style: none;\n         --divider-border-width: 1px;\n         --divider-color: #0c0d0e;\n         --divider-icon-size: 20px;\n         --divider-element-spacing: 10px;\n         --divider-pattern-height: 24px;\n         --divider-pattern-size: 20px;\n         --divider-pattern-url: none;\n         --divider-pattern-repeat: repeat-x\n     }\n\n     .elementor-widget-divider .elementor-divider {\n         display: flex\n     }\n\n     .elementor-widget-divider .elementor-divider__text {\n         font-size: 15px;\n         line-height: 1;\n         max-width: 95%\n     }\n\n     .elementor-widget-divider .elementor-divider__element {\n         margin: 0 var(--divider-element-spacing);\n         flex-shrink: 0\n     }\n\n     .elementor-widget-divider .elementor-icon {\n         font-size: var(--divider-icon-size)\n     }\n\n     .elementor-widget-divider .elementor-divider-separator {\n         display: flex;\n         margin: 0;\n         direction: ltr\n     }\n\n     .elementor-widget-divider--view-line_icon .elementor-divider-separator,\n     .elementor-widget-divider--view-line_text .elementor-divider-separator {\n         align-items: center\n     }\n\n     .elementor-widget-divider--view-line_icon .elementor-divider-separator:after,\n     .elementor-widget-divider--view-line_icon .elementor-divider-separator:before,\n     .elementor-widget-divider--view-line_text .elementor-divider-separator:after,\n     .elementor-widget-divider--view-line_text .elementor-divider-separator:before {\n         display: block;\n         content: "";\n         border-bottom: 0;\n         flex-grow: 1;\n         border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n     }\n\n     .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type {\n         flex-grow: 0;\n         flex-shrink: 100\n     }\n\n     .elementor-widget-divider--element-align-left .elementor-divider-separator:before {\n         content: none\n     }\n\n     .elementor-widget-divider--element-align-left .elementor-divider__element {\n         margin-left: 0\n     }\n\n     .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type {\n         flex-grow: 0;\n         flex-shrink: 100\n     }\n\n     .elementor-widget-divider--element-align-right .elementor-divider-separator:after {\n         content: none\n     }\n\n     .elementor-widget-divider--element-align-right .elementor-divider__element {\n         margin-right: 0\n     }\n\n     .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {\n         border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n     }\n\n     .elementor-widget-divider--separator-type-pattern {\n         --divider-border-style: none\n     }\n\n     .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,\n     .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,\n     .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,\n     .elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {\n         width: 100%;\n         min-height: var(--divider-pattern-height);\n         -webkit-mask-size: var(--divider-pattern-size) 100%;\n         mask-size: var(--divider-pattern-size) 100%;\n         -webkit-mask-repeat: var(--divider-pattern-repeat);\n         mask-repeat: var(--divider-pattern-repeat);\n         background-color: var(--divider-color);\n         -webkit-mask-image: var(--divider-pattern-url);\n         mask-image: var(--divider-pattern-url)\n     }\n\n     .elementor-widget-divider--no-spacing {\n         --divider-pattern-size: auto\n     }\n\n     .elementor-widget-divider--bg-round {\n         --divider-pattern-repeat: round\n     }\n\n     .rtl .elementor-widget-divider .elementor-divider__text {\n         direction: rtl\n     }\n\n     .e-con-inner>.elementor-widget-divider,\n     .e-con>.elementor-widget-divider {\n         width: var(--container-widget-width, 100%);\n         --flex-grow: var(--container-widget-flex-grow)\n     }\n\n '
                                                    }}
                                                />
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

        <Cars vehicles={vehicles} vehiclesLoading={vehiclesLoading} vehiclesError={vehiclesError} />

        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-432aa851 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="432aa851"
            data-element_type="section"
            data-settings='{"background_background":"gradient","stretch_section":"section-stretched"}'
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5888d092"
                    data-id="5888d092"
                    data-element_type="column"
                    data-settings='{"background_background":"gradient"}'
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-76432491 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id={76432491}
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1f117e4f"
                                    data-id="1f117e4f"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-2b23b52d elementor-widget elementor-widget-heading"
                                            data-id="2b23b52d"
                                            data-element_type="widget"
                                            data-widget_type="heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">
                                                    Why choose us
                                                </h2>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-988ca92 elementor-widget elementor-widget-heading"
                                            data-id="988ca92"
                                            data-element_type="widget"
                                            data-widget_type="heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <span className="elementor-heading-title elementor-size-default">
                                                    Explore our first class limousine &amp; car rental
                                                    services
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-ad87503 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="ad87503"
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4e3bcd34"
                                    data-id="4e3bcd34"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-79764363 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                                            data-id={79764363}
                                            data-element_type="widget"
                                            data-widget_type="icon-box.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <link
                                                    rel="stylesheet"
                                                    href="/css/widget-icon-box.min.css"
                                                />
                                                <div className="elementor-icon-box-wrapper">
                                                    <div className="elementor-icon-box-icon">
                                                        <span className="elementor-icon elementor-animation-">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="elementor-icon-box-content">
                                                        <h3 className="elementor-icon-box-title">
                                                            <span>Variety of Car Brands </span>
                                                        </h3>
                                                        <p className="elementor-icon-box-description">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit. Ut elit tellus, luctus nec ullamcorper
                                                            mattis, pulvinar dapibus leo.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-413e355e"
                                    data-id="413e355e"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-494e7e13 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                                            data-id="494e7e13"
                                            data-element_type="widget"
                                            data-widget_type="icon-box.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="elementor-icon-box-wrapper">
                                                    <div className="elementor-icon-box-icon">
                                                        <span className="elementor-icon elementor-animation-">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z" /></svg>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="elementor-icon-box-content">
                                                        <h3 className="elementor-icon-box-title">
                                                            <span>Best Rate Guarantee </span>
                                                        </h3>
                                                        <p className="elementor-icon-box-description">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit. Ut elit tellus, luctus nec ullamcorper
                                                            mattis, pulvinar dapibus leo.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b8e783b"
                                    data-id="b8e783b"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-1e2e6fc8 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                                            data-id="1e2e6fc8"
                                            data-element_type="widget"
                                            data-widget_type="icon-box.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="elementor-icon-box-wrapper">
                                                    <div className="elementor-icon-box-icon">
                                                        <span className="elementor-icon elementor-animation-">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="elementor-icon-box-content">
                                                        <h3 className="elementor-icon-box-title">
                                                            <span>24/7 In your services </span>
                                                        </h3>
                                                        <p className="elementor-icon-box-description">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit. Ut elit tellus, luctus nec ullamcorper
                                                            mattis, pulvinar dapibus leo.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div
                            className="elementor-element elementor-element-4dcba748 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="4dcba748"
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
            className="elementor-section elementor-top-section elementor-element elementor-element-5c31668 elementor-section-content-middle elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="5c31668"
            data-element_type="section"
            data-settings='{"stretch_section":"section-stretched"}'
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2fbe4a8a"
                    data-id="2fbe4a8a"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-22f37dd4 elementor-widget elementor-widget-heading"
                            data-id="22f37dd4"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                    So what are you waiting for?
                                </h2>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-1a4f3e78 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="1a4f3e78"
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
                            className="elementor-element elementor-element-9e9ac57 elementor-widget elementor-widget-text-editor"
                            data-id="9e9ac57"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                        >
                            <div className="elementor-widget-container">
                                <p>
                                    Call us today and take advantage our great deals and special
                                    promotions in the Texas County region and surrounding
                                    communities.{" "}
                                </p>
                                <p>
                                    <em>
                                        <strong>Call us now – 123-456-6432</strong>
                                    </em>
                                </p>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-1baa6855 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
                            data-id="1baa6855"
                            data-element_type="widget"
                            data-widget_type="button.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <Link
                                        className="elementor-button elementor-button-link elementor-size-sm"
                                        to={"/services"}
                                    >
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">
                                                Check Our Limo Services
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-51316ad5"
                    data-id="51316ad5"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-7f062280 elementor-widget elementor-widget-image"
                            data-id="7f062280"
                            data-element_type="widget"
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <img
                                    decoding="async"
                                    width={2560}
                                    height={1706}
                                    src="/images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-2048x1365.jpg"
                                    className="attachment-full size-full wp-image-56"
                                    alt=""
                                    loading="lazy"
                                    srcSet="/images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-2048x1365.jpg 2560w, /images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-2048x1365.jpg 300w, /images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-2048x1365.jpg 1024w, /images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-2048x1365.jpg 768w, /images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-2048x1365.jpg 1536w, /images/ildar-garifullin-aAEe0jM1vno-unsplash-scaled-1-2048x1365.jpg 2048w"
                                    sizes="(max-width: 2560px) 100vw, 2560px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Home;