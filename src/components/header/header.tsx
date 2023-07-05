import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './header.css';
const Header = () => {
    const [path, setPath] = useState('/');
    const [open, setOpen] = useState(false);
    useEffect(() => {
        switch (window.location.href.split('/')[3]) {
            case 'about':
                document.title = 'About Us | Seattle Limo';
                setPath('/about')
                break;
            case 'services':
                document.title = 'Services | Seattle Limo';
                setPath('/services')
                break;
            case 'contact':
                document.title = 'Contact Us | Seattle Limo';
                setPath('/contact')
                break;
            case 'blogs':
                document.title = 'Blogs | Seattle Limo';
                setPath('/blogs')
                break;
            case 'fleets':
                document.title = 'Fleets | Seattle Limo';
                setPath('/fleets')
                break;
            default:
                document.title = 'Seattle Limo';
                setPath('/')
        }
    }, [])
    useEffect(() => {
        switch (path) {
            case '/about':
                document.title = 'About Us | Seattle Limo';
                break;
            case '/services':
                document.title = 'Services | Seattle Limo';
                break;
            case '/contact':
                document.title = 'Contact Us | Seattle Limo';
                break;
            case '/blogs':
                document.title = 'Blogs | Seattle Limo';
                break;
            case '/fleets':
                document.title = 'Fleets | Seattle Limo';
                break;
            default:
                document.title = 'Seattle Limo';
        }
    }, [path])

    return <div data-elementor-type="header" data-elementor-id={66} className="elementor elementor-66 elementor-location-header" data-elementor-post-type="elementor_library" >
        <header
            className="elementor-section elementor-top-section elementor-element elementor-element-6169c44e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="6169c44e"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-44886ef3"
                    data-id="44886ef3"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-6a880b4d elementor-widget elementor-widget-image"
                            data-id="6a880b4d"
                            data-element_type="widget"
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            '\n                                    /*! elementor - v3.14.0 - 26-06-2023 */\n                                    .elementor-widget-image {\n                                        text-align: center\n                                    }\n\n                                    .elementor-widget-image a {\n                                        display: inline-block\n                                    }\n\n                                    .elementor-widget-image a img[src$=".svg"] {\n                                        width: 48px\n                                    }\n\n                                    .elementor-widget-image img {\n                                        vertical-align: middle;\n                                        display: inline-block\n                                    }\n\n                                '
                                    }}
                                />{" "}
                                <Link to="/" onClick={() => setPath('/')} className={path === '/' ? 'elementor-item-active' : ''}>
                                    <img
                                        width={550}
                                        height={176}
                                        src="/logo.png"
                                        className="attachment-full size-full wp-image-67"
                                        alt=""
                                        loading="lazy"
                                        srcSet="/logo.png 550w, /logo.png 300w"
                                        sizes="(max-width: 550px) 100vw, 550px"
                                    />{" "}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-439e3acc"
                    data-id="439e3acc"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-5906e24 elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                            data-id="5906e24"
                            data-element_type="widget"
                            data-settings='{"full_width":"stretch","submenu_icon":{"value":"<i class=\"fas fa-chevron-down\"><\/i>","library":"fa-solid"},"layout":"horizontal","toggle":"burger"}'
                            data-widget_type="nav-menu.default"
                        >
                            <div className="elementor-widget-container">
                                <link
                                    rel="stylesheet"
                                    href="/css/widget-nav-menu.min.css"
                                />
                                <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-double-line e--animation-slide">
                                    <ul id="menu-1-5906e24" className="elementor-nav-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-105">
                                            <Link
                                                to="/"
                                                onClick={() => setPath('/')}
                                                aria-current={path === '/' ? 'page' : 'false'}
                                                className={path === '/' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                            >
                                                Home
                                            </Link>
                                        </li>

                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                            <Link
                                                to="/services"
                                                onClick={() => setPath('/services')}
                                                aria-current={path === '/services' ? 'page' : 'false'}
                                                className={path === '/services' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                            >
                                                Services
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                            <Link
                                                to="/fleets"
                                                onClick={() => setPath('/fleets')}
                                                aria-current={path === '/fleets' ? 'page' : 'false'}
                                                className={path === '/fleets' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                            >
                                                Fleet
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
                                            <Link
                                                to="/blogs"
                                                onClick={() => setPath('/blogs')}
                                                aria-current={path === '/blogs' ? 'page' : 'false'}
                                                className={path === '/blogs' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                            <Link
                                                to="/about"
                                                onClick={() => setPath('/about')}
                                                aria-current={path === '/about' ? 'page' : 'false'}
                                                className={path === '/about' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-74 current_page_item menu-item-104">
                                            <Link
                                                to="/contact"
                                                onClick={() => setPath('/contact')}
                                                aria-current={path === '/contact' ? 'page' : 'false'}
                                                className={path === '/contact' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div
                                    className={"elementor-menu-toggle " + (open ? ' elementor-active ' : '')}
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Menu Toggle"
                                    aria-expanded={open}
                                    onClick={() => setOpen(!open)}
                                >
                                    <i
                                        aria-hidden={!open}
                                        role="presentation"
                                        className="elementor-menu-toggle__icon--open eicon-menu-bar"
                                    />
                                    <i
                                        aria-hidden={open}
                                        role="presentation"
                                        className="elementor-menu-toggle__icon--close eicon-close"
                                    />{" "}
                                    <span className="elementor-screen-only">Menu</span>
                                </div>
                                <nav
                                    className={"elementor-nav-menu--dropdown elementor-nav-menu__container " + (open ? ' menu__container-open ' : ' ')}
                                    aria-hidden={!open}
                                >
                                    <ul id="menu-2-5906e24" className="elementor-nav-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-105">
                                            <Link
                                                to="/"
                                                onClick={() => { setPath('/'); setOpen(false) }}
                                                className={path === '/' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                                tabIndex={open ? 0 : -1}
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                            <Link
                                                to="/services"
                                                onClick={() => { setPath('/services'); setOpen(false) }}
                                                className={path === '/services' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                                tabIndex={open ? 0 : -1}
                                            >
                                                Services
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                            <Link
                                                to="/fleets"
                                                onClick={() => { setPath('/fleets'); setOpen(false) }}
                                                className={path === '/fleets' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                                tabIndex={open ? 0 : -1}
                                            >
                                                Fleet
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
                                            <Link
                                                to="/blogs"
                                                onClick={() => { setPath('/blogs'); setOpen(false) }}
                                                className={path === '/blogs' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                                tabIndex={open ? 0 : -1}
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                            <Link
                                                to="/about"
                                                onClick={() => { setPath('/about'); setOpen(false) }}
                                                className={path === '/about' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                                tabIndex={open ? 0 : -1}
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-74 current_page_item menu-item-104">
                                            <Link
                                                to="/contact"
                                                onClick={() => { setPath('/contact'); setOpen(false) }}
                                                aria-current="page"
                                                className={path === '/contact' ? ' elementor-item elementor-item-active ' : ' elementor-item '}
                                                tabIndex={open ? 0 : -1}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6aa06b5b"
                    data-id="6aa06b5b"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-4def12ab elementor-align-justify elementor-mobile-align-center elementor-widget elementor-widget-button"
                            data-id="4def12ab"
                            data-element_type="widget"
                            data-widget_type="button.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a
                                        className="elementor-button elementor-button-link elementor-size-md"
                                        href="tel:+251989872748"
                                    >
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-icon elementor-align-icon-left">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>{" "}
                                            </span>
                                            <span className="elementor-button-text">
                                                +1 (123) 456 7890
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
}

export default Header;