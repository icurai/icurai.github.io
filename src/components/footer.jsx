export const Footer = (props) => {

    return (
        <div>
            <div id='footer'>
                <div className='container text-center'>

                    <div className='row'>
                        <div className='col-xs-12 col-md-6'>
                            <h3>Met de steun van</h3>
                        </div>
                        <div className='col-xs-12 col-md-6'>
                            {' '}
                            <img src='/img/BHIC_Logo_Horizontal_Color.webp' className='img-responsive' alt=''
                                 width={400}/>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
