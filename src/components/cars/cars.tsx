import { Link } from "react-router-dom";
import Spinner from "../loading/loading";
import { useEffect, useState } from "react";

const Cars = (props: any) => {
   const [vehicles, setVehicles] = useState(props.vehicles);
   const [vehiclesLoading, setVehiclesLoading] = useState(props.vehiclesLoading);
   const [vehiclesError, setVehiclesError] = useState(props.vehiclesError);
   useEffect(() => {
      setVehicles(props.vehicles);
      setVehiclesLoading(props.vehiclesLoading);
      setVehiclesError(props.vehiclesError);
   }, [props.vehicles, props.vehiclesLoading, props.vehiclesError]);
   return <section
      className="elementor-section elementor-top-section elementor-element elementor-element-5109082b elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="5109082b"
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched"}'
   >
      <div className="elementor-container elementor-column-gap-default">
         <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2dc0b203"
            data-id="2dc0b203"
            data-element_type="column"
         >
            <div className="elementor-widget-wrap elementor-element-populated">
               <div
                  className="elementor-element elementor-element-2eabe8f8 elementor-widget elementor-widget-heading"
                  data-id="2eabe8f8"
                  data-element_type="widget"
                  data-widget_type="heading.default"
               >
                  <div className="elementor-widget-container">
                     <h2 className="elementor-heading-title elementor-size-default">
                        Our Limo Cars
                     </h2>
                  </div>
               </div>
               <div
                  className="elementor-element elementor-element-1c8de2e8 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="1c8de2e8"
                  data-element_type="widget"
                  data-widget_type="divider.default"
               >
                  <div className="elementor-widget-container">
                     <div className="elementor-divider">
                        <span className="elementor-divider-separator"></span>
                     </div>
                  </div>
               </div>
               {
                  (vehiclesError || vehiclesLoading) ? <Spinner /> : vehicles.map((cars: Array<any>, index: number) => {
                     return <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-5f272fec elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="5f272fec"
                        data-element_type="section"
                        key={`v-${index}`}
                     >
                        <div className="elementor-container elementor-column-gap-default">
                           {
                              cars.map((car, index) => {
                                 return <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-476c5a54"
                                    data-id="476c5a54"
                                    data-element_type="column"
                                    key={`c-${index}`}
                                 >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                       <div
                                          className="elementor-element elementor-element-f61149b elementor-vertical-align-middle elementor-position-top elementor-widget elementor-widget-image-box"
                                          data-id="f61149b"
                                          data-element_type="widget"
                                          data-widget_type="image-box.default"
                                       >
                                          <div className="elementor-widget-container">
                                             <style
                                                dangerouslySetInnerHTML={{
                                                   __html:
                                                      "\n     /*! elementor - v3.14.0 - 26-06-2023 */\n     .elementor-widget-image-box .elementor-image-box-content {\n         width: 100%\n     }\n\n     @media (min-width:768px) {\n\n         .elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper,\n         .elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper {\n             display: flex\n         }\n\n         .elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper {\n             text-align: right;\n             flex-direction: row-reverse\n         }\n\n         .elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper {\n             text-align: left;\n             flex-direction: row\n         }\n\n         .elementor-widget-image-box.elementor-position-top .elementor-image-box-img {\n             margin: auto\n         }\n\n         .elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper {\n             align-items: flex-start\n         }\n\n         .elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper {\n             align-items: center\n         }\n\n         .elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper {\n             align-items: flex-end\n         }\n     }\n\n     @media (max-width:767px) {\n         .elementor-widget-image-box .elementor-image-box-img {\n             margin-left: auto !important;\n             margin-right: auto !important;\n             margin-bottom: 15px\n         }\n     }\n\n     .elementor-widget-image-box .elementor-image-box-img {\n         display: inline-block\n     }\n\n     .elementor-widget-image-box .elementor-image-box-title a {\n         color: inherit\n     }\n\n     .elementor-widget-image-box .elementor-image-box-wrapper {\n         text-align: center\n     }\n\n     .elementor-widget-image-box .elementor-image-box-description {\n         margin: 0\n     }\n\n "
                                                }}
                                             />
                                             <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                   <div className="elementor-image-box-div">
                                                      <img
                                                         decoding="async"
                                                         src={car.img.replace("http:", "https:")}
                                                         title={car.name}
                                                         alt={car.name}
                                                         loading="lazy"
                                                      />
                                                      <div className="elementor-image-box-link">
                                                         <Link
                                                            className="elementor-button elementor-button-book elementor-button-link elementor-size-sm "
                                                            to={`/fleets/${car.id}`}
                                                         >
                                                            <span className="elementor-button-content-wrappe">
                                                               <span className="elementor-button-text">
                                                                  Book now
                                                               </span>
                                                            </span>
                                                         </Link>
                                                      </div>
                                                   </div>
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                   <h3 className="elementor-image-box-title">
                                                      {car.name}
                                                   </h3>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              })
                           }
                        </div>
                     </section>
                  })
               }
            </div>
         </div>
      </div>
   </section>
}

export default Cars;