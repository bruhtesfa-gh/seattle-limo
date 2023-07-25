import React, { useEffect } from "react";
import './blog.css';
import { getBlogs } from "../../api/api";
import Spinner from "../loading/loading";
import { Link } from "react-router-dom";
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const Blog = () => {
    const [blogs, setBlogs] = React.useState(Array<any>);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    useEffect(() => {
        setLoading(true);
        getBlogs().then((res) => {
            console.log(res[0]);
            setLoading(false);
            setBlogs(res);
        }).catch((err) => {
            setLoading(false);
            setError(true);
            console.log(err);
        });
    }, []);
    return <div
        data-elementor-type="wp-page"
        data-elementor-id={77}
        className="elementor elementor-77"
        data-elementor-post-type="page"
    >
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-544da609 elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
            data-id="544da609"
            data-element_type="section"
            data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
        >
            <div className="elementor-background-overlay" />
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4a463870"
                    data-id="4a463870"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-5de0c4e6 elementor-widget elementor-widget-heading"
                            data-id="5de0c4e6"
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
                                    B
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-33af1789"
                    data-id="33af1789"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-db93dd9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="db93dd9"
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
                            className="elementor-element elementor-element-1d186ae9 elementor-widget elementor-widget-heading"
                            data-id="1d186ae9"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-default">
                                    Blog
                                </h1>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-3317edbd elementor-widget elementor-widget-heading"
                            data-id="3317edbd"
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
                            className="elementor-element elementor-element-5c8004dd elementor-widget elementor-widget-spacer"
                            data-id="5c8004dd"
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
                            className="elementor-element elementor-element-889d201 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="889d201"
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
            className="elementor-section elementor-top-section elementor-element elementor-element-12220aa1 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="12220aa1"
            data-element_type="section"
            data-settings='{"stretch_section":"section-stretched"}'
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-487cca18"
                    data-id="487cca18"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-60e06112 elementor-widget elementor-widget-heading"
                            data-id="60e06112"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                    Our Latest Posts
                                </h2>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-668fabe9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="668fabe9"
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
                            className="elementor-element elementor-element-692b12e5 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts"
                            data-id="692b12e5"
                            data-element_type="widget"
                            data-settings='{"classic_columns":"3","classic_columns_tablet":"2","classic_columns_mobile":"1","classic_row_gap":{"unit":"px","size":35,"sizes":[]},"classic_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                            data-widget_type="posts.classic"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid">
                                    {
                                        loading ? <Spinner /> : blogs.map((blog, index) => {
                                            return <article key={`b-${index}`} className="elementor-post elementor-grid-item post-99 post type-post status-publish format-standard has-post-thumbnail hentry category-tour">
                                                <Link
                                                    className="elementor-post__thumbnail__link"
                                                    to={`/blogs/${blog.id}`}
                                                >
                                                    <div className="elementor-post__thumbnail">
                                                        <img
                                                            decoding="async"
                                                            width={2000}
                                                            height={1333}
                                                            src={blog.img ?
                                                                blog.img.includes('http:') ? 'https:' + blog.img.substr(5) : blog.img : ''}
                                                            className="attachment-full size-full wp-image-98"
                                                            alt="Hike in Patagonia"
                                                            loading="lazy"
                                                            srcSet={blog.img ?
                                                                blog.img.includes('http:') ? 'https:' + blog.img.substr(5) : blog.img : ''}
                                                            sizes="(max-width: 2000px) 100vw, 2000px"
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="elementor-post__text">
                                                    <h3 className="elementor-post__title">
                                                        <Link to={`/blogs/${blog.id}`}>
                                                            {blog.title.split(":")[0]}{" "}
                                                        </Link>
                                                    </h3>
                                                    <div className="elementor-post__meta-data">
                                                        <span className="elementor-post-date">
                                                            {months[(new Date(blog.createdAt)).getMonth()]} {(new Date(blog.createdAt)).getDate()} {(new Date(blog.createdAt)).getFullYear()}
                                                        </span>
                                                    </div>
                                                    <div className="elementor-post__excerpt">
                                                        <p>
                                                            {blog.content.substring(0, 100) + "..."}
                                                        </p>
                                                    </div>
                                                    <Link
                                                        className="elementor-post__read-more"
                                                        to={`/blogs/${blog.id}`}
                                                        aria-label={`Read more about ${blog.title.split(":")[0]}`}
                                                    >
                                                        Read More »{" "}
                                                    </Link>
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
    </div>
}

export default Blog;