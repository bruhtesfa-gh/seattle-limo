import { Link, NavLink } from "react-router-dom";
import "./services.css";
import { useEffect, useState } from "react";
import { getServices } from "../../api/api";
import Spinner from "../loading/loading";
const Services = () => {
  const [services, setServices] = useState(Array<any>);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getServices()
      .then((res) => {
        setLoading(false);
        setServices(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  console.log(services);
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id={84}
      className="elementor elementor-84"
      data-elementor-post-type="page"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-2d11712f elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
        data-id="2d11712f"
        data-element_type="section"
        data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
      >
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1f093990"
            data-id="1f093990"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-696af89b elementor-widget elementor-widget-heading"
                data-id="696af89b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                    .elementor-heading-title {\n                                        padding: 0;\n                                        margin: 0;\n                                        line-height: 1\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n                                        color: inherit;\n                                        font-size: inherit;\n                                        line-height: inherit\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-small {\n                                        font-size: 15px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n                                        font-size: 19px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-large {\n                                        font-size: 29px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n                                        font-size: 39px\n                                    }\n\n                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n                                        font-size: 59px\n                                    }\n\n                                ",
                    }}
                  />
                  <span className="elementor-heading-title elementor-size-default">
                    S
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72f45129"
            data-id="72f45129"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-62a82ae8 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                data-id="62a82ae8"
                data-element_type="widget"
                data-widget_type="divider.default"
              >
                <div className="elementor-widget-container">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                    .elementor-widget-divider {\n                                        --divider-border-style: none;\n                                        --divider-border-width: 1px;\n                                        --divider-color: #0c0d0e;\n                                        --divider-icon-size: 20px;\n                                        --divider-element-spacing: 10px;\n                                        --divider-pattern-height: 24px;\n                                        --divider-pattern-size: 20px;\n                                        --divider-pattern-url: none;\n                                        --divider-pattern-repeat: repeat-x\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider {\n                                        display: flex\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider__text {\n                                        font-size: 15px;\n                                        line-height: 1;\n                                        max-width: 95%\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider__element {\n                                        margin: 0 var(--divider-element-spacing);\n                                        flex-shrink: 0\n                                    }\n\n                                    .elementor-widget-divider .elementor-icon {\n                                        font-size: var(--divider-icon-size)\n                                    }\n\n                                    .elementor-widget-divider .elementor-divider-separator {\n                                        display: flex;\n                                        margin: 0;\n                                        direction: ltr\n                                    }\n\n                                    .elementor-widget-divider--view-line_icon .elementor-divider-separator,\n                                    .elementor-widget-divider--view-line_text .elementor-divider-separator {\n                                        align-items: center\n                                    }\n\n                                    .elementor-widget-divider--view-line_icon .elementor-divider-separator:after,\n                                    .elementor-widget-divider--view-line_icon .elementor-divider-separator:before,\n                                    .elementor-widget-divider--view-line_text .elementor-divider-separator:after,\n                                    .elementor-widget-divider--view-line_text .elementor-divider-separator:before {\n                                        display: block;\n                                        content: "";\n                                        border-bottom: 0;\n                                        flex-grow: 1;\n                                        border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n                                    }\n\n                                    .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type {\n                                        flex-grow: 0;\n                                        flex-shrink: 100\n                                    }\n\n                                    .elementor-widget-divider--element-align-left .elementor-divider-separator:before {\n                                        content: none\n                                    }\n\n                                    .elementor-widget-divider--element-align-left .elementor-divider__element {\n                                        margin-left: 0\n                                    }\n\n                                    .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type {\n                                        flex-grow: 0;\n                                        flex-shrink: 100\n                                    }\n\n                                    .elementor-widget-divider--element-align-right .elementor-divider-separator:after {\n                                        content: none\n                                    }\n\n                                    .elementor-widget-divider--element-align-right .elementor-divider__element {\n                                        margin-right: 0\n                                    }\n\n                                    .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {\n                                        border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n                                    }\n\n                                    .elementor-widget-divider--separator-type-pattern {\n                                        --divider-border-style: none\n                                    }\n\n                                    .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,\n                                    .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,\n                                    .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,\n                                    .elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {\n                                        width: 100%;\n                                        min-height: var(--divider-pattern-height);\n                                        -webkit-mask-size: var(--divider-pattern-size) 100%;\n                                        mask-size: var(--divider-pattern-size) 100%;\n                                        -webkit-mask-repeat: var(--divider-pattern-repeat);\n                                        mask-repeat: var(--divider-pattern-repeat);\n                                        background-color: var(--divider-color);\n                                        -webkit-mask-image: var(--divider-pattern-url);\n                                        mask-image: var(--divider-pattern-url)\n                                    }\n\n                                    .elementor-widget-divider--no-spacing {\n                                        --divider-pattern-size: auto\n                                    }\n\n                                    .elementor-widget-divider--bg-round {\n                                        --divider-pattern-repeat: round\n                                    }\n\n                                    .rtl .elementor-widget-divider .elementor-divider__text {\n                                        direction: rtl\n                                    }\n\n                                    .e-con-inner>.elementor-widget-divider,\n                                    .e-con>.elementor-widget-divider {\n                                        width: var(--container-widget-width, 100%);\n                                        --flex-grow: var(--container-widget-flex-grow)\n                                    }\n\n                                ',
                    }}
                  />
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-23e9200e elementor-widget elementor-widget-heading"
                data-id="23e9200e"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    Services
                  </h1>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-65f4baa7 elementor-widget elementor-widget-heading"
                data-id="65f4baa7"
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
                className="elementor-element elementor-element-6d6d8831 elementor-widget elementor-widget-spacer"
                data-id="6d6d8831"
                data-element_type="widget"
                data-widget_type="spacer.default"
              >
                <div className="elementor-widget-container">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                    .elementor-column .elementor-spacer-inner {\n                                        height: var(--spacer-size)\n                                    }\n\n                                    .e-con {\n                                        --container-widget-width: 100%\n                                    }\n\n                                    .e-con-inner>.elementor-widget-spacer,\n                                    .e-con>.elementor-widget-spacer {\n                                        width: var(--container-widget-width, var(--spacer-size));\n                                        --align-self: var(--container-widget-align-self, initial);\n                                        --flex-shrink: 0\n                                    }\n\n                                    .e-con-inner>.elementor-widget-spacer>.elementor-widget-container,\n                                    .e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,\n                                    .e-con>.elementor-widget-spacer>.elementor-widget-container,\n                                    .e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer {\n                                        height: 100%\n                                    }\n\n                                    .e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,\n                                    .e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner {\n                                        height: var(--container-widget-height, var(--spacer-size))\n                                    }\n\n                                ",
                    }}
                  />
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-7af38b6f elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                data-id="7af38b6f"
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
        className="elementor-section elementor-top-section elementor-element elementor-element-5f375df1 elementor-section-content-middle elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="5f375df1"
        data-element_type="section"
        data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-76005791"
            data-id={76005791}
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-5c0a945b elementor-widget elementor-widget-image"
                data-id="5c0a945b"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width={2560}
                    height={1710}
                    src="/images/karl-kohler-ZMQ7DSpv39g-unsplash-scaled-1.jpg"
                    className="attachment-full size-full wp-image-38"
                    alt=""
                    loading="lazy"
                    srcSet="/images/karl-kohler-ZMQ7DSpv39g-unsplash-scaled-1.jpg 300w"
                    sizes="(max-width: 2560px) 100vw, 2560px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1bc4270c"
            data-id="1bc4270c"
            data-element_type="column"
            data-settings='{"background_background":"gradient"}'
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-2d1f92f8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="2d1f92f8"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4bf65bd6"
                    data-id="4bf65bd6"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-4bea4d14 elementor-widget elementor-widget-heading"
                        data-id="4bea4d14"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Our services
                          </h2>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-5080b0e4 elementor-widget elementor-widget-heading"
                        data-id="5080b0e4"
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
                        className="elementor-element elementor-element-1eb4d4e7 elementor-widget elementor-widget-text-editor"
                        data-id="1eb4d4e7"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                                    .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n                                                        background-color: #69727d;\n                                                        color: #fff\n                                                    }\n\n                                                    .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n                                                        color: #69727d;\n                                                        border: 3px solid;\n                                                        background-color: transparent\n                                                    }\n\n                                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n                                                        margin-top: 8px\n                                                    }\n\n                                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n                                                        width: 1em;\n                                                        height: 1em\n                                                    }\n\n                                                    .elementor-widget-text-editor .elementor-drop-cap {\n                                                        float: left;\n                                                        text-align: center;\n                                                        line-height: 1;\n                                                        font-size: 50px\n                                                    }\n\n                                                    .elementor-widget-text-editor .elementor-drop-cap-letter {\n                                                        display: inline-block\n                                                    }\n\n                                                ",
                            }}
                          />
                          <p>
                            The only thing that we offer longer than our stretch
                            limos themselves is our wide range of services and
                            outstanding track record.
                            <br />
                            <br />
                            Take a look at everything we cover:
                          </p>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-322967da elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                        data-id="322967da"
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
      {/*  */}
      <section className="services-container">
        {loading ? (
          <Spinner />
        ) : (
          services.map(({ img, text, id }) => {
            return (
              <Link to={String(id)} className="service-container">
                <div className="service-overlay" />
                <img
                  style={{
                    objectFit: "contain",
                  }}
                  src={img}
                  alt=""
                />
                <h3 className="service-title">
                  {text}
                  {/* <Link to={""}>{}</Link> */}
                </h3>
              </Link>
            );
          })
        )}
      </section>
    </div>
  );
};

export default Services;
