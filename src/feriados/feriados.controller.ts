import { Controller , Post, Body} from '@nestjs/common';
import { FeriadosDto } from './feriados.dto';


@Controller('feriados')
export class FeriadosController {

    @Post()
    create(@Body() feriado: FeriadosDto) {
        return {
            message: 'Feriado criado com sucesso',
            feriado,
        };
    }
}

