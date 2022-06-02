export const Gebruikersonderzoek = (props) => {
    return (
        <div id='gebruikersonderzoek'>
            <div className='container'>

                <div className='row'>
                    <div className='col-xs-12'>
                    <h1>
                        <img src={'/img/icurai-logo.jpg'} alt="Logo"/>
                    </h1>
                    </div>
                </div>
                <br/><br/>
                <div className='row'>
                    <div className='col-xs-12'>

                        <div className='gebruikersonderzoek-text'>
                            <h3>{props.data ? props.data.paragraph : 'Loading'}</h3>
                            <a
                                href='https://forms.gle/QNUHEu5MVAoJ8nCf9'
                                target={'_blank'}
                                className='btn btn-custom btn-lg page-scroll'
                            >
                                Ik doe mee
                            </a>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
