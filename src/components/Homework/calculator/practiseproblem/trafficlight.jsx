import { useEffect, useState } from "react";

export default function TrafficLight() {

    const [light, setLight] = useState('red')
    useEffect(() => {

        const switchlight = () => {
            if (light == 'red') {
                setLight('green')
            }
            else if (light == 'green') {
                setLight('yellow')
            }
            else if (light == 'yellow') {
                setLight('red')
            }
        }
let interval
        if (light == 'red') {
            const interval = setInterval(switchlight, 4000)
        }
        if (light == 'green') {
            const interval = setInterval(switchlight, 500)
        }
        if (light == 'yellow') {
            const interval = setInterval(switchlight, 3000)
        }

        return () => clearInterval(interval)



    }, [light])
    return (
        <div style={styles.container}>
            <div style={{ ...styles.light, ...styles.red, opacity: light === 'red' ? 1 : 0.3 }} />
            <div style={{ ...styles.light, ...styles.yellow, opacity: light === 'yellow' ? 1 : 0.3 }} />
            <div style={{ ...styles.light, ...styles.green, opacity: light === 'green' ? 1 : 0.3 }} />
        </div>
    );
};

// Styles for the traffic light
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '300px',
        backgroundColor: '#333',
        borderRadius: '15px',
        padding: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    },
    light: {
        width: '80px',
        height: '80px',
        margin: '10px',
        borderRadius: '50%',
        transition: 'opacity 0.3s ease',
    },
    red: {
        backgroundColor: 'red',
    },
    yellow: {
        backgroundColor: 'yellow',
    },
    green: {
        backgroundColor: 'green',
    },

}