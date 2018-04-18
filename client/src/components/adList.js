
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class AdList extends PureComponent {
    static propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })).isRequired
    }

    render() {
        const { ads } = this.props
        return (
            <div>
                <h1>All products</h1>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ads.map(ad => (<tr key={ad.id}>
                            <td>{ad.id}</td>
                            <td>{ad.title}</td>
                            <td>&euro; {ad.price}.00</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdList