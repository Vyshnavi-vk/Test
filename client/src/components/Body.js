import React from 'react'

const Body = () => {
    return (
        <div
            className='rectangle'
        >
            <div className='frames'>
                <div className='frame frame1'>
                    <div className='group'>
                        <div className='circle'></div>
                    </div>
                    <div className='frame-text'>
                        Real-time Queue Management
                    </div>
                </div>

                <div className='frame frame2'>
                    <div className='group'>
                        <div className='frame2-icon'>
                            👥
                        </div>
                    </div>
                    <div className='frame-text'>
                        High Patient <br />Retention
                    </div>
                </div>

                <div className='frame frame3'>
                    <div className='group'>
                        <div className='frame3-icon'>
                            📆
                        </div>
                    </div>
                    <div className='frame-text'>
                        Reduced Appointment
                        <br />
                        No-Shows
                    </div>
                </div>
            </div>

            <div className='doc-logo'>
                <img src="https://s3-alpha-sig.figma.com/img/4383/dbd1/181e382992120e987b1437fdba5d0942?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFGeTbdpVZ5~ttDfNjfcsoX19Z9HdhFXQ3~8RqxRDp29--6EXP7AXj2x9mV8MRzcPuuNyNeHobCnkON7w0h~90Uq0vTERNJiLUHdXgIgWFU9ayIcWER7jmsYCI2NJCzPmUCEUz6dx0LDEySx7H8DqPETplD0bSVUDgo6iVKJbYxftk2vAJBIrh3D6yi~5a7fKuLGQgTV-xRhJuWN1erVBZkf~atDTd5EdJVGJm7qaBYyIXO4~2Jfp~ZfDwoWz8p4sjl9ih5LcSt68w1eTMUkBBc4dNOXuuqrsFhEwz7zy5ZGiRkhA4g1phWxAIUWYLqR7Nnw1DqmVCa-0vm-8vMZ5Q__"
                    alt="doc-logo"
                    className='doc-logo'
                />
            </div>
        </div>
    )
}

export default Body
