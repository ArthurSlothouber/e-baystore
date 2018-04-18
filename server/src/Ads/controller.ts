import { JsonController, Get, Param } from 'routing-controllers'
import adsById, { Ad } from './data'

@JsonController()
export default class AdController {

    @Get('/ads/:id')
    getAd(
        @Param('id') id: number
    ): Ad {
        return adsById[id]
    }
}
