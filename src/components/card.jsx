import thumb from "../assets/thumb.jpg";
export default function Card() {
    return (
        <div style={{ backgroundColor: "#f2f2f2",
            margin: 10,
           textAlign:"center",
            height: 300,
            width: 300,
            borderRadius: 5,
            padding: 5,
            display: "inline-block",
            shadowColor: 'D6D6D4',
            shadowOpacity: 0.6,
            shadowRadius: 3.84,
            marginRight: 10,
            boxShadow:10}}>
            <div style={{
                margin: 10,
                textAlign:"right"
                
            }}>
                A minute
            </div>
            <div style={{align: "center"}}>
            <img style={{
                width: 100,
                margin:'auto'
            }}
                src={thumb} />
                </div>
            <div style={{

                margin: 10
            }}>Stripe Inc</div>

            <div style={{

                margin: 10,
                fontSize:20

            }} >
                <b>Apple Pay on Stripe</b>
            </div >
            <div style={{

                margin: 10
            }} >
                Easy Apple pay Integration for

            </div >
            <div style={{ margin: 10 }}>
                businesses built on stripe
            </div>

        </div>




    )
}
