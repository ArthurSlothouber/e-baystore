import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import adsById, { Ad } from './data'

@JsonController()
export default class AdController {

    @Get('/ads/:id')
    getAd(
        @Param('id') id: number
    ): Ad {
        return adsById[id]
    }

    @Put('/ads/:id')
    updateAd(
        @Param('id') id: number,
        @Body() body: Partial<Ad>
    ): Ad {
        console.log(`Incoming PUT body param:`, body)
        return adsById[id]
    }

    @Post('/ads')
    @HttpCode(201)
    createAd(
        @Body() body: Ad
    ): Ad {
        console.log(`Incoming POST body param:`, body)
        return body
    }
}
