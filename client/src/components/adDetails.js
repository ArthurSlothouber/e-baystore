import React, { PureComponent } from 'react'


class AdDetails extends PureComponent {
    render() {
        const { ad } = this.props
        return (
            <div>
                <h1>{ad.name}</h1>
            </div>
        )
    }
}

export default AdDetails