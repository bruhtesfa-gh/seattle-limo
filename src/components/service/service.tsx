import { useParams } from "react-router-dom";
import Spinner from "../loading/loading";
import { useEffect, useState } from "react";
import { getService } from "../../api/api";

function Service() {
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState<any>();
  const [error, setError] = useState(false);
  useEffect(() => {
    getService(param.slug)
      .then((res) => {
        setLoading(false);
        setService(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  if (loading || !service) {
    return (
      <div
        style={{
          margin: "5%",
        }}
      >
        <Spinner />
      </div>
    );
  }
  return (
    <div
      style={{
        padding: "5%",
      }}
    >
      <img
        src={service?.img}
        style={{
          objectFit: "contain",
          width: "50%",
          marginBottom: "10px",
          marginRight: "10px",
          float: "left",
        }}
      />
      <div>
        <h3 style={{ textAlign: "center" }}> {service.title}</h3>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          {service.content}
        </p>
      </div>
    </div>
  );
}

export default Service;
