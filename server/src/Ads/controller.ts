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
}
