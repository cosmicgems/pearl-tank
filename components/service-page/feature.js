
function Feature(props)  {
    return (
        <div className="d-flex flex-column gap-2">
          <div
            className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <img src={props.icon} className="bi" width="1em" height="1em" alt="feature_icon" />
          </div>
          <h4 className="fw-semibold mb-0">{props.name}</h4>
          <p className="text-muted">{props.description}</p>
        </div>
    )
}

export default Feature;