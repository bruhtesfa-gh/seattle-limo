const Spinner = () => {
    const thickness = '4px'; // set the thickness here
    const speed = '0.65s'; // set the speed here
    const emptyColor = '#EDF2F7'; // set the empty color here
    const color = '#3B82F6'; // set the color here
    const size = '3rem'; // set the size here

    const spinnerStyle = {
        margin: 'auto',
        width: size,
        height: size,
        border: `${thickness} solid ${emptyColor}`,
        borderTopColor: color,
        borderRadius: '50%',
        animation: `spin ${speed} linear infinite`,
    };

    return <div style={spinnerStyle}></div>;
}

export default Spinner;