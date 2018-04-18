import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import Ad from './entity'

@JsonController()
export default class AdController {

    @Get('/ads/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Ad.findOneById(id)
    }

    @Get('/ads')
    async allPages() {
        const ads = await Ad.find()
        return { ads }
    }

    @Put('/ads/:id')
    async updateAd(
        @Param('id') id: number,
        @Body() update: Partial<Ad>
    ) {
        const ad = await Ad.findOneById(id)
        if (!ad) throw new NotFoundError('Cannot find page')

        return Ad.merge(ad, update).save()
    }

    @Post('/ads')
    @HttpCode(201)
    createAd(
        @Body() ad: Ad
    ) {
        return ad.save()
    }
}
