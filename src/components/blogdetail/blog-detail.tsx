import { Link, useParams } from "react-router-dom";
import './blog-detail.css';
import { useEffect, useState } from "react";
import { getBlogs } from "../../api/api";
import Spinner from "../loading/loading";

const BlogDetail = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [blog, setBlog] = useState({} as any);
    const [blogs, setBlogs] = useState([] as any);
    const [allBlogs, setAllBlogs] = useState([] as any);
    useEffect(() => {
        setLoading(true);
        getBlogs().then((res) => {
            setAllBlogs(res);
            setBlog(res.find((item: any) => item.id == slug));
            setBlogs(res.slice(0, 3).map((item: any) => {
                return {
                    id: item.id,
                    title: item.title.split(':')[0],
                }
            }));
            setLoading(false);
        }).catch((err) => {
            setError(true);
            setLoading(false);
        });
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (allBlogs.length > 0 && slug != blog.id) {
            window.scrollTo(0, 300);
            setBlog(allBlogs.find((item: any) => item.id == slug));
        }
    }, [slug]);

    return <div
        data-elementor-type="single"
        data-elementor-id={62}
        className="elementor elementor-62 elementor-location-single post-99 post type-post status-publish format-standard has-post-thumbnail hentry category-tour"
        data-elementor-post-type="elementor_library"
    >
        {
            (loading || error) ? <div style={{ paddingTop: "50px", paddingBottom: "50px" }}> <Spinner /></div> : <><section
                className="elementor-section elementor-top-section elementor-element elementor-element-2499bbe4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="2499bbe4"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
                style={{
                    backgroundColor: "#161938",
                    backgroundImage: `url(${blog.img ?
                        blog.img.includes('http:') ? 'https:' + blog.img.substr(5) : blog.img : ''})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6558c2db"
                        data-id="6558c2db"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-5f560d42 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="5f560d42"
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
                                className="elementor-element elementor-element-5a99d381 elementor-widget elementor-widget-heading"
                                data-id="5a99d381"
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
                                    <h1 className="elementor-heading-title elementor-size-default">
                                        {blog.id && blog.title.split(":")[0]}
                                    </h1>
                                </div>
                            </div>
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-29b217a7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="29b217a7"
                                data-element_type="section"
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    {/* <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-30783def"
                                        data-id="30783def"
                                        data-element_type="column"
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-25fdde0f elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-post-info"
                                                data-id="25fdde0f"
                                                data-element_type="widget"
                                                data-widget_type="post-info.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                                                        <li
                                                            className="elementor-icon-list-item elementor-repeater-item-cf73d9f elementor-inline-item"
                                                            itemProp="author"
                                                        >
                                                            <Link to={""} role="btn">
                                                                <span className="elementor-icon-list-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" /></svg>
                                                                </span>
                                                                <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-author">
                                                                    superadmin{" "}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li
                                                            className="elementor-icon-list-item elementor-repeater-item-9368dee elementor-inline-item"
                                                            itemProp="datePublished"
                                                        >
                                                            <Link to={""} role="btn">
                                                                <span className="elementor-icon-list-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>
                                                                </span>
                                                                <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                                                    {months[(new Date(blog.createdAt)).getMonth()]} {(new Date(blog.createdAt)).getDate()}, {(new Date(blog.createdAt)).getFullYear()}{" "}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="elementor-icon-list-item elementor-repeater-item-dfc5f70 elementor-inline-item">
                                                            <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-time">
                                                                9:45 am{" "}
                                                            </span>
                                                        </li>
                                                        <li
                                                            className="elementor-icon-list-item elementor-repeater-item-a15cc5d elementor-inline-item"
                                                            itemProp="commentCount"
                                                        >
                                                            <Link to={""} role="btn">
                                                                <span className="elementor-icon-list-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                                                </span>
                                                                <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-comments">
                                                                    No Comments{" "}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-45df0e9d"
                                        data-id="45df0e9d"
                                        data-element_type="column"
                                    >
                                        <div className="elementor-widget-wrap"></div>
                                    </div>
                                </div>
                            </section>
                            <div
                                className="elementor-element elementor-element-7f10abac elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="7f10abac"
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
                                className="elementor-element elementor-element-356c7a7c elementor-grid-mobile-3 elementor-share-buttons--view-icon-text elementor-share-buttons--skin-gradient elementor-share-buttons--shape-square elementor-grid-0 elementor-share-buttons--color-official elementor-widget elementor-widget-share-buttons"
                                data-id="356c7a7c"
                                data-element_type="widget"
                                data-widget_type="share-buttons.default"
                            >
                                <div className="elementor-widget-container">
                                    <link
                                        rel="stylesheet"
                                        href="/css/widget-share-buttons.min.css"
                                    />
                                    <div className="elementor-grid">
                                        <div className="elementor-grid-item">
                                            <div
                                                className="elementor-share-btn elementor-share-btn_facebook"
                                                role="button"
                                                tabIndex={0}
                                                aria-label="Share on facebook"
                                            >
                                                <span className="elementor-share-btn__icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>{" "}
                                                </span>
                                                <div className="elementor-share-btn__text">
                                                    <span className="elementor-share-btn__title">
                                                        Facebook{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-grid-item">
                                            <div
                                                className="elementor-share-btn elementor-share-btn_twitter"
                                                role="button"
                                                tabIndex={0}
                                                aria-label="Share on twitter"
                                            >
                                                <span className="elementor-share-btn__icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>{" "}
                                                </span>
                                                <div className="elementor-share-btn__text">
                                                    <span className="elementor-share-btn__title">
                                                        Twitter{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-grid-item">
                                            <div
                                                className="elementor-share-btn elementor-share-btn_linkedin"
                                                role="button"
                                                tabIndex={0}
                                                aria-label="Share on linkedin"
                                            >
                                                <span className="elementor-share-btn__icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>{" "}
                                                </span>
                                                <div className="elementor-share-btn__text">
                                                    <span className="elementor-share-btn__title">
                                                        LinkedIn{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-387a61b9 elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="387a61b9"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6600cc0b"
                            data-id="6600cc0b"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-7b2aab65 elementor-widget elementor-widget-image"
                                    data-id="7b2aab65"
                                    data-element_type="widget"
                                    data-widget_type="image.default"
                                >
                                    <div className="elementor-widget-container">
                                        <img
                                            width={2000}
                                            height={1333}
                                            src={blog.img ?
                                                blog.img.includes('http:') ? 'https:' + blog.img.substr(5) : blog.img : ''}
                                            className="attachment-full size-full wp-image-100"
                                            alt="Paper with checklist order held by young female shopper looking through it"
                                            loading="lazy"
                                            srcSet={blog.img ?
                                                (blog.img.includes('http:') ? 'https:' + blog.img.substr(5) : blog.img + " 2000w") : ''}
                                            sizes="(max-width: 2000px) 100vw, 2000px"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-7f8c6a6f elementor-widget elementor-widget-theme-post-content"
                                    data-id="7f8c6a6f"
                                    data-element_type="widget"
                                    data-widget_type="theme-post-content.default"
                                >
                                    <div className="elementor-widget-container">
                                        <h2>
                                            {blog.title}
                                        </h2>
                                        <p style={{ whiteSpace: "pre-wrap" }}>
                                            {
                                                blog.content
                                            }
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6324ebe4"
                            data-id="6324ebe4"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">

                                <div
                                    className="elementor-element elementor-element-7d41be09 elementor-widget elementor-widget-heading"
                                    data-id="7d41be09"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                >
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">
                                            Recent Posts
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-203116ef elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                    data-id="203116ef"
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
                                    className="elementor-element elementor-element-42339ab2 elementor-grid-1 elementor-posts--thumbnail-none elementor-posts--align-left elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-posts"
                                    data-id="42339ab2"
                                    data-element_type="widget"
                                    data-settings='{"classic_columns":"1","classic_row_gap":{"unit":"px","size":15,"sizes":[]},"classic_columns_tablet":"2","classic_columns_mobile":"1","classic_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                                    data-widget_type="posts.classic"
                                >
                                    <div className="elementor-widget-container">
                                        <link
                                            rel="stylesheet"
                                            href="/css/widget-posts.min.css"
                                        />
                                        <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid">
                                            {
                                                blogs.map((blog: any, index: number) => {
                                                    return <article key={`re-${index}`} className="elementor-post elementor-grid-item post-99 post type-post status-publish format-standard has-post-thumbnail hentry category-tour">
                                                        <div className="elementor-post__text">
                                                            <h3 className="elementor-post__title">
                                                                <Link to={`/blogs/${blog.id}`}>
                                                                    {blog.title}{" "}
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                    </article>
                                                })

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        }
    </div>
}
export default BlogDetail;