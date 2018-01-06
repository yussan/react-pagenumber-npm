import { React, PureComponent } from 'react'
import PropTypes from 'prop-types'

// default class to export
class PageNumber extends PureComponent 
{
    constructor(props)
    {
        super(props)
        this.state = {
            // active page 
            active_page: this.props.query.page || 1,
            start: 0, 
            total_data: 1,
            limit_page: 1,
            min_page: 1,
            max_page: 2
        }
    }

    static defaultProps = {
        query: {}
    }

    static propTypes = {
        query: PropTypes.object,
        total: PropTypes.number
    }

    componentWillReceiveProps(np)
    {
        // if change active page
        this.setState({
            // change active page if update query page
            active: np.query.page || this.state.active
        })
    }

    render()
    {
        return (
            <div className='rpagenumber'>
                <li className='rpagenumber-item active'>1</li>
                <li className='rpagenumber-item'>2</li>
                <li className='rpagenumber-item'>3</li>
            </div>
        )
    }
}

export default PageNumber