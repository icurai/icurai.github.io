export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='about-text'>
              <h2>icurai</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Waarom icurai?</h3>
              <div className='list-style'>
                <div className='col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
