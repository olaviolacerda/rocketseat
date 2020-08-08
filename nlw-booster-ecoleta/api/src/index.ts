import { controllerContext } from './core/controllers';
import { HttpInterface } from './interfaces';
import { ControllerContext, IHttpInterface } from './types';
import { logger } from './utils/logger';

class Application {
  private httpInterface?: IHttpInterface

  constructor(private readonly context: ControllerContext) { }

  private async initHttpInterface(context: ControllerContext): Promise<void> {
    this.httpInterface = new HttpInterface(context);
    this.httpInterface.serve();
  }

  private async initServers(): Promise<void> {
    await this.initHttpInterface(this.context);
  }

  async start() {
    await this.initServers();
  }
}

const context = controllerContext();
const application = new Application(context);

setImmediate(async () => {
  await application.start();
  logger.info('Application started');
});

