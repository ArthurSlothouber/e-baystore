import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import AdController from './Ads/controller'

const app = createKoaServer({
    controllers: [
        AdController
    ]
})

app.listen(4000, () => console.log('Listening on port 4000'))