import { Controller, HttpStatus, Res, Get, Inject } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Logger } from 'winston';
const pjson = require('../package.json'); import { AppService } from './app.service';

@Controller()
@ApiTags('api users')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('winston') private readonly logger: Logger,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ping')
  @ApiOperation({
    description: 'verify if api is enable.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    description: 'return string "pong!"'
  })
  ping(@Res() res) {
    this.logger.debug('received ping...');
    res.status(HttpStatus.OK).send('pong');
  }
}
