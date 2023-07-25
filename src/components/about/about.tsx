import React, { useEffect } from "react";
import './about.css';
import { getVehicles } from "../../api/api";

const About = (props: any) => {
    useEffect(() => {
        getVehicles().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    return <div
        data-elementor-type="wp-page"
        data-elementor-id={87}
        className="elementor elementor-87"
        data-elementor-post-type="page"
    >
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-28b1dfa7 elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
            data-id="28b1dfa7"
            data-element_type="section"
            data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
        >
            <div className="elementor-background-overlay" />
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1abb0b65"
                    data-id="1abb0b65"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-5f3e8c69 elementor-widget elementor-widget-heading"
                            data-id="5f3e8c69"
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
                                    A
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-51c313b"
                    data-id="51c313b"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-b3ffdd9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="b3ffdd9"
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
                            className="elementor-element elementor-element-57b1751c elementor-widget elementor-widget-heading"
                            data-id="57b1751c"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-default">
                                    About
                                </h1>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-1b285b65 elementor-widget elementor-widget-heading"
                            data-id="1b285b65"
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
                            className="elementor-element elementor-element-1b178418 elementor-widget elementor-widget-spacer"
                            data-id="1b178418"
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
                            className="elementor-element elementor-element-476c50ae elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="476c50ae"
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
            className="elementor-section elementor-top-section elementor-element elementor-element-38924b14 elementor-section-content-middle elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="38924b14"
            data-element_type="section"
            data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-33f6630f"
                    data-id="33f6630f"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-24773cf7 elementor-widget elementor-widget-image"
                            data-id="24773cf7"
                            data-element_type="widget"
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <img
                                    decoding="async"
                                    width={1539}
                                    height={2000}
                                    src="/images/businessman-inside-a-car-working-on-his-laptop.jpg"
                                    className="attachment-full size-full wp-image-46"
                                    alt=""
                                    loading="lazy"
                                    srcSet="/images/businessman-inside-a-car-working-on-his-laptop.jpg 1539w"
                                    sizes="(max-width: 1539px) 100vw, 1539px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-59042bfd"
                    data-id="59042bfd"
                    data-element_type="column"
                    data-settings='{"background_background":"gradient"}'
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-4eb31d22 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="4eb31d22"
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7e146969"
                                    data-id="7e146969"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-4b3d514d elementor-widget elementor-widget-heading"
                                            data-id="4b3d514d"
                                            data-element_type="widget"
                                            data-widget_type="heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">
                                                    Who we are?
                                                </h2>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-476f2a93 elementor-widget elementor-widget-heading"
                                            data-id="476f2a93"
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
                                            className="elementor-element elementor-element-24b5e019 elementor-widget elementor-widget-text-editor"
                                            data-id="24b5e019"
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
                                                    Seattle Limosine Service has been proudly serving the Seattle area since 2005. We got our start with just two luxury sedans and a passion for offering exceptional transportation experiences. Over the years, we've grown our fleet size and expanded our service area while maintaining the high standards of quality, reliability, and personalized care that our clients expect.
                                                </p>
                                                <p>
                                                    Today, we operate a diversified fleet of luxury SUVs, vans, and sedan limousines. In total, we have over 15 late model vehicles available to serve the Puget Sound region. Our team of professional chauffeurs are fully trained, certified, and experienced in ensuring every ride is comfortable, safe, and enjoyable. We take pride in knowing all of our clients by name and tailoring our service to match their specific needs and preferences. Whether an essential airport run or an extravagant night out, we strive to make every ride feel like a memorable luxury experience. Our mission is simple - to consistently deliver supreme ground transportation with a personal touch, one satisfied client at a time.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-263441ad elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                            data-id="263441ad"
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
}

export default About;